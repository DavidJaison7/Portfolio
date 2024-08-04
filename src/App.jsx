import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Academics from './components/Academics';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <style>
        {`
          *, *::before, *::after {
            box-sizing: border-box;
          }
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            width: 100vw;
            overflow-x: hidden;
          }
          html, body, #root {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          main {
            background:#E9F1FA;
            padding: 1rem;
          }
        `}
      </style>
      <Header />
      <main>
        <Intro />
        <Academics />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
