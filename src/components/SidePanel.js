import React, { useState } from 'react';
import './SidePanel.css'; // Import the CSS file for styling
import speed from 'C:/Users/RISHAB CHOUHAN/React apps/sales/src/img 1.png';
import link from 'C:/Users/RISHAB CHOUHAN/React apps/sales/src/components/img 2.png';
import links from 'C:/Users/RISHAB CHOUHAN/React apps/sales/src/img 3.png';
import apps from 'C:/Users/RISHAB CHOUHAN/React apps/sales/src/img 4.png';
import documents from 'C:/Users/RISHAB CHOUHAN/React apps/sales/src/img 5.png';
import settings from 'C:/Users/RISHAB CHOUHAN/React apps/sales/src/img 6.png';
import questions from 'C:/Users/RISHAB CHOUHAN/React apps/sales/src/img 7.png';
import next from 'C:/Users/RISHAB CHOUHAN/React apps/sales/src/img 8.png';
import cube from 'C:/Users/RISHAB CHOUHAN/React apps/sales/src/img.png'
function SidePanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOptionClick = (option) => {
    // Handle the click event for each option
    console.log(`Option clicked: ${option}`);
    // Perform necessary actions, such as navigation or triggering other events
  };

  return (
    <div className={`side-panel ${isExpanded ? 'expanded' : ''}`}>
      <div className="side-panel-header">
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {/* Toggle button icon */}
        </button>
      </div>
      <ul>
        <li onClick={() => handleOptionClick('Option 1')}>
          <div className="icon">
            <img
              src={speed}
              alt="Speed"
              width="30"
              height="30"
            />
          </div>
          <span></span>
        </li>
        {/* New option between Option 1 and Option 2 */}
        <li onClick={() => handleOptionClick('New Option')}>
          <div className="icon">
            <img
              src={cube} // You can use any image here
              alt="cube"
              width="30"
              height="30"
            />
          </div>
          <span></span>
        </li>
        <li onClick={() => handleOptionClick('Option 2')}>
          <div className="icon">
            <img
              src={link}
              alt="Link"
              width="30"
              height="30"
            />
          </div>
          <span></span>
        </li>
        <li onClick={() => handleOptionClick('Option 3')}>
          <div className="icon">
            <img
              src={links}
              alt="Links"
              width="30"
              height="30"
            />
          </div>
          <span></span>
        </li>
        <li onClick={() => handleOptionClick('Option 4')}>
          <div className="icon">
            <img
              src={apps}
              alt="Apps"
              width="30"
              height="30"
            />
          </div>
          <span></span>
        </li>
        <li onClick={() => handleOptionClick('Option 5')}>
          <div className="icon">
            <img
              src={documents}
              alt="Documents"
              width="30"
              height="30"
            />
          </div>
          <span></span>
        </li>
        <li onClick={() => handleOptionClick('Option 6')}>
          <div className="icon">
            <img
              src={settings}
              alt="Settings"
              width="30"
              height="30"
            />
          </div>
          <span></span>
        </li>
        {/* Add spacing between Option 6 and Option 7 */}
        <li style={{ marginTop: '160px' }} onClick={() => handleOptionClick('Option 7')}>
          <div className="icon">
            <img
              src={questions}
              alt="Questions"
              width="30"
              height="30"
            />
          </div>
          <span></span>
        </li>

        {/* Add horizontal line after Option 7 */}
        <hr style={{ margin: '20px 0', border: '1px solid #ccc' }} />

        <li onClick={() => handleOptionClick('Option 8')}>
          <div className="icon">
            <img
              src={next}
              alt="Next"
              width="30"
              height="30"
            />
          </div>
          <span></span>
        </li>
      </ul>
    </div>
  );
}

export default SidePanel;
