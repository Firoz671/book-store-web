import img1 from "../assets/Background.png";
function Hero() {
  return (
    <>
      <div className="bg-[#ece6e6]">
        <div className="flex flex-col md:flex-row  w-11/12 lg:w-10/12 mx-auto items-center justify-between gap-12 md:gap-8 py-16">
          {/* Left Section: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white">
              Buy and sell <br className="hidden sm:block" /> your books{" "}
              <span className="text-[#6366F1]">
                for the <br className="hidden sm:block" /> best prices
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Find and read more you'll love, and keep track of the books you
              want to read. Be part of the world's largest community of book
              lovers on Goodreads.
            </p>

            {/* Search Input Area */}
            <div className="w-full max-w-md mx-auto md:mx-0 mt-2">
              {/* Assuming you are using DaisyUI's 'input' and 'input-bordered' classes here based on your previous code */}
              <label className="input input-bordered flex items-center gap-3 w-full rounded-full shadow-sm focus-within:shadow-md transition-shadow py-2 pr-2 pl-4">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  required
                  placeholder="Search books..."
                  className="grow outline-none bg-transparent"
                />
                <button className="bg-[#6366F1] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-600 transition-colors">
                  Search
                </button>
              </label>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src={img1}
              alt="Books illustration"
              className="w-full max-w-70 rounded-2xl sm:max-w-sm lg:max-w-md object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
