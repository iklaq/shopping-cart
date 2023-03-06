import cartIcon from "../assets/cartIcon.png";
import "../styles/Navbar.css";
const NavBar = ({ setShowScreen }) => {
  return (
    <div className="navbar">
      <h1 onClick={() => setShowScreen(true)}>Shopping Cart</h1>
      <img
        src={cartIcon}
        onClick={() => setShowScreen(false)}
        className="cart-icon"
        alt="cart"
      />
    </div>
  );
};

export default NavBar;
