import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';

ReactDOM.render(
  <div>
    <div>
    <div href="#" className="button">Button</div>
    <p>{ipsumText}</p>
  </div>,
  </div>,
  document.getElementById('impl')
);
