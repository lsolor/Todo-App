import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from'./components/learning-examples/FirstComponent'

class App extends Component {
render() {
  return (
    //JSX script ... looks like html
    <div className="App">
      My Hello World
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  );
  }
}


  //Class Component
class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
        SecondComponent
      </div>
    );
    }
  }

//function component
  function ThirdComponent(){
    return (
      <div className="thirdComponent">
        ThirdComponent
      </div>
    );
  }
  


export default App;
