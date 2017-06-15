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

// Exercise 4: State - Set the state so the clicked tile is highlighted
var Board = React.createClass({
  render: function() {
    var className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
});

var BoardSwitcher = React.createClass({
  getInitialState: function() {
    // first board is selected
    return {
      selectedIndex: 0
    }
  },

  onToggleClick: function(evt) {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.numBoards
    })
  },

  render: function() {
    var boards = [];
    for (var ii = 0; ii < this.props.numBoards; ii++) {
      //set state so it's not exclusively the first tile
      var isSelected = ii === this.state.selectedIndex;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        //add onClick event to btn
        <button onClick={this.onToggleClick}>Toggle</button>
      </div>
    );
  }
});

ReactDOM.render(
  <BoardSwitcher numBoards={3} />,
  document.getElementById('container')
);
