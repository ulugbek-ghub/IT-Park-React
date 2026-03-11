import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((r) => r.json())
      .then(setProduct)
  }, []);

  if(product){
    product.length = 10
  }

  if (!product) return null;

  return (
    <div className="page">
      <div className="card">
        <img src={product.image} alt={product.title} />
        <div className="row">
          <span className="name">{product.title}</span>
          <span className="price">${product.price}</span>
        </div>
        <p className="desc">{product.description}</p>
      </div>
    </div>
  )
}