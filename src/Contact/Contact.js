import Lottie from "lottie-react";
// import ContactSVG from "../Jsons/json12.json";
import ContactSVG from "../Jsons/json14.json";
// import ContactSVG from "../Jsons/json22.json";
// import ContactSVG from "../Jsons/json30.json";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { useState } from "react";
export default function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        const contactInfo = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
            comment: comment,
        }; 
    
        try {
            const response = await fetch("http://localhost:8080/contactInfo/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactInfo),
                
            });

            if (!response.ok) {
                throw new Error("Failed to submit data");
            }

            const data = await response.json();
            alert("Data submitted successfully!");
            console.log("Success:", data);

            //Send Emailing when submit
            sendEmail(contactInfo);

            // Clear the form after successful submission
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setComment("");
        } catch (error) {
            alert("Error submitting data.");
            console.error("Error:", error);
        }
    };
    const sendEmail = (contactInfo) => {
        emailjs
            .send("service_92orvhj", "template_guoxkao", contactInfo)
            .then(() => {
                alert("Email sent successfully!");
            })
            .catch((error) => {
                alert("Failed to send email.");
                console.error("Email Error:", error);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit} id="contactInfo">
                <div className="Contact">
                    <div className="ContactSVG">
                        <Lottie animationData={ContactSVG} loop={true} />
                    </div>
                    <div className="ContactForm">
                        <div className="ContactInputBoxes">
                            <input type="text" className="ContactInput font3" placeholder="Peter" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} ></input>
                            <input type="text" className="ContactInput font3" placeholder="Parker" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                        </div>

                        <div className="ContactInputBoxes">
                            <input type="email" className="ContactInput font3" placeholder="peter.parker@dailybugle.com" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            <input type="number" className="ContactInput font3" placeholder="(380) 206-6260" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                        </div>

                        <input type="text" className="ContactText" placeholder="Anything you want to say to spiderman?, or to me?" id="comment" value={comment} onChange={(e) => setComment(e.target.value)}></input>

                        <button type="submit"className="ContactButton font3" onclick="sendEmail()">Submit</button>
                    </div>
                </div>
                <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
                </script>
                <script type="text/javascript">
                    (function(){
                             emailjs.init({
                             publicKey: "tjRFG0QlxJBXMBvYf"
                                 })
                         })();
             
                </script>

            </form>
        </>
    );
}