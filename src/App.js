import  React,{Component } from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <HashRouter>
        <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
      </HashRouter>
    );
  }
}

export default App;
