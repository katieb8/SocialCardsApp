import React, { useState, useEffect } from 'react';
import CardData from './CardData.jsx';
import './index.css';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api?results=10')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + users.length) % users.length);
  };

  return (
    <div className='App'>
      {users.length > 0 && (
        <div className='users'>
          <CardData userData={users[currentIndex]} />
          <div className="navigation-buttons">
            <button onClick={prevCard} className="nav-button">Previous</button>
            <button onClick={nextCard} className="nav-button">Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
