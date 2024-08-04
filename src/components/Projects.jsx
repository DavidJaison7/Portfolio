import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <style>
        {`
          #projects {
            padding: 2rem;
            margin: 1rem 0;
            width: 100%;
            box-sizing: border-box;
          }
          h2 {
            font-size: 2rem;
            color: #333;
          }
          .project {
            margin-bottom: 2rem;
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            background: #f9f9f9;
          }
          .project h3 {
            font-size: 1.5rem;
            color: #555;
          }
          .project p {
            font-size: 1rem;
            color: #666;
            line-height: 1.5;
          }
          .project ul {
            margin: 0;
            padding: 0;
            list-style-type: disc;
            margin-left: 20px;
          }
          .project ul li {
            margin: 0.5rem 0;
          }
        `}
      </style>
      <h2>PROJECTS</h2>

      <div className="project">
        <h3>Predictive Analysis Project on Diabetes Detection (DATA SCIENCE)</h3>
        <ul>
          <li>Developed a predictive analysis model for diabetes detection using Random Forest, achieving high accuracy in identifying at-risk individuals.</li>
          <li>Conducted data preprocessing, feature selection, and model optimization, demonstrating strong skills in machine learning and statistical analysis.</li>
        </ul>
      </div>

      <div className="project">
        <h3>Face Detection System (PYTHON)</h3>
        <ul>
          <li>Leveraging Python's OpenCV library, developed a robust face detection system capable of accurately identifying faces in images and videos in real-time.</li>
          <li>Employed machine learning techniques, incorporating trained models to detect facial features with high precision.</li>
          <li>Contributed to the effectiveness of security surveillance and facial recognition systems.</li>
        </ul>
      </div>

      <div className="project">
        <h3>Emotion Detection Chatbot (GEN AI)</h3>
        <ul>
          <li>Created an advanced chatbot using Generative AI techniques capable of detecting and responding to user emotions, enhancing user engagement and satisfaction through personalized interactions.</li>
          <li>Leveraged APIs to accurately analyze and interpret user sentiments, enabling the chatbot to provide contextually appropriate and emotionally aware responses.</li>
          <li>Developed as part of a team during a Hackathon event.</li>
        </ul>
      </div>

      <div className="project">
        <h3>Web Technology Mini Project (WEB DEVELOPMENT) </h3>
        <ul>
          <li>Successfully built and deployed an online bookstore using the MEAN stack (MongoDB, Express.js, Angular, Node.js).</li>
          <li>Implemented features such as user authentication, product catalog, shopping cart, and order management.</li>
          <li>Stored customer data and orders in a MongoDB database.</li>
          <li>Enhanced website performance and user experience by implementing responsive design principles using Bootstrap, and optimizing backend queries, resulting in a seamless and efficient browsing and purchasing experience.</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
