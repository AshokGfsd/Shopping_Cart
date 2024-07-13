import React from "react";
import { useState } from "react";
import "./Product.css";

const Product = ({onChange,name,price,img}) => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(true);
  const AddCart =()=>{
    setStatus(!status)
    setCount(count+1)
    onChange(count+1)
  }
  const RemoveCart =()=>{
    setStatus(!status)
    setCount(count-1)
    onChange(count-1)
  }

  return (
    <>
      <div className="col mb-5 shadow">
        <div className="card h-100">
          <img className="card-img-top" src={img} alt="..."></img>
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{name}</h5>₹{price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {status ? (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={AddCart}
                >Add cart</button>
              ) : (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={RemoveCart}
                >Remove cart</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
