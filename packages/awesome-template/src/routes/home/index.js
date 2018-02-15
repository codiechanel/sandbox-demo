import React from "react";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import './styles.css';
import  style  from './inline.module.css'

class App extends React.Component {
  state = {
    menus: []
  }
  componentDidMount() {
    let arr = []
    arr.push({title: "Palette", content: "show palletes"})
    arr.push({title: "Demo", content: "show demo"})
    arr.push({title: "About", content: "show about"})
    arr.push({title: "Donate", content: "make donations"})
    this.setState({menus: arr})
  }
  mapper(o, i) {
    let avatar = (
      <Avatar style={{ backgroundColor: "#4594EA", color: "white" }}>
        {o.title.charAt(0)}
      </Avatar>
    );
    if (o.logo) {
      avatar = (
        <Avatar
          src={o.logo}
          style={{ backgroundColor: "#4594EA", color: "white" }}
        />
      );
    }
    return (
      <Grid className="Home-grid" key={i} item xs={6} sm={3}>
        <Chip
          className="Home-chip"
          avatar={avatar}
          label={o.title}
        />
        <div>{o.content}</div>
      </Grid>
    );
  }
  render() {
    
    return (
      <div
        className={`container ${style.container}`}
      >
        <header className="App-header">
          <h1 className="App-title">Home</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Grid style={{ marginTop: 20, }} container spacing={16}>
            {this.state.menus.map(this.mapper.bind(this))}
          </Grid>
      </div>
    );
  }
}

export default App;
