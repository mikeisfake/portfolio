import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { EmailForm } from "../components/EmailForm"

export const Contact = () => {
  return (
    <>
      <div className="form-container">
        <EmailForm />
      </div>
    </>
  )
}
