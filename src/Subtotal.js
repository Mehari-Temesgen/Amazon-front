import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const navigate = useNavigate();
  const [{ bascket }, dispatch] = useStateValue();
  const getBascktTotal = (bascket) =>
    bascket?.reduce((amount, item) => item.price + amount, 0);
  //0 means intial value of amount always zero.
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({bascket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBascktTotal(bascket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
