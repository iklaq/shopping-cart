import "../styles/Cart.css";

const Cart = ({ cartArray, totalPrice, handleIncDec, removeCart }) => {
  const cards =
    cartArray.length === 0 ? (
      <h1 className="empty">Cart is Empty</h1>
    ) : (
      cartArray.map((items) => (
        <div className="cart-items" key={items.id}>
          <img src={items.logoURL} alt="cart" />
          <h1>{items.heading}</h1>
          <p>Price: {`₹${items.prices}`}</p>
          <hr />
          <button className="plus-btn" onClick={() => handleIncDec(1, items)}>
            +
          </button>
          <button className="minus-btn" onClick={() => handleIncDec(-1, items)}>
            -
          </button>
          <p className="quantity">{items.quantity}</p>
          <button className="remove-btn" onClick={() => removeCart(items)}>
            Remove
          </button>
        </div>
      ))
    );

  return (
    <div className="cart">
      {cards}
      <div className="total-price">
        <p>Total Price: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
