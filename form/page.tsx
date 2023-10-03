
'use client';
import { useState } from "react";
import { submitContact } from '../app/contact/action'

const ContactForm = ({ Component, pageProps }) => {

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
    <div className="container w-50 p-5">
    <form onSubmit={handleSubmit} action={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label py-3">Enter Your Username</label>
        <input type="text" name="username" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Username" required/>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label py-3">Enter Your email</label>
        <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="yourGmail@gmail.com" required
            autoComplete="off"/>
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label py-3">Enter Your Phone Number</label>
        <input type="number" name="phone" className="form-control" id="exampleFormControlInput1" placeholder="Enter your phone no." required
            autoComplete="off"/> 
      </div>

      <div   className="mb-3">
        <label htmlFor="message"  className="form-label">Message</label>
        <textarea className="form-control"  name="message"  rows="3" required
            autoComplete="off"/>
      </div>

        {status === 'success' && <p>Thank you for your message!</p>}
        {status === 'error' && <p>Thank you for your message!</p>}
        <p className="hellop"></p>
      <button className="btn btn-primary"  type="submit">Send Message</button>
     

    </form>
    </div>


    </>
  );
};
export default ContactForm;
