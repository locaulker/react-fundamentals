import React, { Component } from "react"
import "./App.css"
// import Greet from "./components/Greet"
// import Message from "./components/Message"
// import Counter from "./components/Counter"
// import Welcome from "./components/Welcome"
// import FunctionClick from "./components/FunctionClick"
// import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
// import Hello from "./components/Hello"

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind />
        {/* <ClassClick /> */}
        {/* <hr /> */}
        {/* <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman">
          This is Children Props
        </Greet> */}
        {/* <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Diana" heroName="Wonder Woman" /> */}
        {/* <Welcome name="Bruce" heroName="Batman" /> */}
        {/* <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" /> */}
        {/* <Hello /> */}
      </div>
    )
  }
}

export default App
