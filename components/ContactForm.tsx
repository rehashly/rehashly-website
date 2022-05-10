import { Button } from '@/components/Button'
import { Image } from '@/components/Image'
import React, { useRef, useState } from 'react'

export function ContactForm() {
  const nameInputEl = useRef<HTMLInputElement>(null)
  const emailInputEl = useRef<HTMLInputElement>(null)
  const messageInputEl = useRef<HTMLTextAreaElement>(null)
  const [error, setError] = useState(false)
  const [sendingMessage, setSendingMessage] = useState(false)
  const [messageSent, setMessageSent] = useState(false)
  const [ackMessage, setAckMessage] = useState('')

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSendingMessage(true)

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
      setSendingMessage(false)
      setMessageSent(false)
      setAckMessage(error)
      return
    }

    nameInputEl.current.value = ''
    emailInputEl.current.value = ''
    messageInputEl.current.value = ''

    setError(false)
    setSendingMessage(false)
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
        <Button className="w-full xl:w-full" type="submit">
          {sendingMessage ? (
            <Image alt="Spinner" src="/static/images/spinner.svg" width={50} height={50} />
          ) : (
            'Submit'
          )}
        </Button>
        {(messageSent || error) && (
          <div
            className={`w-72 text-sm sm:w-96 ${
              messageSent ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'
            }`}
          >
            {ackMessage}
          </div>
        )}
      </form>
    </div>
  )
}
