import React from "react";
import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
import numeral from "numeral";
import { useStateValue } from "./Stateprovider";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const navigate = useNavigate();
  const [{ bascket }, dispatch] = useStateValue();
  const getBascktTotal = (bascket) =>
    bascket?.reduce((amount, item) => item.price + amount, 0);
  const number = getBascktTotal(bascket);
  const formattedNumber = numeral(number).format("$0,0.00");
  //0 means intial value of amount always zero.
  return (
    <div className="subtotal">
      <div>
        <p>
          Subtotal ({bascket.length} items): <strong>{formattedNumber}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </div>

      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
