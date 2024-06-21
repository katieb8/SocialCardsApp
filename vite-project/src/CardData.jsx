import React from 'react';
import SocialCard1 from './components/SocialCard1';
import './index.css';

export function CardData({ userData }) {
  return (
    <div className="userscontainer flex">
      <SocialCard1 userData={userData} />
    </div>
  );
}

export default CardData;
