import React from "react";
import classNames from "classnames";

const ProductCard = ({ status }) => {
  return (
    <div className={classNames("product-card", status)}>
      <p>Status: {status}</p>
      <p>Tasks: 2/4</p>
      <p>Cards: 34</p>
    </div>
  );
};

export default ProductCard;
