import "./Section.css";
import "./SectionMedia.css";

import MainAnimation from "./Jsons/json1.json";

import Lottie from "lottie-react";

import {useTypewriter, Cursor} from "react-simple-typewriter"; 
import {ReactTyped} from 'react-typed';


import Idea from "./Assets/Idea.jpg";

import Section2SVG from "./Jsons/json11.json";



import Section3SVG from "./Jsons/json9.json";


import SVG1 from "./Jsons/json27.json";

import SVG2 from "./Jsons/json2.json";

import SVG3 from "./Jsons/json8.json";

import SVG4 from "./Jsons/json25.json";

import Card from "./Card/Card.js";

import Cards from "./Assets/Cards.json";



import LogoCard from "./LogoCard.js";

import Active from "../Assets/Active.png";

import Honda from "../Assets/Honda5.png";

import Dell from "../Assets/DellEMC.png";

import Safelite from "../Assets/Vitamix1.png";

import Marquee from "react-fast-marquee";

import Section6SVG from "../Jsons/json33.json";


import Button from "../Button/Button.js";


const Head1="ERP";
const Head2="DATABASE MANAGEMENT SERVICES";
const Head3="PROFESSIONAL SERVICES";
const Head4="PROJECT BASED SERIVCES";

const Para1="Our ERP management services focus on delivering expert support for Oracle E-Business Applications, ensuring smooth integration and peak performance.";
const Para2="Our DB Management Services encompass comprehensive lifecycle support & management for Oracle and Microsoft SQL Server databases.";
const Para3="Our Professional Services specialise in Staff Augmentation and supplemental support with onsite consultants on a Time and Materials basis.";
const Para4="DBAffinity provides this service for specialised DBA projects, which demand additional time and effort and are negotiated on a project-specific basis.";



export default function Section()
{

return (
    <>
    <div className="Section">
   
    <div className="MiniSeection">
    
    <div className="Heading">
    <h1 className="Head font1">OPTIMIZE YOUR BUSINESS WITH </h1>
    <h2 className="TypeHead font2">
        <span>
    <ReactTyped
    strings={[
        "AWS CLOUD SERVICES",
        "SALESFORCE INNOVATIONS",
        "NETSUITE EXPERTISE"
    ]} 
    typeSpeed={150}
    backSpeed={150}
    loop
    ></ ReactTyped>
    </span>
    </h2>

   
    </div>
    
    <div className="Lottie1">
    <Lottie animationData={MainAnimation} loop={true} />
    </div>
    
    </div>    

    </div>


    <div className="Section2">

        <div className="MiniSection2">
     
        <div className="MiniSection2Image">
        {/* <img src={Idea} className="ImageIdea"></img> */}

        <Lottie animationData={Section2SVG} loop={true} />

        </div>
     
        <div className="MiniSection2Text">
         
         <h1 className="MiniSection2Heading font2">
            WHAT WE DO ECHOES <span>THROUGHOUT THE INDUSTRY</span>
         </h1>

        <p className="MiniSection2Para font3">
        DBAffinity specializes in delivering Remote ERP Management Services and Database Management Services, tailored to meet the unique needs of small and mid-sized corporations, as well as local, state, and federal government agencies. Our mission is to help organizations optimize their IT operations while ensuring seamless system performance and reliability. By offering targeted solutions, we empower our clients to focus on their core business objectives, free from the burden of day-to-day IT management.
        </p>

        <p className="MiniSection2Para1 font3">
        Our ERP Management Services are specifically designed to support Oracle E-Business applications. We provide comprehensive support, ranging from routine maintenance to troubleshooting and optimization. In the realm of Database Management Services, we cover the entire lifecycle of Oracle and Microsoft SQL Server databases. From setup and configuration to performance tuning and backup strategies, our services are engineered to ensure robust database performance and security.
        </p>

        </div>
        
        </div>
        
        </div>


        <div className="Section3">
            <div className="MiniSection3">

     

            <div className="Section3Info">
            <h1 className="font2">
            SERVICES WE OFFER    
            </h1>
            <p className="font3 fontSection3">
            Our Goal is to provide businesses with a launchpad to succeed and move further in their respective missions with smart and dynamic IT solutions. We pay great attention to details and that is what sets us apart from others.             Our Goal is to provide businesses with a launchpad to succeed and move further in their respective missions with smart and dynamic IT solutions. We pay great attention to details and that is what sets us apart from others.   
            Our Goal is to provide businesses with a launchpad to succeed and move further in their respective missions with smart and dynamic IT solutions. We pay great attention to details and that is what sets us apart from others.   
            Our Goal is to provide businesses with a launchpad to succeed and move further in their respective missions with smart and dynamic IT solutions. We pay great attention to details and that is what sets us apart from others.   
            </p>
            <button className="Section3Button">Get In Touch</button>
            </div>


            <div className="Section3SVG">
            <Lottie animationData={Section3SVG} loop={true} />
            </div>


            </div>
        </div>


        <div className="Section4">
            <h1 className="font2 Section4Heading">INDUSTRIES</h1>
            <div className="CardCollection">
                
            <Card Head={Head1} Para={Para1} jsonSRC={SVG1}/>
            <Card Head={Head2} Para={Para2} jsonSRC={SVG2}/>
            <Card Head={Head3} Para={Para3} jsonSRC={SVG3}/>
            <Card Head={Head4} Para={Para4} jsonSRC={SVG4}/>
        
        </div>




<h1 className="font2 Section5Head">OUR CUSTOMERS</h1>


<div className="LogoContain">
<Marquee speed={60} gradient={false}>
<div className="Logos">

<LogoCard  Img={Active}/>    
<LogoCard  Img={Honda}/>
<LogoCard  Img={Dell}/>  
<LogoCard  Img={Safelite}/>  
<LogoCard  Img={Safelite}/>  
   
</div> 
</Marquee>     
</div> 


<div className="FinalSection">

<div className="Section6SVGContain">
<Lottie animationData={Section6SVG} loop={true} />
</div>

<div className="FinalSectionInfo">
<h1 className="font2">TO EXPLORE, TO PIONEER, TO BUILD, TO BE INNOVATIVE,THAT'S <span>WHAT WE ARE</span></h1>
<p className="font3 FinalSectionPara">What differentiates us from the rest of the market players is the fact that we combine human experience and knowledge to get the best results from the technology</p>
<Button Name="Talk to us" Color="#e0e0e0"/>
</div>

</div>


        </div>


    </>
)

}