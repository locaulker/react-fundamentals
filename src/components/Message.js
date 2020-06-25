/* eslint-disable no-useless-constructor */
import React, { Component } from "react"

class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: "welcome visitor"
    }
  }
  // state = {
  //   message: "Welcome Mr. McGoo"
  // }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing"
    })
  }

  render() {
    // return <h1>{this.state.message}</h1>
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeMessage()
          }}
        >
          Subscribe
        </button>
      </div>
    )
  }
}

export default Message
