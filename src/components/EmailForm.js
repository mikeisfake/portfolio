import React from "react"
import { useForm } from "@formspree/react"

import Thanks from "./Thanks"
import { Emoji } from "./Emoji"

export const EmailForm = () => {
  const [state, handleSubmit] = useForm("xqkwppnd")
  if (state.succeeded) {
    return <Thanks />
  }

  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName("form")) {
        form.reset()
      }
    }
  }

  return (
    <>
      <h1>{"<contact />"}</h1>
      <p>
        Reach out to me if you think I may be a good fit for your team. I am
        also open to taking on freelance projects and am happy to discuss that
        with you as well.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="info">
          <input type="text" name="name" placeholder="name" aria-label="name" />
          <input
            type="email"
            name="_replyto"
            placeholder="email"
            aria-label="email"
          />
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="message"
          aria-label="message body"
        ></textarea>

        <button type="submit" disabled={state.submitting} className="pulse">
          <span className="material-icons">send</span>
        </button>
      </form>
    </>
  )
}
