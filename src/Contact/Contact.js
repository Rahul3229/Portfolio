import Lottie from "lottie-react";
// import ContactSVG from "../Jsons/json12.json";
 import ContactSVG from "../Jsons/json14.json";
// import ContactSVG from "../Jsons/json22.json";
// import ContactSVG from "../Jsons/json30.json";
import "./Contact.css";
export default function Contact()
{
    return (
        <>
        <div className="Contact">
            <div className="ContactSVG">
            <Lottie animationData={ContactSVG} loop={true} />
            </div>
            <div className="ContactForm">
            <div className="ContactInputBoxes">
            <input type="text" className="ContactInput font3" placeholder="Peter"></input>
            <input type="text" className="ContactInput font3" placeholder="Parker"></input>
            </div>
            
            <div className="ContactInputBoxes">
            <input type="email" className="ContactInput font3" placeholder="peter.parker@dailybugle.com"></input>
            <input type="number" className="ContactInput font3" placeholder="(380) 206-6260"></input>
            </div>

            <input type="text" className="ContactText" placeholder="Anything you want to say to spiderman?, or to me?"></input>  
            
            <button className="ContactButton font3">Submit</button>
            </div>
        </div>
        </>
    )
}