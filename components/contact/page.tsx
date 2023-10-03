
'use client';
import { useState } from "react";
import { submitContact } from './../../app/contact/action'

const ContactForm = () => {
  const [status, setStatus] = useState(null);
  const handleSubmit = async (formData:FormData) => {
    try {
        const response = await submitContact({
            username: formData.get("username"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        })
        if (response.status === 200) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    }catch (e) {
        console.log(e)
    }
}
  return (
<>



    <form
      onSubmit={handleSubmit}
      action={handleSubmit}>
      <div>


        <label htmlFor="username" >
          Enter your name
          <input type="text" name="username" id="username"
            placeholder="Enter your name"
            required
          />
        </label>
      </div>

      <div>
        <label htmlFor="email" >
          Email
          <input type="text" name="email" id="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        <label htmlFor="phone" >
          Phone Number
          <input type="number" name="phone" id="phone"
            placeholder="Enter your phone"
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        <label htmlFor="message" >
          Message
          <textarea name="message" id="message" rows={5}
            placeholder="Enter your Message"
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        {status === 'success' && <p>Thank you for your message!</p>}
        {status === 'error' && <p>There was an error submitting your message. Please try again.</p>}

        <button type="submit">Send Message</button>
      </div>
    </form>


    </>
  );
};

export default ContactForm;