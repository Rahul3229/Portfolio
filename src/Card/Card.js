import "./Card.css";

import Lottie from "lottie-react";

import cardSVG from "../Jsons/json10.json";

export default function Card({jsonSRC,Head,Para})
{
    return (
        <>
        <div className="Card">
        <div className="CardSVG">
        <Lottie animationData={jsonSRC} loop={true} />
        </div>
        <div className="CardHeadPara">
        <h1 className="CardHead">{Head}</h1>
        <p className="CardPara">{Para}</p>
        </div>
        </div>
        </>
    )
}