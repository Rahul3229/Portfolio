import "./LogoCard.css";

export default function LogoCard({Img})
{
    return (
        <>
        <div className="LogoCard">
        <img src={Img} className="Logo"></img>
        </div>
        </>
    )
}