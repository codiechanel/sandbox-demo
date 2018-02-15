import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Home from "./routes/home";
import "./icon.css";
import "./App.css";

class App extends React.Component {
  render() {
    let theme = createTheme(palObj);
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="App-container">
            <Switch>
              <Route exact path="/" render={props => <Home {...props} />} />
              <Route render={props => <Home {...props} />} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

let palObj = {
  primaryMain: "#34495e",
  primaryDark: "#2c3e50",
  primaryLight: "#313337", // list item
  secondaryMain: "#4594EA", // accent
  secondaryDark: "#292B2C", // list header
  secondaryLight: "#4594EA",
  textPrimary: "#ffffff",
  textSecondary: "grey"
};

function createTheme(palette, type = "light") {
  const result = createMuiTheme({
    palette: {
      type: type,
      /**
       * to be decided
       */
      // background: {
      //   default: palette.primaryDark,
      //   paper: palette.primaryDark
      // },

      // primary: { main: palette.primaryMain }, // Purple and green play nicely together.
      // secondary: { main: palette.secondaryMain } // This is just green.A700 as hex.

      primary: {
        light: palette.primaryLight,
        main: palette.primaryMain,
        dark: palette.primaryDark
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
      /**
       * avatar has no "color" option
       */
      MuiAvatar: {
        // Name of the styleSheet
        colorDefault: {
          // Name of the rule
          backgroundColor: palette.secondaryMain
        }
      },
      MuiPaper: {
        root: {
          backgroundColor: palette.primaryDark
        }
      },
      /**
       * we need to set this,  child element who uses inherit
       * will get this color.
       * Let's set this to secondary light to allow child who uses
       * inherit to get a different color.
       */
      MuiList: {
        root: {
          backgroundColor: palette.primaryLight,
          color: palette.textPrimary
        }
      },
      /**
       * root will be applied if color is "default"
       * "inherit" will simply get the colors from whatever the
       * background is, in our case, it's the List component
       * lets make the default the same as the list item
       * temporarily commented out
       * Subheader has no background color, it depends on its parent List
       * let's just change List to secondary
       * If it's default then the text will be a transparent one
       */
      MuiListSubheader: {
        // root: {
        //   backgroundColor: palette.primaryLight,
        //   color: palette.textPrimary
        // },
        colorPrimary: {
          backgroundColor: palette.primaryMain,
          color: palette.textPrimary
        }
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
      /**
       * unfortunately, Chip has no "color" property
       * so we are stuck to using one.
       */
      MuiChip: {
        root: {
          // backgroundColor: palette.primaryMain,
          backgroundColor: "rgba(0, 0, 0, 0.1)"

          // color: palette.textPrimary
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
        }
      }
    }
  });
  return result;
}
export default App;
