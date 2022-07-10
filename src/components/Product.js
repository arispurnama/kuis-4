import React from "react";

function Product(props) {
  return (
    <>
      <h4>{props.children}</h4>
      <button
        onClick={() => {
          alert(`Product Ini bernama ${props.children}`);
        }}
      >
        Detail
      </button>
    </>
  );
}

export default Product;
