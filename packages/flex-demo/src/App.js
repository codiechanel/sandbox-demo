import React, { Component } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

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

const demoScreen7 = () =>
<div
  style={{
    display: 'flex',
    flex: 0.75,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'gray',
    // justifyContent: 'space-between',
    alignItems: 'flex-start'
  }}
>
<Button style={{flex: 2}} variant="raised">demoScreen7</Button>
  <Button style={{flex: 1}} variant="raised">demoScreen7</Button>
  <Button style={{flex: 1}} variant="raised">demoScreen7</Button>
  
</div>

const demoScreen8 = () =>
<div
  style={{
    display: 'flex',
    flex: 0.75,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'gray',
    // justifyContent: 'space-between',
    alignItems: 'flex-start'
  }}
>
<Button  variant="raised">demoScreen7</Button>
  <Button style={{marginRight:"auto"}} variant="raised">demoScreen7</Button>
  <Button  variant="raised">demoScreen7</Button>
  
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
    let theme = createTheme(palObj)
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
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
                    <Link onClick={this.handleClose} to="/demo7">
                      Demo7
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.handleClose} to="/demo8">
                      Auto margin 
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
            <Route exact path="/demo7" component={demoScreen7} />
            <Route exact path="/demo8" component={demoScreen8} />
            <Route path="/about" component={About} />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}


let palObj = {
  primaryMain: "#34495e",
  primaryDark: "#2c3e50",
  // primaryMain: "#202C55",
  // primaryDark: "#202C55",
  primaryLight: "#313337", // list item
  secondaryMain: "#4594EA", // accent
  secondaryDark: "#292B2C", // list header
  secondaryLight: "#4594EA",
  textPrimary: "#ffffff",
  textSecondary: "grey"
};


/**
 * @param {object} palette 
 * - should be able to generate color for text based on background....
 */
function createTheme(palette,  type = "light") {
  const result = createMuiTheme({
    palette: {
      type: type,
      // primary: { main: palette.primaryMain }, // Purple and green play nicely together.
      // secondary: { main: palette.secondaryMain } // This is just green.A700 as hex.

      primary: {
        light: palette.primaryLight,
        main: palette.primaryMain,
        dark: palette.primaryDark, 
        // contrastDefaultColor: 'dark', 
        // contrastText: '#fff',
      },
      secondary: {
        light: palette.secondaryLight,
        main: palette.secondaryMain,
        dark: palette.secondaryDark
        // contrastText: '#000',
      }
    },

    overrides: {
      MuiButton: {
        // Name of the styleSheet
        root: {
          // Name of the rule
          background: palette.primaryMain,
          color: palette.textPrimary
        }
      },
      MuiAvatar: {
        // Name of the styleSheet
        colorDefault: {
          // Name of the rule
          backgroundColor: palette.secondaryMain
        }
      },
      MuiPaper: {
        root: {
          // display: "flex",
          // flex: 1,
          // flexWrap:"wrap",
          // flexGrow: "initial",
          backgroundColor: palette.primaryDark
          // padding: 20,
          // height: "100%"

          // color: "white"
        }
      },
      /**
       * we need to set this,  child element who uses inherit 
       * will get this color 
       */
      MuiList: {
        root: {
          backgroundColor: palette.secondaryDark
        }
      },
 /**
       * root will be applied if color is "default"
       * "inherit" will simply get the colors from whatever the 
       * background is
       * lets make the default the same as the list item 
       */
      MuiListSubheader: {
        root: {
          backgroundColor: palette.primaryMain, 
          color: palette.textPrimary
        }, 
        colorPrimary: {
          backgroundColor: palette.primaryMain, 
          color: palette.textPrimary
        }, 
      },
      
      MuiListItem: {
        root: {
          backgroundColor: palette.primaryLight
        }
      },
      MuiListItemText: {
        primary: {
          color: palette.textPrimary
        },
        secondary: {
          color: palette.textSecondary
        }
      },
      MuiIcon: {
        colorPrimary: {
          color: palette.secondaryMain
        }
      },
      MuiBottomNavigation: {
        root: {
          backgroundColor: palette.primaryMain
        }
      },
      MuiBottomNavigationAction: {
        root: {
          color: palette.textSecondary
        },
        selected: {
          color: palette.secondaryMain
        }
      },
      MuiSwitch: {
        icon: {
          color: palette.secondaryMain
        }
      },
      MuiChip: {
        root: {
          // backgroundColor: palette.primaryMain,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          color: palette.textPrimary
        },
        avatar: {
          color: palette.textPrimary
        }
      },
      MuiInput: {
        root: {
          // backgroundColor: palette.third,
          color: palette.textPrimary
        }
      },
      MuiFormLabel: {
        root: {
          // backgroundColor: palette.third,
          color: palette.textSecondary
        }
      },
      MuiFormHelperText: {
        root: {
          // backgroundColor: palette.third,
          color: palette.textSecondary
        }
      }, 
      /**
       * we are not going to set default colors for this, 
       * since some text needs black, lets allow
       * child components to use it.
       * child components should explicitly choose "primary"
       * if they want a different color
       */
      MuiTypography: {
        // body1: {
        //   color: palette.textPrimary
        // }, 
        // // display1: {
        //   color: palette.textPrimary
        // }, 
        colorPrimary: {
          color: palette.textPrimary
        }, 
        colorSecondary: {
          color: palette.textSecondary
        }, 
      },
    },
    //   MuiIconButton: {
    //   root : {
    //     color: palette.secondaryMain
    //   },
    //   colorPrimary: {
    //     // backgroundColor: palette.third,
    //     color: palette.secondaryMain
    //   }
    // }
  });
  return result;
}

export default App
