import {Component} from 'react';
import Button from "./Button";

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
      zahl: 0
    }

    this.countUp = this.countUp.bind(this)
  }
  
  countUp() {
    this.setState({
      zahl: this.state.zahl + 1
    })
  }
  
  render() {
    return(
      <div>
        <h1>{this.state.zahl}</h1>
        <button onClick={this.countUp}>Hochzählen</button>
      </div>
    )
  }
}



export default App;
