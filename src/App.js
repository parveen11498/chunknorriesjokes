import React, { useEffect, useState } from 'react';
import JokeComponent from './JokeComponent';
import './App.css';

const App = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching jokes categories:', error);
    }
  };


  return (
    <>
     <div className="joke-container">
      <h1 className="heading">Chuck Norries</h1>
      <div className="joke-container">
  
  {categories.map((category, index) => (
    <JokeComponent key={index} categories={category} />
  ))}
    
</div>
    </div> 
   
     
    </>
  );
};

export default App;
