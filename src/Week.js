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
    const newResource = Object.assign({}, this.state); // create object and assign updated state for each time a link is added
    this.props.addLink(newResource, this.props.key) //assigns the newResource package to

  }

  render() {
    const weekMap = this.props.weeks[i].links.map((linkItem, i) => {
      return <li key={i}> <a href={linkItem.url}> {linkItem.description}</a></li>
    })

    return(
      <div>
        <h2>{this.props.title}</h2>
        <ul>{weekMap}</ul>
        <form onSubmit={this.handleSubmit}>
          <input name={'description'} value={this.state.description} onChange={this.handleChange} />
          <input name={'url'} value={this.state.url} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
