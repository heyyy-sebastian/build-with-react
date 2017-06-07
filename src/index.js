import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Note: this is just a file where I'm saving my answers, no all of these components
//will render correctly (or at all) if compiled together without commenting out
//the other components for each exersize

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

// Exercise 3 - Events: Make the button do stuff on click!

var ChildComponent = React.createClass({
  render: function() {
    return (
      <div>
        <div className="prompt">Add a click handler to this button so that when clicked, performMagic is called in the parent component.</div>
        <button onClick={this.props.onDoMagic}>Do Magic</button>
      </div>
    );
  }
});

var ParentComponent = React.createClass({
  performMagic: function() {
    alert('TAADAH!');
  },

  render: function() {
    return (
      <div>
        <ChildComponent onDoMagic={this.performMagic} />
      </div>
    );
  }
});

ReactDOM.render(
  <ParentComponent />,
  document.getElementById('container')
);