/* eslint-disable no-useless-constructor */
import React, { Component } from "react"

class Counter extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
    }
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback Value", this.state.count)
      }
    )
    console.log(this.state.count)
  }

  render() {
    return (
      <>
        <div>Count: {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </>
    )
  }
}

export default Counter
