import "./Nav.css";

import Button from "./Button/Button.js"

import { Link } from "react-router-dom";

export default function Nav()
{

    const url="https://resumerahul.s3.us-east-2.amazonaws.com/Rahul_I.pdf"

    const resumeOpen=()=>
    {
        window.open(url);
    }

    return (
<>

<div className="Nav">

        <Link to="/">    <button className="NavButton ButtonNav font3">Home</button>   </Link>

        
        <Link to="/Contact">    <button className="NavButton font3">Contact Me</button>   </Link>

        
        <Link to="/Experience">    <button className="NavButton font3">Experience</button>   </Link>

        <button className="NavButton font3" onClick={resumeOpen}>
        <a href="">   Get My Resume   </a> 
        </button>



</div>

</>
    )
}