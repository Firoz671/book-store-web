import { useState } from "react";

function ShowBookCard({ data, cart, setCart }) {
  const [btnActive, setBtnActive] = useState(false);
  const handleBtnClick = () => {
    setCart((prevCart) => [...prevCart, data]);
    setBtnActive(true);
  };
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = data;
  return (
    <>
      <div className="w-full mt-5 max-w-sm mx-auto bg-[#EEF2FF] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
        {/* Image Section */}
        <div className="bg-[#CADDE4] w-full h-64 flex justify-center items-center p-5">
          <img
            className="h-full w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
            src={image}
            alt={bookName}
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col grow gap-4">
          {/* Title & Author */}
          <div>
            <h2
              className="text-xl font-bold text-gray-900 line-clamp-1"
              title={bookName}
            >
              {bookName}
            </h2>
            <p className="text-sm font-medium text-gray-500 mt-1">
              By <span className="text-gray-700">{author}</span>
            </p>
          </div>

          {/* Review Text */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 grow">
            {review}
          </p>

          {/* Action Button */}
          <button
            onClick={handleBtnClick}
            disabled={btnActive}
            className={`w-full mt-2 font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 active:scale-95 ${
              btnActive
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#6366F1] hover:bg-indigo-600 text-white"
            }`}
          >
            {btnActive ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
}
export default ShowBookCard;
