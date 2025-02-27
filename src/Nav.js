import "./Nav.css";

import Button from "./Button/Button.js"

export default function Nav()
{
    return (
<>

<div className="Nav">
    <button className="NavButton">
        About
    </button>
    <button className="NavButton">
        Expertise
    </button>
    <button className="NavButton">
        Industries
    </button>
    <button className="NavButton">
        Open Positions
    </button>
    <button className="NavButton">
        Contact Us
    </button>



</div>

</>
    )
}