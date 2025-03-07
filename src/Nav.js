import "./Nav.css";

import Button from "./Button/Button.js"

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

    <button className="NavButton font3">
        Home
    </button>   
    <button className="NavButton font3">
        Experience
    </button>
    <button className="NavButton font3">
        Contact Me
    </button>
    <button className="NavButton font3" onClick={resumeOpen}>
    <a href="">   Get My Resume   </a> 
    </button>



</div>

</>
    )
}