import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { EmailForm } from "../components/EmailForm"

export const Contact = () => {
  return (
    <>
      <div className="img-wrapper">
        <div className="blocker"></div>
        {/* <StaticImage src="../images/mailboxes.jpg" alt="animoji protrait" /> */}
      </div>
      <div className="form-container">
      <EmailForm />
      </div>
    </>
  )
}
