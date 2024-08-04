import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <style>
        {`
          #contact {
            padding: 2rem;
            margin: 1rem 0;
            width: 100%;
            box-sizing: border-box;
          }
          h2 {
            font-size: 2rem;
            color: #333;
            text-align: center;
            margin-bottom: 1rem;
          }
            h4{
              text-align: center;
            }
          .contact-list {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .contact-list li {
            margin: 0 1rem;
            display: flex;
            align-items: center;
            transition: transform 0.3s, background-color 0.3s;
            padding: 0.5rem;
            border-radius: 5px;
          }
          .contact-list li a {
            color: #333;
            text-decoration: none;
            font-size: 1rem;
            margin-left: 0.5rem;
            transition: color 0.3s;
          }
          .contact-list li .icon {
            font-size: 1.5rem;
            transition: color 0.3s;
          }
          .contact-list li:hover {
            transform: scale(1.1);
            background-color: #e0e0e0;
          }
          .contact-list li:hover .icon,
          .contact-list li:hover a {
            color: #0073b1; /* Change to a color of your choice */
          }
          .contact-list li:hover a {
            text-decoration: underline;
          }
        `}
      </style>
      <h2>For Queries</h2>
      <h4>Contact me</h4>
      <ul className="contact-list">
        <li>
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <a href="https://www.linkedin.com/in/david-jaison-bb79b6246/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGoogle} className="icon" />
          <a href="mailto:davidjaison2k4@gmail.com">davidjaison2k4@gmail.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <a href="tel:+916382990743">+916382990743</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
