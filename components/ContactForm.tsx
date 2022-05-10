import { Button } from '@/components/Button'
import React, { useRef, useState } from 'react'

export function ContactForm() {
  const nameInputEl = useRef<HTMLInputElement>(null)
  const emailInputEl = useRef<HTMLInputElement>(null)
  const messageInputEl = useRef<HTMLTextAreaElement>(null)
  const [error, setError] = useState(false)
  const [messageSent, setMessageSent] = useState(false)
  const [ackMessage, setAckMessage] = useState('')

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch(`/api/contact/nodemailer`, {
      body: JSON.stringify({
        name: nameInputEl.current.value,
        email: emailInputEl.current.value,
        message: messageInputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessageSent(false)
      setAckMessage(error)
      return
    }

    nameInputEl.current.value = ''
    emailInputEl.current.value = ''
    messageInputEl.current.value = ''
    setError(false)
    setMessageSent(true)
    setAckMessage('Message received. Will get back to you soon. Thank you!')
  }

  return (
    <div className="align-center flex flex-row justify-center">
      <form className="flex w-80 flex-col gap-3 xl:w-96" onSubmit={sendMessage}>
        <div>
          <label className="sr-only" htmlFor="name-input">
            Name
          </label>
          <input
            autoComplete="name"
            className="w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
            id="name-input"
            name="name"
            placeholder="Full name"
            ref={nameInputEl}
            required
            type="text"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email
          </label>
          <input
            autoComplete="email"
            className="w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
            id="email-input"
            name="email"
            placeholder="Email address"
            ref={emailInputEl}
            required
            type="email"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="message-input">
            Message
          </label>
          <textarea
            autoComplete="message"
            className="w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
            id="message-input"
            name="message"
            placeholder="Message"
            rows={7}
            ref={messageInputEl}
            required
          />
        </div>
        <Button className="w-full xl:w-full" type="submit" enabledText="Submit" />
        {(messageSent || error) && (
          <div
            className={`w-72 text-sm sm:w-96 ${
              messageSent ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'
            }`}
          >
            {ackMessage}
          </div>
        )}
      </form>
    </div>
  )
}
