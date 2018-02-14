import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import logo from './logo.svg';
import './App.css'

import Button from "material-ui/Button"
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import mainStore from './MainStore'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import Home from './Home'

const homeScreen = ({ location }) => <Home mainStore={mainStore} />

// center all child
const demoScreen1 = () =>
  <div
    style={{
      display: 'flex',
      flex: 1,
      height: '100%',

      flexDirection: 'column',
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {/* <RaisedButton label="demoScreen1" primary /> */}
    <Button variant="raised">demoScreen1</Button>
    <Button variant="raised">demoScreen2</Button>
    {/* <RaisedButton label="demoScreen1" primary /> */}
  </div>

const msgComp = () =>
  <div
    style={{
      padding: 15,
      zIndex: 2,
      position: 'absolute',
      left: 0,
      top: 0
    }}
  >
    <h3>Here we center all child elements vertically and horizontally</h3>
  </div>

function withSubscription(WrappedComponent, MsgComponent) {
  return class extends React.Component {
    render() {
      return (
        <div
          style={{
            height: '100%',
            position: 'relative',
            backgroundColor: 'red'
          }}
        >
          <MsgComponent />
          <WrappedComponent />
        </div>
      )
    }
  }
}

const demo1tWithSubscription = withSubscription(demoScreen1, msgComp)

// equal spacing between elements
const demoScreen2 = () =>
  <div
    style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'gray',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      position: 'relative'
    }}
  >
    <div
      style={{
        zIndex: 2,
        opacity: 0.5,
        backgroundColor: 'red',
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0
      }}
    >
      <h3 style={{ margin: 5, backgroundColor: 'blue', textAlign: 'center' }}>
        Equal space around child elements.
      </h3>
    </div>
    <Button variant="raised">demoScreen2</Button>
    <Button variant="raised">demoScreen2</Button>
    {/* <RaisedButton label="demoScreen2" primary />

    <RaisedButton label="demoScreen2" primary /> */}
  </div>

// this makes elements apart
const demoScreen2a = () =>
  <div
    style={{
      display: 'flex',
      flex: 0.75,
      padding: 15,
      flexDirection: 'row',
      backgroundColor: 'gray',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }}
  >
  <Button variant="raised">demoScreen2a</Button>
    <Button variant="raised">demoScreen2a</Button>
    {/* <RaisedButton label="demoScreen2a" primary />

    <RaisedButton label="demoScreen2a" primary /> */}
  </div>

// vertical elements to the left, spaced apart
const demoScreen2b = () =>
  <div
    style={{
      display: 'flex',
      flex: 0.75,
      padding: 15,
      flexDirection: 'column',
      backgroundColor: 'gray',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }}
  >
  <Button variant="raised">demoScreen2b</Button>
    <Button variant="raised">demoScreen2b</Button>
    <Button variant="raised">demoScreen2b</Button>
    {/* <RaisedButton label="demoScreen2b" primary />

    <RaisedButton label="demoScreen2b" primary />
    <RaisedButton label="demoScreen2b" primary /> */}
  </div>

// the same as above, but now they start from the bottom
const demoScreen3 = () =>
  <div
    style={{
      display: 'flex',
      flex: 0.75,
      padding: 15,
      flexDirection: 'row',
      backgroundColor: 'gray',
      justifyContent: 'space-around',
      alignItems: 'flex-end'
    }}
  >
  <Button variant="raised">demoScreen3</Button>
    <Button variant="raised">demoScreen3</Button>
    
    {/* <RaisedButton label="demoScreen3" primary />

    <RaisedButton label="demoScreen3" primary /> */}
  </div>

// the same as above, but now they are at the middle
const demoScreen3a = () =>
  <div
    style={{
      display: 'flex',
      flex: 0.75,
      padding: 15,
      flexDirection: 'row',
      backgroundColor: 'gray',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}
  >
  <Button variant="raised">demoScreen3a</Button>
    <Button variant="raised">demoScreen3a</Button>
    

  </div>

// here we align all items to the right, from top to bottom
const demoScreen4 = () =>
  <div
    style={{
      display: 'flex',
      flex: 0.75,
      padding: 15,
      flexDirection: 'column',
      backgroundColor: 'gray',
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
    }}
  >
  <Button variant="raised">demoScreen4</Button>
    <Button variant="raised">demoScreen4</Button>
   

    
  </div>

const demoScreen5 = () =>
  <div
    style={{
      display: 'flex',
      flex: 0.75,
      padding: 15,
      flexDirection: 'row',
      backgroundColor: 'gray',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    }}
  >
  <Button variant="raised">demoScreen5</Button>
    <Button variant="raised">demoScreen5</Button>
    
    
  </div>

const styles = {
  menu: {
    marginLeft: '60px',
    marginRight: 'auto'
  }
}
const demoScreen6 = () =>
  <header style={{ background: '#333' }}>
    <nav
      style={{
        display: 'flex',

        alignItems: 'center',
        width: '70%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <h1 class="logo">LOGO</h1>

      <ul style={styles.menu}>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <ul class="social">
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
      </ul>
    </nav>
  </header>

const About = () =>
  <div
    style={{
      padding: 20,
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      overflow: 'auto',
      backgroundColor: 'lightgray'
    }}
  >
    <h2>About the color scheme used</h2>
    <p>green is our div root container</p>
    <p>blue is the parent of all react components</p>
    <p>This parent has two child components</p>
    <p>the app bar, which is always visible</p>
    <p>and the gray component which changes based on navigation</p>
  </div>

@observer
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.handler = this.handler.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  componentDidMount() {
    console.log('mount')
  }

  handler() {
    this.setState({ open: !this.state.open })
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div
            style={{
              display: 'flex',
              flex: 1,
              padding: 20,
              flexDirection: 'column',
              backgroundColor: 'blue'
            }}
          >
          <Button onClick={this.handler}>Home</Button>
            {/* <AppBar
              title="Flexbox Playground"
              onLeftIconButtonTouchTap={this.handler}
              onTitleTouchTap={this.handler}
              showMenuIconButton
            /> */}
            <Drawer
              docked={false}
              // onRequestChange={open => this.setState({ open })}
              width={200}
              open={this.state.open}
            >
              <div style={{ paddingTop: 20 }}>
                <ul>
                  <li>
                    <Link onClick={this.handleClose} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/demo1">
                      Demo1
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/demo2">
                      Demo2
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/demo2a">
                      Demo2a
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/demo2b">
                      Demo2b
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/demo3">
                      Demo3
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/demo3a">
                      Demo3a
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/demo4">
                      Demo4
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/demo5">
                      Demo5
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/demo6">
                      Demo6
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </Drawer>

            <Route exact path="/" component={homeScreen} />
            <Route exact path="/demo1" component={demo1tWithSubscription} />
            <Route exact path="/demo2" component={demoScreen2} />
            <Route exact path="/demo2a" component={demoScreen2a} />
            <Route exact path="/demo2b" component={demoScreen2b} />
            <Route exact path="/demo3" component={demoScreen3} />
            <Route exact path="/demo3a" component={demoScreen3a} />
            <Route exact path="/demo4" component={demoScreen4} />
            <Route exact path="/demo5" component={demoScreen5} />
            <Route exact path="/demo6" component={demoScreen6} />
            <Route path="/about" component={About} />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App
