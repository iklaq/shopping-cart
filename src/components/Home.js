import CartData from "./Data";
import "../styles/Home.css";

const Home = ({ addItemToCart }) => {
  const cards = CartData.map((items) => (
    <div className="watch-card" key={items.id}>
      <img src={items.logoURL} alt="" />
      <h1>{items.heading}</h1>
      <p>Price: {`₹${items.prices}`}</p>

      <button onClick={() => addItemToCart(items)}>Add To Cart</button>
    </div>
  ));

  return <div className="cards">{cards}</div>;
};

export default Home;
