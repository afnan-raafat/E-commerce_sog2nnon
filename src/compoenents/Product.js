import { Link } from "react-router-dom";

export default function Product(props) {
  const { product, showButton } = props;

  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top h-100 w-50" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title" style={{fontSize:"25px",color:"#bc6c25",fontFamily:"fantasy"}}>{product.title}</h5>
          <p className="card-text" style={{fontFamily:"inherit"}}>{product.description}</p>
          <p style={{color:"#283618",fontWeight:"bold",fontFamily:"cursive",fontSize:"20px"}} > Price:{product.price}$</p>
          {showButton && (
            <Link className="btn" to={`/product/${product.id}`} style={{backgroundColor:"#283618",color:"#fff" ,fontSize:"18px"}}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
