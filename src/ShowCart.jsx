import ShowCartData from "./ShowCartData";

function ShowCart({ cart }) {
  return (
    <>
      <div className="grid grid-cols-3">
        {cart.map((data) => (
          <ShowCartData data={data} key={data.bookId}></ShowCartData>
        ))}
      </div>
    </>
  );
}
export default ShowCart;
