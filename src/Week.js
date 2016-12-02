import React from 'react';

export default class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      url: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value}); //accepts form input and sets it to state
  }

  handleSubmit(event) {
    event.preventDefault();
    const newResource = Object.assign({}, this.state); // create object and assign updated state to it each time a link is entered in form
    this.props.addLink(newResource, this.props.id) //assigns the newResource package to a week represented by key index

  }

  render() {
    const weekMap = this.props.week.map((linkItem, i) => {
      return linkItem.url && linkItem.description && // condition statements only run if there is already a link and description
      <li key={i}> <a href={linkItem.url}> {linkItem.description}</a></li>
    });

    return(
      <div>
        <h2>{this.props.title}</h2>
        {
          weekMap.length > 0 && // if weekMap has length greater than 0 then render weekMap
          <ul>{weekMap}</ul>
        }
        <form onSubmit={this.handleSubmit}>
          <input name={'description'} value={this.state.description} onChange={this.handleChange} />
          <input name={'url'} value={this.state.url} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
