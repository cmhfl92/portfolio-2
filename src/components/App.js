import React, { Component } from 'react'
import Header from './Header.js'
import Nav from './Nav.js'
// import Portfolio from './Portfolio.js'

class App extends Component {

  render () {
    return (
      <div>
        <Nav />
        <Header />
        {/* <Portfolio /> */}
      </div>
    )
  }
}

export default App
