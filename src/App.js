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
      weeks: [
          { links: 'Week 1' },
          { links: 'Week 2' },
          { links: 'Week 3' }
        ]
      }
      this.addLink = this.addLink.bind(this);
      this.addWeek = this.addWeek.bind(this);
      this.renderWeeks = this.renderWeeks.bind(this);
    }

  addWeek(event) {
    const weeks = this.state.weeks.slice(0);
    weeks.push({});
    this.setState({weeks});
  }

  addLink(resource, destination) { //resource is the package containing the new link object pair, destination is the week id to add to.
    const _destination = this.state[destination]; //[destination] is in brackets because it's value is a string
    _destination.push(resource) ;
    this.setState({[destination] : _destination});
  }

  renderWeeks() {
    return this.state.weeks.map((week, idx) => {
      return <Week links={week.links} addLink={this.addLink} title={'Week ' + (idx + 1)} key={idx} index={idx} />;
    });
  }
  render() {
    return (
      <div>
        <Header header={"React Journal"} />
        <week links={"week1"} addLink={this.addLink} title={'Week' + 1} />
        <week links={"week2"} addLink={this.addLink} title={'Week' + 1} />
        <week links={"week3"} addLink={this.addLink} title={'Week' + 1} />
      </div>
    );
  }
}



export default App;
