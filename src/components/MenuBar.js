import React from 'react';
import './MenuBar.css'; // Import CSS for styling

function MenuBar() {
  const handleMenuClick = (menuItem) => {
    // Handle the click event for each menu item
    console.log(`${menuItem} clicked`);
  };

  return (
    <div className="menu-bar">
      <ul className="menu-list">
        <li className="menu-item" onClick={() => handleMenuClick('Home')}>
          Home
        </li>
        <li className="menu-item" onClick={() => handleMenuClick('About')}>
          About
        </li>
        <li className="menu-item" onClick={() => handleMenuClick('Services')}>
          Services
        </li>
        <li className="menu-item" onClick={() => handleMenuClick('Contact')}>
          Contact
        </li>
        <li className="menu-item" onClick={() => handleMenuClick('FAQ')}>
          FAQ
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
