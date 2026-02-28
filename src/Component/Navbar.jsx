function Navbar() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center bg-[#ece6e6]  p-5 ">
        <div className="text-black font-bold text-2xl border-r-4">
          <span className="p-3">VibeBooks</span>
        </div>
        <div>
          <ul className="flex md:flex-row flex-col gap-3 font-bold">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
        <div className="flex md:flex-row flex-col gap-3 items-center">
          <button className="btn bg-amber-300">Sign Up</button>
          <button className="btn bg-amber-300">Log In</button>
          <h1>Cart</h1>
        </div>
      </div>
    </>
  );
}
export default Navbar;
