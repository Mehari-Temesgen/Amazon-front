import React from "react";
import "./Order.css";
import moment from "moment";
import Checkoutproduct from "./Checkoutproduct";
// import CurrencyFormat from "react-currency-format";
import numeral from "numeral";
function Order({ order }) {
  const value = numeral(order.data.amount / 100).format("0,0.00");
  let id =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.bascket?.map((item) => (
        <Checkoutproduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <h3 className="order__total">Order Total: {value}</h3>
    </div>
  );
}

export default Order;
