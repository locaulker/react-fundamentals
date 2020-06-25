import React, { Component } from "react"
import "./App.css"
// import Greet from "./components/Greet"
import Message from "./components/Message"
// import Welcome from "./components/Welcome"
// import Hello from "./components/Hello"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        {/* <Greet name="Bruce" /> */}
        {/* <Greet name="Clark" /> */}
        {/* <Greet name="Diana" /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}
      </div>
    )
  }
}

export default App
