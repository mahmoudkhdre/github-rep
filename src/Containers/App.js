import React,{Component} from 'react';
import logo from '../logo.svg';
import Header from '../Components/Header/Header'
import './App.css';
import Profile from './Profile';

class App extends Component{
  render(){
    return (
      <div className="App">
       <Header  logo={logo}/>
       <Profile />
      </div>
    );
  }
}


export default App;
