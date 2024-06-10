import React, { useState, useEffect } from 'react';
import SocialCard1 from './components/SocialCard1';
import './index.css';

export function CardData() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch('https://randomuser.me/api?results=10')
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          setUsers(data.results); // Correctly set the users state
      })
      .catch((err) => {
          console.log(err.message);
      });
  }, []);
    
    return (
      <div className="userscontainer">
        {users.map((user, index) => (
          <SocialCard1 key={index} userData={user} />
        ))}
      </div>
    );
  }
  
  export default CardData;