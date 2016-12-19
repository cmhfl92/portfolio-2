import React, { Component } from 'react'
import Header from './Header.js'
import Nav from './Nav.js'
// import Portfolio from './Portfolio.js'

class App extends Component {

  construtor () {
    super()
    this.state = {
      name: '',
      items: []
    }
  }

  componentDidMount () {
    const url = 'https://api.github.com/users/cmhfl92'
    window.fetch.(url).then((response) => {
      return response.json()
    }).then((data => {
      this.setState({
        items: data
      })
    })
  }

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
