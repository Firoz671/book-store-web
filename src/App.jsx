import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import BookCard from "./Component/BookCard";
import { Suspense, useState } from "react";
import ShowCart from "./ShowCart";
import Footer from "./Footer";

const fetchData = async () => {
  const res = await fetch("data.json");
  return res.json();
};
const dataPromise = fetchData();
function App() {
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [selectCategory, setSelectCategory] = useState("All");
  const categories = ["All", "Classic", "Fiction", "Mystery"];
  return (
    <>
      <Navbar
        cart={cart}
        setCart={setCart}
        toggle={toggle}
        setToggle={setToggle}
      ></Navbar>
      <Hero></Hero>
      <div>
        <h1 className="text-center mt-5 text-2xl font-bold">Featured Books</h1>
      </div>
      <div className="w-11/12 mx-auto">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectCategory(category)}
            className={`btn ${selectCategory === category ? "bg-amber-200" : "bg-red-300"}`}
          >
            {category}
          </button>
        ))}
      </div>
      {toggle ? (
        <Suspense fallback={<p>loading</p>}>
          <BookCard
            cart={cart}
            setCart={setCart}
            dataPromise={dataPromise}
            selectCategory={selectCategory}
          ></BookCard>
        </Suspense>
      ) : (
        <ShowCart cart={cart}></ShowCart>
      )}
      <Footer></Footer>
    </>
  );
}
export default App;
