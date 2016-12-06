import Week from './Week.js';
import Header from './Header.js';

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionValue: '',
      urlValue: '',
      weeks: []
    };
      this.addLink = this.addLink.bind(this);
      this.addNewWeek = this.addNewWeek.bind(this);
      this.renderWeeks = this.renderWeeks.bind(this);
  }

  addNewWeek() {
    const database = firebase.database();
    const newWeek = { links: [
      {description: "", url: ""}
    ]};

    const newWeekKey = database().ref().child('weeks').push().key;

    const ubdates = {};
    updates['/weeks/' + newWeekKey] = newWeek;

    return database().ref().update(updates);
  }

  /*addWeek(e) {
    e.preventDefault();
    const weeks = this.state.weeks.slice(0); // point in weeks array
    weeks.push(this.weekTemplate); //add empty week object
    this.setState({weeks});
  }*/

  addLink(resource, destination) { //resource is the package containing the new link object pair, destination is the week id to add to.
    const _destination = this.state.weeks[destination].links; //[destination] is in brackets because it's value is a string
    _destination.push(resource); // add the resource to links object's array
    this.setState({destination: _destination}); // update state to show added link; destination is the week represented by links to add too _destination is location that accepted resource package
  }

  renderWeeks() {
    return this.state.weeks.map((week, i) => {
      return <Week
              key={i+week}
              id={i}
              title={'Week ' + (i + 1)}
              week={this.state.weeks[i].links}
              addLink={this.addLink}
            />;
    });
  }

  render() {
    return (
      <div>
        <Header header={"React Journal"} />
        <button onClick={this.addNewWeek}> {/*addWeek is callback function*/}
          AddWeek
        </button>
        <div>
          {this.renderWeeks()}
        </div>
      </div>
    );
  }
}



export default App;
