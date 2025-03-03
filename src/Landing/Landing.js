

import "./Landing.css";
import MainAnimation from "../Jsons/json1.json";
import Section2SVG from "../Jsons/json11.json";
import Lottie from "lottie-react";
import Marquee from "react-fast-marquee";
import {ReactTyped} from 'react-typed';
import {useState, useEffect} from 'react';
import AWSBadge from "../Assets/AWS-badge.png";
export default function Landing()
{


            const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
            const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
          
            // Update the state on window resize
            useEffect(() => {
              const handleResize = () => {
                setViewportWidth(window.innerWidth);
                setViewportHeight(window.innerHeight);
              };
          
              // Add event listener to resize event
              window.addEventListener('resize', handleResize);
          
              // Cleanup the event listener when the component unmounts
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, []); 


    return (
        <>
        <div className="Landing">
        <div className="temp">
    <h1>Viewport Resolution</h1>
      <p>Width: {viewportWidth}px</p>
      <p>Height: {viewportHeight}px</p>
    </div>





{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="Section1">
        <div className="Section1Heading">
            
            <h1 className="Section1Head font1">WHAT CAN I BUILD FOR YOU?
                <span className="Section1Typed font2">
                    <br />
                <ReactTyped
            strings={[
                "AWS CLOUD APPLICATIONS",
                "REACT.JS APPLICATIONS",
                "VUE.JS APPLICATIONS",
                "SPRING BOOT APPLICATIONS"
            ]} 
            typeSpeed={30}
            backSpeed={25}
            loop
            ></ ReactTyped>
                </span></h1>        
        </div>

        <div className="Section1SVG1">
        <Lottie animationData={MainAnimation} loop={true} />
        </div>
        </div>

{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */}



            <div className="Section2">
                <div className="Section2SVG2">
                <Lottie animationData={Section2SVG} loop={true} />
                </div>
                <div className="Section2Text">
                <h1 className="font2 SectionHeading">
                    GETTING TO KNOW ME:<br /><span className="SectionSubHeading font2">A LIFE IN TECH</span>
                    <p className="font3 Section2SubText">
                Walter Mitty (Ben Stiller), an employee at Life magazine, spends day after monotonous day developing photos for the publication. To escape the tedium, Walter inhabits a world of exciting daydreams in which he is the undeniable hero. Walter fancies a fellow employee named Cheryl (Kristen Wiig) and would love to date her, but he feels unworthy. However, he gets a chance to have a real adventure when Life's new owners send him on a mission to obtain the perfect photo for the final print issue.
                </p>
                </h1>

                </div>
            </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="section3">
            <div className="section3Text">
               <div className="font2 section3Box">
                <h1 className="SectionHeading">PROUDLY CERTIFIED:<br /><span className="font2 SectionSubHeading">AWS DEVELOPER ASSOCIATE</span>
                <p className="section3Subtext font3"> Walter Mitty (Ben Stiller), an employee at Life magazine, spends day after monotonous day developing photos for the publication. To escape the tedium, Walter inhabits a world of exciting daydreams in which he is the undeniable hero. Walter fancies a fellow employee named Cheryl (Kristen Wiig) and would love to date her, but he feels unworthy. </p>
                </h1>
               </div>
            </div>
            <div className="section3SVG">
            <img src={AWSBadge} className="ImgPng"></img>
            </div>
            </div>

        </div>
        </>
    )
}