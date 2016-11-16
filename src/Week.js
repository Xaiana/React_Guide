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
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newResource = Object.assign({}, this.state);
    console.log(newResource);

  }

  render() {
    const weekMap = this.props.week.map((weekItem, i) => {
      return <li key={i}> <a href={weekItem.url}> {weekItem.description}</a></li>
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
