import React from 'react';
import logo from '../Logo.png';

const Header = () => {
  return (
    <header>
      <style>
        {`
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #000000;
            color: #fff;
            padding: 1rem;
            width: 100%;
            box-sizing: border-box;
          }
          img.logo {
            max-height: 50px; /* Adjust this value as needed */
          }
          nav ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          nav ul li {
            margin: 0 1rem;
            position: relative;
          }
          nav ul li a {
            color: #fff;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.3s, transform 0.3s;
          }
          nav ul li a:hover {
            color: #1e90ff; /* Change to a color of your choice */
            transform: scale(1.1);
          }
          nav ul li:before {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: #1e90ff; /* Change to a color of your choice */
            visibility: hidden;
            transition: all 0.3s ease-in-out;
          }
          nav ul li:hover:before {
            visibility: visible;
            width: 100%;
          }
        `}
      </style>
      <img src={logo} alt="My Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#Academics">Academics</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
