import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick} className="button-next">PRÓXIMO</button>
      </div>
    )
  }
}

export default Button;
