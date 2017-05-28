import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Note: this is just a file where I'm saving my answers, no all of these components
//will render correctly (or at all) if compiled together without commenting out
//the components for each excersize

//Exercise 1 - JSX
var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';

ReactDOM.render(
  <div>
    <div>
    <div href="#" className="button">Button</div>
    <div>{ipsumText}</div>
  </div>,
  </div>,
  document.getElementById('impl'),
  <vacancySign />,
   document.body
);

// Exercise 2 - Props: Create a component for a vacancy sign
var VacancySign = React.createClass({
  render: function() {
    return <div>{this.props.hasvacancy ? '' : 'No '}Vacancy</div>;
  }
});

ReactDOM.render(
  <VacancySign hasvacancy={false} />,
  document.getElementById('container')
);

