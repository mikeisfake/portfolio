import React from 'react'

const EmailForm = () => {
 return (
   <form method="POST" action="#">
     <label htmlFor="name">name
       <input type="text" name="name"/>
     </label>
     <label htmlFor="email">email
       <input type="email" name="email"/>
     </label>
     <label htmlFor="message">
       <textarea name="message" id="message" cols="30" rows="10"></textarea>
     </label>
     <button type="submit">send</button>
     <input type="reset" value="clear"/>
   </form>
 )
}

export default EmailForm
