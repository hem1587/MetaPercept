import "./Card.css"
function Card({ImageUrl,Name,ShortDesc}) {
    return ( 
    <div className="card">
        <div className="card-content">
        <img src={ImageUrl} alt={Name} />
        <h3>{Name}</h3>
        <p>{ShortDesc}</p>
        <button>View</button>
        </div>
       
    </div> );
}

export default Card;