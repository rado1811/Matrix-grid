import React, { Component } from 'react';
import Cell from './Cell';

class Column extends Component {
  state = {
    nums: [
      {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''},
      {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''},
      {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''},
      {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''}, {nb: ''},
    ],
    itemsRendered: 0,
  }

  // componentWillMount() {
  //   let randomInt = Math.floor(Math.random() * 10);
  //   this.setState({ nb: randomInt})
  // }

  componentDidMount() {
    let randomInt = Math.floor(Math.random() * 10);
    this.interval = setInterval(() => this.setState({nb: randomInt}), 250)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
    <div>
      {
        this.state.nums.map((number, index) =>
          <Cell />
        )
      }
    </div>
    )
  }
}

export default Column;
