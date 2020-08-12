import React from 'react';
import logo from '../../GitHub-Mark-64px.png';
import './Header.css';
import Link from '../Links/Links'
const Header = () =>{
    return(
        
             <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h2>My GitHub Portflio</h2>
       <Link url="https://api.github.com/users/mahmoudkhdre" title="Learn More" />
      </header>
      
    )
}
export default Header;