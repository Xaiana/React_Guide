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
          { links: [{description: 'anything', url: 'www.google.com'}] },
          { links: [{description: 'anything', url: 'www.google.com'}] },
          { links: [{description: 'anything', url: 'www.google.com'}] }
        ]
      }
      this.addLink = this.addLink.bind(this);
      this.addWeek = this.addWeek.bind(this);
      this.renderWeeks = this.renderWeeks.bind(this);
    }

  addWeek(event) {
    const resources = this.state.weeks;
    const newWeekResource = resources.push({}); //add empty week object to this.state.weeks array
    this.renderWeeks(newWeekResource, resources);
  }

  addLink(resource, destination) { //resource is the package containing the new link object pair, destination is the week id to add to.
    const _destination = this.state[destination]; //[destination] is in brackets because it's value is a string
    _destination.push(resource) ;
    this.setState({[destination] : _destination});
  }

  renderWeeks(newWeekResource, destination) {
    return this.state.weeks.map((week, idx) => {
      return <Week
              key={idx}
              links={week.links}
              addLink={this.addLink}
              title={'Week ' + (idx + 1)}
              addLink={this.addLink}
            />;
    });
  }

  render() {
    return (
      <div>
        <Header header={"React Journal"} />
        <Week renderWeeks={this.renderWeeks} />
      </div>
    );
  }
}



export default App;
