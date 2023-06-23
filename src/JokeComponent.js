import React, { useState } from 'react';

const JokeComponent = ({ categories}) => {
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const jokes = [
    [
     'Why don’t scientists trust atoms? Because they make up everything!',
     
   ],
   [
     'Why did the scarecrow win an award? Because he was outstanding in his field!',
     
   ],]

    


  const nextJoke = () => {
    
    setCurrentJokeIndex((prevIndex) =>
      prevIndex === jokes.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
  
    <div className='main'>
       
      <div className="joke-div" onClick={togglePopup}>
        <p>{categories}<br/>
        Unlimited jokes on {categories}</p>
      </div>
      {showPopup && (
        <div className="joke-popup">
          <h1 className='h1'>{categories}</h1>
          <button className="close-button" onClick={togglePopup}>
              <span className="cross">&#10005;</span>
            </button>
            <div className='jokediv'>
            <div className="joke-text"><h4>"{jokes[currentJokeIndex]}"</h4></div>
          <div className="buttons-container">
            <button className="next-button" onClick={nextJoke}>
              Next joke
            </button>
            </div>
         
          
          </div>
        </div>
      )}
    </div>
  );
};

export default JokeComponent;





