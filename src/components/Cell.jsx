import React, { Component } from 'react';
import '../styles/Cell.css'

class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorIndex: 1,
      color: 'black'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.changeColor(this.state.colorIndex)
    this.setState({ color: this.props.colors[this.state.colorIndex] })
  }

  changeColor(colorIndex) {
    if (colorIndex === 6) {
      this.setState({ colorIndex: 0 })
    }
    else {
      this.setState({ colorIndex: this.state.colorIndex + 1 })
    }
  }

  render() {
    const { color } = this.state;

    return (
      <div className='cell' style={{ backgroundColor: color }} onClick={this.handleClick}>
        <span className='cell-text' title={color}>{color}</span>
      </div>
    );
  }
}

export default Cell;