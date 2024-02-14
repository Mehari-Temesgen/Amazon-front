import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./Stateprovider";
import { useEffect } from "react";
import { auth } from "./Firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51ONthsGMHOr9DSrhya54QaKkjh7wLWXT69yf8U0MsfBjPzDVtZTxyVO1EkJtnHpdeK6KAyb8y8yAqbr4DAkzBOkR00uOflkd6r"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
