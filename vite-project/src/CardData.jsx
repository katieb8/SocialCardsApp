import React, { useState, useEffect } from 'react';

export default function CardData() {
   const [allUsers, setAllUsers] = useState([]);
   useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
    })();
  }, 
  []);
};