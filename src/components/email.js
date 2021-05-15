import React from 'react'
import {useForm} from '@formspree/react'

import Thanks from './thanks'

const EmailForm = () => {

  const [state, handleSubmit] = useForm('xqkwppnd');
  if (state.succeeded) {
      return (
        <Thanks />
      );
  }

  window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

 return (
   <>
     <h1> <span role='img' aria-label='envelope emoji'>&#x1F4E9;</span> get in touch<span>.</span></h1>
     <form onSubmit={handleSubmit}>

       <input type="text" name="name" placeholder="your name" aria-label="your name"/>
       <input type="email" name="_replyto" placeholder="email address" aria-label="email address"/>
       <textarea name="message" id="message" cols="30" rows="10" placeholder="message" aria-label="message body"></textarea>

       <button type="submit" disabled={state.submitting} className="pulse"> send message </button>

     </form>
   </>
 )
}

export default EmailForm
