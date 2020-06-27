/* eslint-disable react/require-render-return */
import React, { Component } from "react"

class UserGreetings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true,
    }
  }

  render() {
    // (4) ================= Short Circuit Operator
    //  Is a Special Case of the Ternary Operator
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>

    // (3) ================= Ternary Operation
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vishwas</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // )

    // (2) =============== Element Variable
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vishwas</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // (1) =============== if/else statement
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vishwas</div>
    // } else {
    //   return <div>Welcome Guest</div>
    // }

    // return (
    //   <>
    //     <div> Welcome Vishwas </div>
    //     <div> Welcome Guest </div>
    //   </>
    // )
  }
}

export default UserGreetings
