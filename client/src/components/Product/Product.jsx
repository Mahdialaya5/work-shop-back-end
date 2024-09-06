import React from "react";
import style from "./Product.module.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct, GetOneProduct } from "../../redux/actions/ActionProduct";
import { useDispatch } from "react-redux";

function Product({el}) {
  

  return (
    <div className={style.card}>
      <img src={el.img}  className={style.img}  />
      <div className={style.content}   >
        <h3>name:{el.name}</h3>
        <p>description:{el.description}</p>
        <p>price:{el.price}</p>
        <p>category:{el.category}</p>
        <p>date:{el.date.slice(0,10)}</p>

      </div>
    </div>
  );
}

export default Product;
