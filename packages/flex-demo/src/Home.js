import React from "react"



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
      className="container"
        // style={{
        //   display: "flex",
        //   flex: 1,
        //   padding: 20,
        //   flexDirection: "column",
        //   backgroundColor: "lightgray"
        // }}
      >
        <div className="App-header">
          <h2>Welcome to Flex Demo</h2>
        </div>
        <p className="App-intro">Loaded with Mobx</p>
      </div>
    )
  }
}

export default App
