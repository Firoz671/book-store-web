import { useState } from "react";
function Navbar({ cart, toggle, setToggle }) {
  const [click, setClick] = useState("Home");
  const handleClick = (itemName, e) => {
    e.preventDefault();
    setClick(itemName);
  };
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center bg-[#ece6e6]  p-5 ">
        <div className="text-black font-bold text-2xl border-r-4">
          <span className="p-3">VibeBooks</span>
        </div>
        <div>
          <ul className="flex md:flex-row flex-col gap-3 font-bold">
            <li
              onClick={(e) => handleClick("Home", e)}
              className={`${click === "Home" ? "underline" : ""}`}
            >
              <a href="">Home</a>
            </li>
            <li
              onClick={(e) => handleClick("Products", e)}
              className={`${click === "Products" ? "underline" : ""}`}
            >
              <a href="">Products</a>
            </li>
            <li
              onClick={(e) => handleClick("Contact", e)}
              className={`${click === "Contact" ? "underline" : ""}`}
            >
              <a href="">Contact</a>
            </li>
            <li
              onClick={(e) => handleClick("About", e)}
              className={`${click === "About" ? "underline" : ""}`}
            >
              <a href="">About</a>
            </li>
          </ul>
        </div>
        <div className="flex md:flex-row flex-col gap-3 items-center">
          <button className="btn bg-amber-300">Sign Up</button>
          <button className="btn bg-amber-300">Log In</button>
          <button onClick={() => setToggle(false)} className="btn">
            Cart {cart.length}
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
