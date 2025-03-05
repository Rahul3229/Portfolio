import Lottie from "lottie-react";
import "./ContactComponent.css";
export default function ContactComponent({SVG,link,info})
{
    return (
        <>
        <div className="ContactComponent">
        <div className="ContactComponentSVG">
        <Lottie animationData={SVG} loop={true} />
        </div>
        <div className="ContactComponentText font3">
        <a className="ContactComponentLink" href={link}><p>{info}</p></a>
        </div>
        </div>
        </>
    )
}