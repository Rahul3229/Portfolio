import Lottie from "lottie-react";
import "./Confirmation.css";

import E_Mail from "../Assets/Contact8.json";

export default function Confirmation()
{
    return (
        <>
        <div className="Confirmation">
        <Lottie animationData={E_Mail} loop={true} />
        
        </div>
        <p className="ConfirmationHeading font3">Thank you for getting in touch! I'll respond as soon as I can with spiderman's pictures!</p>
        </>
    )
}