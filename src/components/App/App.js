import * as React from 'react';
import logo from '../../assets/images/logo.svg';
import '../../styles/App.css';
import FormGeneratorContainer from "../FormGenerator/FormGeneratorContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <FormGeneratorContainer/>

      </div>
    );
  }
}

export default App;
