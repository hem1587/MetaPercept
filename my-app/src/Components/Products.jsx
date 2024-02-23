import "./Products.css"
import data from "../data.js"
import Card from "./Card.jsx";
function Products() {
    return ( <div className="productdiv">
       <h1 className="title1">Classes</h1>
       <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est?</p>
       <div className="card-list">
        {
            data.map((item)=>(
                <Card key={item.ID} {...item}/>
            ))
        }


       </div>
        
    </div> );
}

export default Products;