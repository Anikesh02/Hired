import React from 'react';
import adaptive from '../../assets/images/adaptive.png';
import hiring from '../../assets/images/feature-img.png';
import getHired from '../../assets/images/getHired.jpg';
import './EffectiveCard.css';

const EffectiveCard = () => {
  return (
    <div className="container">
      <div className="topic left">
        <div className="content">
          <h2 className='heading'>Adaptive Learning</h2>
          <p className='text__para'>
            Adaptive learning is a feature that tailors the educational content and difficulty level to the individual needs and progress of each student. It utilizes artificial intelligence (AI) algorithms to assess a student's current knowledge, learning style, and proficiency in different topics. By dynamically adjusting the content, it optimizes the learning efficiency and helps students grasp concepts at their own pace.
          </p>
        </div>
        <img className='w-[360px] h-[360px]' src={adaptive} alt="Adaptive Learning GIF"  /> 
      </div>

      <div className="topic right">
        <div className="content">
          <h2 className='heading text-center'>Apply for Jobs</h2>
          <p className='text__para text-center'>
            "Learn at your pace" is an approach that allows students to progress through educational materials at their own speed. It recognizes that every student has a unique learning rhythm and accommodates this diversity. Students have the flexibility to revisit topics, spend more time on challenging concepts, or move ahead faster if they grasp content quickly, promoting a personalized learning experience.
          </p>
        </div>
        {/* <img className='w-[50px] h-[50px]' src="learn-at-your-pace.gif" alt="Learn at Your Pace GIF" /> */}
        {/* <iframe className='w-[200px] h-[200px]' src={hiring} width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
        <img className='w-[360px] h-[360px]' src={hiring} alt="Adaptive Learning GIF"  />
      
      </div>

      <div className="topic left">
        <div className="content">
          <h2 className='heading text-center'>Get Hired</h2>
          <p className='text__para text-center'>
            A chatbot is an automated conversational agent integrated into the learning platform. It provides students with instant support and answers to common queries, such as course-related questions or technical issues. The chatbot is available 24/7, enhances user engagement, and can offer personalized assistance based on user interactions and learning data.
          </p>
        </div>
        {/* <img src="chatbot.gif" alt="Chatbot GIF" /> */}
        {/* <iframe className='w-[200px] h-[200px]' src="https://giphy.com/embed/z4cAv0wUBbXLxw6ySb" width="480" height="274" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
        <img className='w-[400px] h-[360px]' src={getHired} alt="Adaptive Learning GIF"  />
      
      </div>
    </div>
  );
};

export default EffectiveCard