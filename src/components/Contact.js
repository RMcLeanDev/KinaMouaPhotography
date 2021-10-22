import react, {useRef} from 'react';
import "../scss/ContactMe.scss";
import emailjs from 'emailjs-com';

function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("kalsdhkfj")
    
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 'template_gpiy5r9', form.current, process.env.REACT_APP_EMAILJS)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

      };

    return(
        <div className="contactMe">
            <div>
                <h1><em>Contact</em></h1>
                <hr/>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" required placeholder="Name:"/>
                    <input type="email" name="reply_to" required placeholder="Email:"/>
                    <textarea name="message" placeholder="Message:"/>
                    <button type="submit" value="Send" required> Send </button>
                </form>
                <hr/>
            </div>
        </div>
    )
}

export default Contact;