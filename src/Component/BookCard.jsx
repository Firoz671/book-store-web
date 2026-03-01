import { use } from "react";
import ShowBookCard from "./ShowBookCard";

function BookCard({ dataPromise, cart, setCart, selectCategory }) {
  const bookData = use(dataPromise);
  const filteredBooks =
    selectCategory === "All"
      ? bookData
      : bookData.filter((book) => book.category === selectCategory);
  return (
    <>
      <div className="grid grid-cols-3">
        {filteredBooks.map((data) => (
          <ShowBookCard
            key={data.bookId}
            cart={cart}
            setCart={setCart}
            data={data}
          ></ShowBookCard>
        ))}
      </div>
    </>
  );
}
export default BookCard;
