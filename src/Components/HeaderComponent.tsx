import React from 'react';
import '../cssFiles/HeaderComponent.css'; // Import the CSS file for header styles
import logo from '../images/avglogo.png'; // Import the logo image

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <nav>
        <ul>
       
        <li>Home</li>
               
               
                <li>Synopsis</li>
                <a
                   className="App-link"
                   href="https://africacode.org"
                   target="_blank"
                   rel="noopener noreferrer"
                  >
                  <li >Cast</li>
                  </a>
                
                
                <li>Gallery</li>
                <li>Trailer</li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
