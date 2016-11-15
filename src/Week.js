import React from 'react';

export default class Week extends React.Component {

  render() {
    const weekMap = this.props.week.map((weekItem, i) => {
      return <li key={i}> <a href={weekItem.url}> {weekItem.description}</a></li>
    })

    return(
      <div>
        <h2>{this.props.title}</h2>
        <ul>{weekMap}</ul>
      </div>
    )
  }
}
