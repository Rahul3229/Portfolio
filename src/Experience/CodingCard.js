import "./CodingCard.css";
import {ReactTyped} from 'react-typed';
import { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import Code1 from "../Assets/Code11.mp4";
import React from "../Assets/react1.svg";
import  Typewriter  from "typewriter-effect";

export default function CodingCard({code,svg,color,compiler,delay,pretext})
{

  const contentRef = useRef(null);
  const holder = code;  // Ensure holder is the string 'code'
  const [typed, setTyped] = useState('');

  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);

  useEffect(() => {

    if (contentRef.current) {
      // Scroll to the bottom whenever the component updates or content overflows
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }

    const timeout = setTimeout(() => {
      if (holder.length === typed.length) {
        setSwitch1(false);
        setSwitch2(true);
      }

      if (typed.length === 0) {
        setSwitch1(true);
        setSwitch2(false);
      }

      if (switch1) {
        setTyped(holder.slice(0, typed.length + 1));
      }

      if (switch2 && typed.length > 0) {
        setTyped(holder.slice(0, typed.length - 1));
      }
    }, delay);

    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  }, [typed, switch1, switch2, holder]);
    return(
        <>
        <div style={{backgroundColor:compiler}} className="CodingCard CodingSVG" ref={contentRef}>
          <h1 style={{color:color}}className="Code  font3">
         {pretext}  {typed}
          </h1>
          <div className="Blinking"></div>
          <img src={svg} className="CodingSVGImg"></img>
        </div>

        </>
    )
}