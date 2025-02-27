import "./Button.css";

export default function Button ({Name,Color})
{
    return (
        <>
    
    <button className="Button" style={{ backgroundColor: Color }}>
    {Name}
    </button>
        
        </>
    )
}