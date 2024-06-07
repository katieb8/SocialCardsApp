import React from 'react';
import SocialCard1 from "./components/SocialCard1.jsx";
import "./index.css";
import { useState, useEffect } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {fetch('https://randomuser.me/api?results=10')
    .then((response) => response.json()).then((data) => {
      console.log(data);
      setUsers(data);})
      .catch((err) => {
        console.log(err.message);});}, 
      []);


      return (
        <div className="userscontainer">
          {users.map((user) => {
            return (
              <div className="user-card" key={user.name.first}>
                <h2 className="card-title">{user.name.last}</h2>
                <p className="card-body">{user.picture.medium}</p>
                <div className="button">
                  <div className="delete-btn">Delete</div>
                </div>
              </div>
            );
        })}
      </div>
      );
      };


  //     <div className="userscontainer">{users.map((users) => {
  //       <div className="post-card" key={post.id}>
  //         <h2 className="post-title">{post.title}</h2>
  //         <p className="post-body">{post.body}</p>
  //         <div className="button">
  //           <div className="delete-btn">Delete</div>
  //           </div>
  //           </div>
  //     );
  // })}
  //   </div>);