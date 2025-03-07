import "./Experience.css";
import Lottie from "lottie-react";
import {ReactTyped} from 'react-typed';
import CodingCard from "./CodingCard";
import React from "../Assets/react1.svg";
import Vue from "../Assets/vuejs.svg";
import TailwindCSS from "../Assets/tailwindcss.png";

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
    const Color3="#f9e79f f"
    const Colour3="#212f3d";
    const Delay3=150;
    const Pretext3='export default function App(){return(<div className="min-h-screen bg-gray-100 flex items-center justify-center">';

    return (
        <>
        <div className="Experience1">
        <div className="Experience1Coding1">
        <CodingCard svg ={React} color={Color1} delay={Delay1} pretext={Pretext1} compiler={Colour1} code={Code1}/>
        <CodingCard svg ={Vue} color={Color2} delay={Delay2} pretext={Pretext2} compiler={Colour2} code={Code2}/>
        <CodingCard svg ={TailwindCSS} color={Color3} delay={Delay3} pretext={Pretext3} compiler={Colour3} code={Code3}/>
        {/* <CodingCard />
        <CodingCard />
        <CodingCard /> */}
        </div>
        <div className="Experience1Text">

        </div>
        </div>
        </>
    )
}