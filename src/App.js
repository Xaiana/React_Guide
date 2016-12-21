import Week from './Week.js';
import Header from './Header.js';
import firebase from 'firebase';
import React from 'react';
import './App.css';
//import json from './JSON.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.weekTemplate = { links: [{description: '', url: ''}] };
    this.state = {
      descriptionValue: '',
      urlValue: '',
      weeks: this.props.weeks // weeks is root node of firebase database
    };
      this.fbRef = firebase.database().ref();
      this.addLink = this.addLink.bind(this);
      this.addWeek = this.addWeek.bind(this);
      this.renderWeeks = this.renderWeeks.bind(this);
  }

  /*componentDidMount() {
    //this.fbRef.set(json);
  }*/

  /*addNewWeek() {
    const newWeek = { links: [
      {description: "", url: ""}
    ]};

    //const newWeekKey = database().ref().child('weeks').push().key;

    const updates = {};
    updates['/weeks/' + newWeekKey] = newWeek;

    this.fbRef.set(this.state);
  }*/

  addWeek(e) {
    e.preventDefault();
    const weeks = this.state.weeks.slice(0); // makes a copy of state to update before rendering, point in weeks array
    weeks.push(this.weekTemplate); //add empty week object
    this.setState({weeks});
    this.fbRef.set(this.state);
  }

  addLink(resource, destination) { //resource is the package containing the new link object pair, destination is the week id to add to.
    const _destination = this.state.weeks[destination].links; //[destination] is in brackets because it's value is a string
    _destination.push(resource); // add the resource to links object's array
    this.setState({destination: _destination}); // update state to show added link; destination is the week represented by links to add too _destination is location that accepted resource package
    this.fbRef.set(this.state);
  }

  renderWeeks() {
    return this.state.weeks.map((week, i) => {
      return <Week
              key={i+week}
              id={i}
              title={'Week ' + (i + 1)}
              week={week.links}
              addLink={this.addLink}
            />;
    });
  }

  render() {
    return (
      <div>
        <Header header={"React Journal"} />
        <button onClick={this.addWeek}> {/*addWeek is callback function*/}
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
