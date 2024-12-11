import React from "react";
import ProductCard from "./ProductCard";

const MilestoneGroup = () => {
  return (
    <div className="milestone-group">
      <h3>Sampling</h3>
      <div className="cards">
        <ProductCard status="overdue" />
        <ProductCard status="pending" />
        <ProductCard status="done" />
      </div>
    </div>
  );
};

export default MilestoneGroup;
