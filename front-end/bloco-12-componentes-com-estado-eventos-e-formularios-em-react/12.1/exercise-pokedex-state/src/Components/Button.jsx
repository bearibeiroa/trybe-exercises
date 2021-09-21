import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>Próximo</button>
      </div>
    )
  }
}

export default Button;
