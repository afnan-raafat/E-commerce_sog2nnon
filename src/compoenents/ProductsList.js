import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3" style={{color:"#283618" ,fontFamily:"serif" ,fontSize:"35px",fontWeight:"bold"}}> Our Products </h2>
      <div className="container">
        <button
          onClick={() => {
            getProducts();
          }}
          className="btn" style={{marginRight:"20px",fontSize:"25px",backgroundColor:"#283618",color:"#fff"}} >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => {
                getProductInCategory(cat);
              }}
              className="btn " style={{marginRight:"20px",fontSize:"25px",backgroundColor:"#283618",color:"#fff"}}
            >
              {cat}
            </button>
          );
        })}
        <hr></hr>

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
