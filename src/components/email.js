import React from 'react'
import {useForm} from '@formspree/react'

const EmailForm = () => {

  const [state, handleSubmit] = useForm('xqkwppnd');
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }

  window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

 return (
   <>
     <h1> <span role='img' aria-label='envelope emoji'>&#x1F4EE;</span> get in touch<span>.</span></h1>
     <form onSubmit={handleSubmit}>
       <label htmlFor="name">full name
         <input type="text" name="name" />
       </label>
       <label htmlFor="email">email address
         <input type="email" name="_replyto" />
       </label>
       <label htmlFor="message">message
         <textarea name="message" id="message" cols="30" rows="10"></textarea>
       </label>

       <button type="submit" disabled={state.submitting}> send message </button>

     </form>
   </>
 )
}

export default EmailForm
