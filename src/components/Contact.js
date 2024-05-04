import {useRef, useState} from 'react';
import "../scss/ContactMe.scss";
import emailjs from '@emailjs/browser'

function Contact(){

    const form = useRef();

    const [alert, setAlert] = useState(null);
    const [packageOption, setPackageOption] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 'template_nl4go8d', form.current, process.env.REACT_APP_EMAILJS)
          .then((result) => {
            setAlert(<h1>Thank you for your inquiry! I will reach out to you ASAP!</h1>)
        }, (error) => {
            setAlert(<p>{error.text}</p>)
        });

      };
    
    let packages;
    let locationOfShoot = <div className="inputItems">
        <h3 style={{fontSize: "23px"}}>LOCATION OF SHOOT:</h3>
        <input name="location" style={{fontSize: "23px"}} type="text" placeholder="City, State"></input>
    </div>

    if(packageOption !== ""){
        if(packageOption === "Portraits & Senior Photos"){
            packages = 
            <div>
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>PACKAGES:</h3>
                    <select name="package">
                        <option value="">Select an option</option>
                        <option value="Mini Package">Mini Package</option>
                        <option value="Standard Package">Standard Package</option>
                        <option value="Platnium Package">Platnium Package</option>
                    </select>
                </div>
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>PHOTO CATEGORY:</h3>
                    <select name="photoCategory">
                        <option value="">Select an option</option>
                        <option value="Basic Portraits">Basic Portraits</option>
                        <option value="Senior Portraits">Senior Portraits</option>
                        <option value="Maternity">Maternity</option>
                        <option value="Boudouir">Boudoir</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {locationOfShoot}
            </div>
        } else if (packageOption === "Couples & Engagement"){
            packages = 
            <div>
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>PACKAGES:</h3>
                    <select name="package">
                        <option value="">Select an option</option>
                        <option value="Mini Package">Mini Package</option>
                        <option value="Standard Package">Standard Package</option>
                    </select>
                </div>
                {locationOfShoot}
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>PHOTO CATEGORY:</h3>
                    <select name="photoCategory">
                        <option value="">Select an option</option>
                        <option value="Basic Couples">Basic Couples</option>
                        <option value="Proposal">Proposal</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Maternity">Maternity</option>
                    </select>
                </div>
            </div>
        } else if(packageOption === "Weddings"){
            packages = 
            <div>
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>PACKAGES:</h3>
                    <select name="package">
                        <option value="">Select an option</option>
                        <option value="Elopement Package">Elopement Package</option>
                        <option value="Standard Package">Standard Package</option>
                    </select>
                </div>
                {locationOfShoot}
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>VENUE (If Applicable):</h3>
                    <input name="weddingVenue" style={{fontSize: "23px"}}/>
                </div>
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>DATE OF EVENT (If Applicable):</h3>
                    <input type="date" name="weddingDate" style={{fontSize: "23px"}}/>
                </div>
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>ARRIVAL TIME:</h3>
                    <input type="time" name="weddingTime" style={{fontSize: "23px"}}/>
                </div>
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>ESTIMATED NUMBER OF GUESTS:</h3>
                    <input type="number" name="weddingGuests" style={{fontSize: "23px"}}/>
                </div>
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>NUMBER OF BRIDAL PARTY:</h3>
                    <input type="number" name="weddingBridal" style={{fontSize: "23px"}}/>
                </div>
            </div>
        } else if(packageOption === "Families & Friends"){
            packages = 
            <div>
                {locationOfShoot}
                <div className="inputItems">
                    <h3 style={{fontSize: "23px"}}>NUMBER OF PARTICIPANTS:</h3>
                    <input name="familyParticipants" placeholder='(1, 2, 3, 4, 5, etc)' style={{fontSize: "23px"}}/>
                </div>
            </div>
        }
    }

    return(
        <div className="contactMe">
            <div>
                <h1>Booking Questionnaire</h1>
                <hr/>
                <form ref={form} onSubmit={sendEmail}>
                    {alert}
                    <h1 style={{color: "black", padding: "0", margin: "0"}}>CLIENT INFO:</h1>
                    <div className="inputItems">
                        <h3>NAME:</h3>
                        <input name="from_name" type="text" placeholder="John Doe" required/>
                    </div>
                    <div className="inputItems">
                        <h3>PHONE NUMBER:</h3>
                        <input type="text" placeholder="123-456-7890" name="number" required/>
                    </div>
                    <div className="inputItems">
                        <h3>EMAIL:</h3>
                        <input name="reply_to" type="text" placeholder="JohnDoe@none.com" required/>
                    </div>
                    <div className="inputItems">
                        <h3 style={{fontSize: "23px"}}>PREFERRED CONTACT METHOD:</h3>
                        <select name="method">
                            <option value="Phone">Phone</option>
                            <option value="Email">Email</option>
                        </select>
                    </div>
                    <h1 style={{color: "black"}}>TYPE OF SHOOT:</h1>
                    <div className="inputItems">
                        <h3 style={{fontSize: "23px"}}>SHOOT OPTIONS:</h3>
                        <select name="shootOption" value={packageOption} onChange={(e) => setPackageOption(e.target.value)}>;
                            <option value="">Select an option</option>
                            <option value="Portraits & Senior Photos">Portraits & Senior Photos</option>
                            <option value="Families & Friends">Families & Friends</option>
                            <option value="Couples & Engagement">Couples & Engagement</option>
                            <option value="Weddings">Weddings</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                    {packages}
                    <div className="inputItems" style={{display: "grid", margin: "auto", textAlign:"center"}}>
                        <h3>OTHER COMMENTS OR QUESTIONS:</h3>
                        <textarea name="message" style={{minHeight:"100px"}} type="text"></textarea>
                    </div>
                    <button>Submit</button>
                </form>
                <hr/>
            </div>
        </div>
    )
}

export default Contact;