import React from "react"

const Greet = props => {
  const { name, heroName, children } = props
  return (
    <>
      <h3>
        Hello {name}: aka {heroName}
      </h3>
      {children}
    </>
  )
}

export default Greet
