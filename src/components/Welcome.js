import React, { Component } from "react"

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props

    return (
      <div>
        <h3>
          Hello {name} aka: {heroName}
        </h3>
      </div>
    )
  }
}

export default Welcome
