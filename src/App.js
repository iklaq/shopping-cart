import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/Navbar";

const App = () => {
  const [showScreen, setShowScreen] = useState(true);
  const [cartArray, setCartArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (items) => {
    const isPresent = isItemExits(items);

    if (!isPresent) {
      setCartArray([...cartArray, items]);
    }
  };

  const isItemExits = (items) => {
    const isPresent = cartArray.find((item) => item.id === items.id);

    if (isPresent) {
      alert("Item is already added to cart");
    } else {
      alert("Added to cart");
    }

    return isPresent;
  };

  const handleIncDec = (operator, items) => {
    if (items.quantity > 1 || operator !== -1) {
      const updatedCart = [...cartArray];
      const clickedCartIndex = updatedCart.findIndex(
        (cart) => cart.id === items.id
      );

      updatedCart[clickedCartIndex].quantity += operator;
      setCartArray(updatedCart);
    }
  };

  const removeCart = (items) => {
    let updatedCart = [...cartArray];
    const clickedCartIndex = updatedCart.findIndex(
      (element) => element.id === items.id
    );
    updatedCart[clickedCartIndex].quantity = 1;

    updatedCart = cartArray.filter((element) => element.id !== items.id);
    setCartArray(updatedCart);
  };

  const updateTotatPrice = () => {
    let sum = 0;

    cartArray.map((element) => (sum += element.prices * element.quantity));

    setTotalPrice(sum);
  };

  useEffect(() => {
    updateTotatPrice();
  });

  return (
    <>
      <NavBar setShowScreen={setShowScreen} />
      {showScreen ? (
        <Home addItemToCart={addItemToCart} />
      ) : (
        <Cart
          cartArray={cartArray}
          totalPrice={totalPrice}
          handleIncDec={handleIncDec}
          removeCart={removeCart}
        />
      )}
    </>
  );
};

export default App;
