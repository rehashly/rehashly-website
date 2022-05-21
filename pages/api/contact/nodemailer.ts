import axios from 'axios'
import * as validator from 'email-validator'
import { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from 'nodemailer'

type ValidateReCaptchaTokenResponse = {
  success: boolean
  challenge_ts: string
  hostname: string
  'error-codes': string[]
}

const RECAPTCHA_VALIDATION_ENDPOINT = 'https://www.google.com/recaptcha/api/siteverify'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message, recaptchaToken } = req.body
  // Fail silently if there's not recaptchaToken
  if (!recaptchaToken) {
    return res.status(201).json({ error: '' })
  }

  const { data: recaptchaVerificationResponse } = await axios.post<ValidateReCaptchaTokenResponse>(
    RECAPTCHA_VALIDATION_ENDPOINT,
    `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}&remoteip=${req.socket.remoteAddress}`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    }
  )

  // Fail silently if reCAPTCHA validation fails
  if (!recaptchaVerificationResponse.success) {
    return res.status(201).json({ error: '' })
  }

  if (!name) {
    return res.status(400).json({ error: 'Name is required' })
  }

  if (name.length > 60) {
    return res.status(400).json({ error: 'Name is too long' })
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  if (email.length > 100) {
    return res.status(400).json({ error: 'Email is too long' })
  }

  if (!validator.validate(email)) {
    return res.status(400).json({ error: 'Email is invalid' })
  }

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  if (message.length > 100000) {
    return res.status(400).json({ error: 'Message is too long' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: 'haitham@rehashly.com',
        clientId: process.env.GCP_CONTACT_BOT_CLIENT_ID,
        clientSecret: process.env.GCP_CONTACT_BOT_CLIENT_SECRET,
        refreshToken: process.env.GCP_CONTACT_BOT_REFRESH_TOKEN,
      },
    })

    await transporter.sendMail({
      from: `${name} <${email}>`,
      sender: `${name} <${email}>`,
      to: 'Haitham Gad <haitham@rehashly.com>',
      replyTo: email,
      subject: `Message from ${name}`,
      text: message,
    })

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
