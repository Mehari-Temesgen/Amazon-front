import React from "react";
import "./Product.css";
import { useStateValue } from "./Stateprovider";
function Product({ id, title, price, rating, image }) {
  const [{ bascket }, dispatch] = useStateValue();
  // console.log(bascket);
  //dispacth is used to send  data layer
  const addToBaskte = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBaskte}>Add to Basket</button>
    </div>
  );
}

export default Product;
