import React from "react";
import Paper from "material-ui/Paper";
import axios from 'axios'
import "./styles.css";

class App extends React.Component {
  
  constructor(props) {
    super(props)
    let images = []
    images.push('https://placeholdit.co//i/150x150?bg=222222')
    images.push('https://placeholdit.co//i/150x100?bg=222222')
    images.push('https://placeholdit.co//i/150x200?bg=222222')
    images.push('https://placeholdit.co//i/150x250?bg=222222')
    images.push('https://placeholdit.co//i/150x200?bg=333333')
    images.push('https://placeholdit.co//i/150x150?bg=333333')
    images.push('https://placeholdit.co//i/150x100?bg=333333')
    
    images.push('https://placeholdit.co//i/150x250?bg=333333')
    images.push('https://placeholdit.co//i/150x250?bg=444444')
    images.push('https://placeholdit.co//i/150x100?bg=444444')
    images.push('https://placeholdit.co//i/150x200?bg=444444')
    images.push('https://placeholdit.co//i/150x150?bg=444444')
    this.state = {
      items: images
    }
  }
  componentDidMount() {
    // this.getMockData()
    
  }
  async getMockData() {
    // const resp = await axios.get('https://randomuser.me/api/')
    // const resp = await axios.get('http://faker.hook.io/?property=lorem.paragraphs')
    const resp = await axios.get('https://reqres.in/api/users')
    let items = resp.data.data
    this.setState({items})
    console.dir(resp.data.data)

  }
  render() {
    

    let panel = null
    if (this.state.items.length > 0 ) {
      panel = this.state.items.map((x, i) => {
        return <div key={i} className="masonry-layout__panel">
            <div className="masonry-layout__panel-content">
            <img src={x} alt="Smiley face"  />
            </div>
          </div>

      })
    }
    return (
       <Paper className="container">
        <div className="masonry-layout">
        {panel}

        </div>
       </Paper> 
    );
  }
}

export default App;
