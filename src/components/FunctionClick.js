// ==================== ES 5
// import React from "react"

// function FunctionClick() {
//   function clickHandler() {
//     console.log("Button Clicked")
//   }
//   return (
//     <div>
//       <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }

// export default FunctionClick

// ==================== ES 6
import React from "react"

const clickHandler = () => {
  console.log("Button Clicked")
}

const FunctionClick = () => {
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
