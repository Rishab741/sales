import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <h2>Product Manager</h2>
      <div className="user-profile">
        <FaUserCircle size={32} />
      </div>
    </header>
  );
};

export default Header;
