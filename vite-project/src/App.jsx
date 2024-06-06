import React from 'react';
import SocialCard1 from "./components/SocialCard1.jsx";
import "./index.css";
import cardData from "./CardData";

export default function App() {
  const socialCardItems = cardData.map((item) => (
    <SocialCard1 key={item.id} item={item} />
  ));

  return(
    <div className="App">
      <h1 className='pageTitle'>Social Cards</h1>
      <div className="grid-wrap">{socialCardItems}</div>
    </div>
  );
}
