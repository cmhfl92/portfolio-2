import React, { Component } from 'react'

class Header extends Component {

  render () {
    return <div>
      <h1>Welcome</h1>
      <h2>Christa Hegedus {this.props.name}</h2>
    </div>
  }
}
export default Header
