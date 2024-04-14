import React, { useState } from 'react';
import './style.css'

const Tabs = ({ items}) => {
    const [Tab, setTab] = useState(0);
  
    const clickHandler = (idx) => {
      setTab(idx);
    };
  
    return (
      <div className="tabs">
        <ul className="nav">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`nav-item ${idx === Tab ? 'active' : ''}`}
              onClick={() => clickHandler(idx)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="content">
          {items.map((item, idx) => (
            <div key={idx} className={`content-item ${idx === Tab ? 'active' : 'hidden'}`}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    );
};

export default Tabs;
  