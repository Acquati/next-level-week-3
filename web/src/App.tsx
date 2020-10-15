import React from 'react'

interface TitleProps {
  text: string
}

const Title = (props: TitleProps) => <h1>{props.text}</h1>

const App = () =>
  <div className="App">
    <Title text="Hello World 1" />
  </div>

export default App