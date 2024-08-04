import React from 'react';

const About = () => {
  return (
    <section id="about">
      <style>
        {`
          #about {
            padding: 2rem;
            margin: 1rem 0;
            width: 100%;
            box-sizing: border-box;
          }
        `}
      </style>
      <h2>ABOUT ME</h2>
      <p>
        Hi there! I'm a passionate AIDS (Artificial Intelligence and Data Science) student with hands-on experience in 
        Machine Learning, Data Science, and Web Technology. My journey in the tech world began with a curiosity about 
        how intelligent systems work and how they can be leveraged to solve real-world problems.
      </p>
      <p>
        Over the past few years, I have worked on various projects that have honed my skills and deepened my understanding 
        of these domains. Here are some highlights:
      </p>
      <ul>
        <li><strong>Machine Learning:</strong> Developed predictive models for classifying and predicting data. I have 
          experience with libraries like TensorFlow, Scikit-Learn, and Keras. Projects include a Diabetes Prediction System, 
          and a sentiment analysis tool for AI chatbot</li>
        <li><strong>Data Science:</strong> Conducted comprehensive data analysis and visualization using Python.
          Created dashboards and reports to derive actionable insights from complex datasets. Notable projects include a 
          sales data analysis for a retail insurance company and an exploratory data analysis of healthcare data.</li>
        <li><strong>Web Technology:</strong> Built responsive and interactive web applications using modern technologies 
          like React.js and Node.js Projects include a personal portfolio website and Online bookstore applications</li>
      </ul>
      <p>
        I am always eager to learn and stay updated with the latest advancements in technology. My goal is to use my 
        knowledge and skills to create innovative solutions that can make a positive impact on society.
      </p>
      <p>
        Feel free to explore my projects and get in touch with me through the contact section. Let's connect and discuss 
        how we can collaborate on exciting projects!
      </p>
    </section>
  );
};

export default About;
