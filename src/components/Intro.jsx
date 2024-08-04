import React from 'react';
import image from '../LabCoat pic.jpeg'; 

const Intro = () => {
  return (
    <section id="intro">
      <style>
        {`
          #intro {
            display: flex;
            align-items: center;
            padding: 2rem;
            margin: 1rem 0;
            width: 100%;
            box-sizing: border-box;
          }
          #intro img {
            max-width: 200px; /* Ensure the image doesn't exceed this width */
            width: 100%; /* Ensures the image scales correctly */
            height: auto; /* Maintains aspect ratio */
            border-radius: 50%; /* Keeps the circular shape */
            margin-right: 2rem; /* Space between the image and text */
          }
          #intro div {
            max-width: 600px;
          }
          @media (max-width: 600px) {
            #intro {
              flex-direction: column;
              align-items: center;
            }
            #intro img {
              margin: 0 0 1rem 0;
            }
            #intro div {
              text-align: center;
            }
          }
        `}
      </style>
      <img src={image} alt="My Profile" />
      <div>
        <h1>Welcome to my <br></br>Personal Website</h1>
        <p>Hello everyone I'm <strong> David Jaison Raj </strong> a student from Karunya University persuing my 
            B.Tech Artificial Intelligence and Data Science and I'm also intrested in the field of Web Development.</p>
      </div>
    </section>
  );
};

export default Intro;
