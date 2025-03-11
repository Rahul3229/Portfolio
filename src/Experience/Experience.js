import "./Experience.css";
import Lottie from "lottie-react";
import {ReactTyped} from 'react-typed';
import CodingCard from "./CodingCard";
import React from "../Assets/react1.svg";
import Vue from "../Assets/vuejs.svg";
import TailwindCSS from "../Assets/tailwindcss.png";
import JavaScript from "../Assets/js2.svg";
import Oracle from "../Assets/OracleSVG.svg";
import MicrosoftSQL from "../Assets/micro2.svg";
import SpringBoot from "../Assets/spring.png";
import AWS from "../Assets/FinalSVG.svg";
import MySQL from "../Assets/mysql1.svg";
import MUI from "../Assets/muinew.svg";
import Git from "../Assets/git.svg";

import Marquee from "react-fast-marquee";

import SmallVue from "../Assets/smallvue.png";
import SmallTailwindCSS from "../Assets/smalltailwindcss.png";
import SmallJavaScript from "../Assets/smalljavascript.png";
import SmallReact from "../Assets/smallreact.png";
import SmallFigma from "../Assets/smallfigma.png";


import SmallOracle from "../Assets/smallOracle.svg";
import SmallPutty from "../Assets/smallputty.png";
import SmallSql from "../Assets/smallsql1.png";
import SmallLinux from "../Assets/smallLinux.svg";
import SmallPowerShell from "../Assets/smallPowerShell.png";
import SmallJira from "../Assets/smallJira.svg";

import SmallSpring from "../Assets/smallSpring2.png";
import SmallMui from "../Assets/mallmui.png";
import ReactRouter from "../Assets/React-Router.svg"
import SmallReactRouter from "../Assets/smallReactRouter.svg";
import SmallMySQL from "../Assets/sqlmy.png";
import SmallRedux from "../Assets/smallRedux.svg";
import Redux from "../Assets/redux.svg";
import SmallAWS from "../Assets/finalAWS.png";
import SmallSpringJPA from "../Assets/smallSpringJPA1.svg";
import SpringJPA from "../Assets/spring-3.svg";



export default function Experience ()
{

    const Code1='export default function Card(){<> <div className="CardContainer"><div className="CardItem1"><h1 className="CardHeading font1">Intersteller</h1><h2 className="CardSubHeading font2">Sir Christopher Nolan</h2></div><div className="CardItem2"><h1 className="CardHeading font1">Dark Knight</h1><h2 className="CardSubHeading font2"></h2></div><div className="CardItem2"></div></div></>}'
    const Color1="#e0e0e0"
    const Colour1="#380807";
    const Delay1=50;
    const Pretext1="";


    const Code2="new Vue({el:'#app', data: {data: null, loading: false, error: null}, methods:{fetchData:function(){this.loading = true; this.error = null; fetch ('https://Stak_Industries/Mark_I/flight_data.json').then(response=>{if(!response.ok){throw new Error('Error 404');}return response.json();})}}});"
    const Color2="#f1c40f"
    const Colour2="#34495e";
    const Delay2=200;
    const Pretext2="";


    const Code3='<div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"><h1 className="text-3xl font-bold text-center text-gray-800 mb-4">'
    const Color3="#1c2833"
    const Colour3="#95a5a6";
    const Delay3=150;
    const Pretext3='export default function App(){return(<div className="min-h-screen bg-gray-100 flex items-center justify-center">';


    const Code4="const url='https://jsonplaceholder.typicode.com/posts' fetch(url).then(response => { if (!response.ok){ throw new Error('Network response was not ok')}return response.json();})"
    const Color4="#CCFF00"
    const Colour4="#000000";
    const Delay4=230;
    const Pretext4=".then(data => { console.log(data); }).catch(error => {console.error('Fetch error:',error);});";



    const Code5="WHERE d.department_id = e.department_id AND d.department_name = 'IT');"
    const Color5="#9e9e9e "
    const Colour5="#455a64 ";
    const Delay5=200;
    const Pretext5=">>" +" "+" "+" "+"SELECT employee_id, first_name, last_name FROM employees e WHERE EXISTS (SELECT 1 FROM departments d"


    const Code6="SELECT e.EmployeeID, e.FirstName, e.LastName, d.DepartmentName FROM Employee e FULL OUTER JOIN Departments d ON e.DepartmentID = d.DepartmentID";
    const Color6="#ffca28"
    const Colour6="#212121";
    const Delay6=200;
    const Pretext6=""


    return (
        <>
        <div className="Experience1"> 
        <div className="Experience1Coding1">
        <CodingCard svg ={React} color={Color1} delay={Delay1} pretext={Pretext1} compiler={Colour1} code={Code1} width1="0" cardwidth="15"/>
        <CodingCard svg ={Vue} color={Color2} delay={Delay2} pretext={Pretext2} compiler={Colour2} code={Code2} width1="40" cardwidth="15"/>
        <CodingCard svg ={TailwindCSS} color={Color3} delay={Delay3} pretext={Pretext3} compiler={Colour3} code={Code3} width1="90" lettersize="0.9" cardwidth="15"/>
        <CodingCard svg ={JavaScript} color={Color4} delay={Delay4} pretext={Pretext4} compiler={Colour4} code={Code4} lettersize="0.7" cardwidth="15"/>
        </div>
        <div className="Experience1Text">
        <div className="HeadingSpace">
        <h1 className="font2 JobHeading">DBAFFINITY<br /><span className="font2 HeadingSpaceSpan">FRONT-END DEVELOPER</span><span className="HeadingSpaceSpan1">REACT.JS AND VUE.JS</span></h1>
       
        <p className="font3 HeadingDate">Febuary 2024 - Present <br /> <span className="PM">santosh.majji@dbaffinity.com<br />(Project Manager)</span></p> 

        <div className="font3 ExperienceKeyPoints">
        <p>•    Collaborated closely with UX/UI designers to convert wireframes into responsive, interactive components using Vue.js and Tailwind CSS.</p>
        <p>•    Led the migration of legacy front-end code to Vue 3, improving maintainability and scalability.</p>
        <p>•	Led the migration of an entire web application from Bootstrap to Tailwind CSS, improving the maintainability, customization, and responsiveness of the codebase.</p>
        <p>•	Built responsive and interactive user interfaces with React.js, delivering high-quality, maintainable solutions for clients in a variety of industries.</p>
        <p>•	Developed single-page applications (SPAs) using React Router, providing a fluid user experience with fast page transitions.</p>
        </div>  

        <h1 className="font2 ExperienceLogoHeading">TECHNOLOGY USED : </h1> 
        <div className="ExperienceLogoContain"> 
        <Marquee speed={40} gradient={false}>   
        <div className="ExperienceLogos">
        <img src={SmallFigma} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Figma</h1>    
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallVue} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Vue.js</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallReact} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React.js</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallTailwindCSS} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">TailwindCSS</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallJavaScript} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">JavaScript</h1>
        </div> 
        </Marquee>  
        </div> 
        <button className="ExperienceButton font3">Know More</button>    
        </div>   
        </div>
        </div>


        <div className="Experience2">  
        <div className="Experience2Coding2">
        <CodingCard svg ={Oracle} color={Color5} delay={Delay5} pretext={Pretext5} compiler={Colour5} code={Code5} width1="80" cardwidth="25" lettersize="1.1"/>
        <CodingCard svg ={MicrosoftSQL} color={Color6} delay={Delay6} pretext={Pretext6} compiler={Colour6} code={Code6} width1="90" cardwidth="25" lettersize="1"/>
        </div>  
        {/* <div className="Experience2Text">
        </div> */}
        <div className="Experience1Text">
        <div className="HeadingSpace">
        <h1 className="font2 JobHeading">ADS<br /><span className="font2 HeadingSpaceSpan">SQL DEVELOPER INTERN</span><span className="HeadingSpaceSpan1 HeadingSpaceSpan2">ORACLE AND MICROSOFT SQL</span></h1>
       
        <p className="font3 HeadingDate">January 2023- March 2023<br /> <span className="PM">ptammina@yahoo.com<br />(Database Manager)</span></p> 

        <div className="font3 ExperienceKeyPoints">
        <p>•	Actively involved in Requirement Gathering from Business Users for their Daily/Weekly/Monthly Reports.</p>
        <p>•	Developed eIS Reports using complex SQL queries using joins, sub-queries, and correlated sub-queries for Oracle E-Business Suite.</p>
        <p>•	Tuned several SQL Queries used in eIS Reports thereby decreasing the processing time by at least 30%.</p>
        </div>  

        <h1 className="font2 ExperienceLogoHeading">TECHNOLOGY USED : </h1> 
        <div className="ExperienceLogoContain"> 
        <Marquee speed={40} gradient={false}>   
        <div className="ExperienceLogos">
        <img src={SmallOracle} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Oracle</h1>    
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallSql} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Microsoft SQL</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallPutty} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Putty</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallLinux} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Linux</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallJira} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Jira</h1>
        </div> 
        </Marquee>  
        </div> 
        <button className="ExperienceButton font3">Know More</button>    
        </div>   
        </div>
        </div>



        <div className="Experience3"> 
        <div className="Experience3Coding3">
        <CodingCard svg ={React} color={Color1} delay={Delay1} pretext={Pretext1} compiler={Colour1} code={Code1} width1="0" cardwidth="15"/>
        <CodingCard svg ={SpringBoot} color={Color2} delay={Delay2} pretext={Pretext2} compiler={Colour2} code={Code2} width1="40" cardwidth="15"/>
        <CodingCard svg ={ReactRouter} color={Color3} delay={Delay3} pretext={Pretext3} compiler={Colour3} code={Code3} width1="90" lettersize="0.9" cardwidth="15"/>
        <CodingCard svg ={SpringJPA} color={Color4} delay={Delay4} pretext={Pretext4} compiler={Colour4} code={Code4} lettersize="0.7" cardwidth="15"/>
        <CodingCard svg ={MUI} color={Color3} delay={Delay3} pretext={Pretext3} compiler={Colour3} code={Code3} width1="90" lettersize="0.9" cardwidth="15"/>
        <CodingCard svg ={AWS} color={Color4} delay={Delay4} pretext={Pretext4} compiler={Colour4} code={Code4} lettersize="0.7" cardwidth="15"/>
        </div>
        {/* <div className="Experience3Text">
        </div> */}

        <div className="Experience3Text Experience1Text">
        <div className="HeadingSpace">
        <h1 className="font2 JobHeading">ARETE IT SERVICES PVT<br /><span className="font2 HeadingSpaceSpan">FULL-STACK DEVELOPER</span><span className="HeadingSpaceSpan1 HeadingSpaceSpan1">REACT.JS AND SPRING BOOT</span></h1>
       
        <p className="font3 HeadingDate">January 2023- March 2023<br /> <span className="PM">ptammina@yahoo.com<br />(Database Manager)</span></p> 

        <div className="font3 ExperienceKeyPoints">
        <p>•	Translated Adobe XD designs and other mockups into high-quality, responsive designs that are consistent with brand guidelines and industry best practices.</p>
        <p>•	Developed responsive single-page applications (SPAs) using React.js, improving user experience with dynamic and seamless page transitions.</p>
        <p>•	Designed and developed state management solutions using React Context and useContext hook for features such as user authentication, theme preferences, and application settings.</p>
        <p>•	Implemented React Router for managing navigation and routing, ensuring smooth transitions between views without page reloads.</p>
        <p>•	Utilized React hooks (useState, useEffect, useContext) to manage component state and side effects in a clean, functional programming style.</p>
        <p>•	Utilized Material-UI components such as Button, TextField, Grid, and Dialog to create consistent, mobile-first layouts and enhance user experience.</p>
        <p>•	Customized Material-UI themes and applied them across applications to maintain design consistency and adhere to branding guidelines.</p>
        <p>•	Developed and maintained multiple Spring Boot microservices for building scalable and high-performance backend applications.</p>
        <p>•	Designed and implemented RESTful APIs using Spring MVC and Spring Boot to support front-end development and mobile applications.</p>
        <p>•	Created robust CRUD (Create, Read, Update, Delete) operations using Spring Data JPA and Hibernate ORM to interface with relational databases such as MySQL and PostgreSQL.</p>
        <p>•	Worked in Agile development teams, collaborating with cross-functional teams to design, develop, and deploy Spring Boot-based applications.</p>
        <p>•	Configured AWS EC2 instances with proper security groups, VPCs, and IAM roles to run Spring Boot applications in a secure and isolated environment.</p>
        <p>•	Implemented AWS RDS (Relational Database Service) for hosting Spring Boot applications’ databases, ensuring high availability, automatic backups, and ease of scaling.</p>
        </div>  

        <h1 className="font2 ExperienceLogoHeading">TECHNOLOGY USED : </h1> 
        <div className="ExperienceLogoContain"> 
        <Marquee speed={40} gradient={false}>   
        <div className="ExperienceLogos">
        <img src={SmallMui} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Material UI</h1>    
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallSpring} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Spring Boot</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallSpringJPA} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Spring JPA</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallReact} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React.js</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallReactRouter} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React Router</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallRedux} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">React Redux</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallMySQL} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">MySQL</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallAWS} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">AWS</h1>
        </div> 
        </Marquee>  
        </div> 
        <button className="ExperienceButton font3">Know More</button>    
        </div>   
        </div>    

        </div>




        <div className="Experience4"> 
        <div className="Experience4Coding4">
        <CodingCard svg ={React} color={Color1} delay={Delay1} pretext={Pretext1} compiler={Colour1} code={Code1} width1="0" cardwidth="15"/>
        <CodingCard svg ={SpringBoot} color={Color2} delay={Delay2} pretext={Pretext2} compiler={Colour2} code={Code2} width1="40" cardwidth="15"/>
        <CodingCard svg ={AWS} color={Color3} delay={Delay3} pretext={Pretext3} compiler={Colour3} code={Code3} width1="90" lettersize="0.9" cardwidth="15"/>
        <CodingCard svg ={Git} color={Color4} delay={Delay4} pretext={Pretext4} compiler={Colour4} code={Code4} lettersize="0.7" cardwidth="15"/>
                <CodingCard svg ={AWS} color={Color3} delay={Delay3} pretext={Pretext3} compiler={Colour3} code={Code3} width1="90" lettersize="0.9" cardwidth="15"/>
        <CodingCard svg ={Git} color={Color4} delay={Delay4} pretext={Pretext4} compiler={Colour4} code={Code4} lettersize="0.7" cardwidth="15"/>
        </div>
        <div className="Experience3Text Experience1Text">
        <div className="HeadingSpace">
        <h1 className="font2 JobHeading">CONCENTRIX CATALYST<br /><span className="font2 HeadingSpaceSpan">FULL-STACK DEVELOPER</span><span className="HeadingSpaceSpan4">REACT.JS AND SPRING BOOT</span></h1>
       
        <p className="font3 HeadingDate">January 2018- December 2019<br /> <span className="PM">ptammina@yahoo.com<br />(Database Manager)</span></p> 

        <div className="font3 ExperienceKeyPoints">
        <p>•	Developed and maintained CSS styles to enforce a uniform visual design across the application, incorporating responsive design techniques and precise positioning to enhance layout consistency and usability.</p>
        <p>•	Used React JS for faster compilation and for developing reusable components.</p>
        <p>•	Developed responsive e-commerce websites using React JS, used Redux for state management, used React-Router for navigating between web pages.</p>
        <p>•	Used React Hooks such as “useEffect()” for making API calls, “useRef()” for accessing DOM elements without causing re-renders.</p>
        <p>•	Created Redux Store, to maintain a global state for the entire application and used reducers to modify the Store State Tree.</p>
        <p>•	Utilized the Fetch API to handle HTTP requests and responses, integrating external data sources and APIs into web applications seamlessly.</p>
        <p>•	Converted web designs from PSD mock-ups into React components, ensuring pixel-perfect implementation and adherence to design specifications.</p>
        <p>•	Managed source code using GitHub, employing features such as branching, pull requests, and code reviews to ensure effective version control and collaborative development.</p>
        <p>•	Engineered cross-platform hybrid applications using HTML, CSS, and JavaScript, resulting in a unified user experience across various devices and browsers by adhering to web standards and compatibility practices.</p>
        <p>•	Implemented Promises in React applications for handling asynchronous operations such as API calls, integrating with components to manage state and side effects efficiently.</p>
        <p>•	Experienced in handling JSON for data exchange between front-end and back-end systems, using JavaScript methods such as JSON.parse() and JSON.stringify() for data manipulation and storage.</p>
        <p>•	Created, built, and deployed microservices using Spring Boot, following best practices to make sure the applications are scalable, easy to maintain, and well-suited for cloud environments.</p>
        <p>•	Designed and implemented JPA entities and repositories, ensuring data consistency and efficient CRUD operations in the application.</p>
        <p>•	Managed transactional operations with Spring's @Transactional annotation to ensure ACID compliance for business-critical processes.</p>
        <p>•	Integrated H2 in-memory database for running unit and integration tests with Spring Boot, enabling fast and isolated testing of database interactions without needing an external database.</p>
        <p>•	Created automated testing suites using JUnit and Spring Boot Test, increasing test coverage to 85% and reducing the number of production bugs by 50%.</p>
        <p>•	Created automated testing suites using JUnit and Spring Boot Test, increasing test coverage to 85% and reducing the number of production bugs by 50%.</p>
        </div>  

        <h1 className="font2 ExperienceLogoHeading">TECHNOLOGY USED : </h1> 
        <div className="ExperienceLogoContain"> 
        <Marquee speed={40} gradient={false}>   
        <div className="ExperienceLogos">
        <img src={SmallOracle} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Oracle</h1>    
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallSql} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Microsoft SQL</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallPutty} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Putty</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallLinux} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Linux</h1>
        </div> 
        <div className="ExperienceLogos">
        <img src={SmallJira} className="ExperienceSmallLogo"></img>
        <h1 className="font3 ExperienceLogoName">Jira</h1>
        </div> 
        </Marquee>  
        </div> 
        <button className="ExperienceButton font3">Know More</button>    
        </div>   
        </div>   
        </div>


        </>
    )
}