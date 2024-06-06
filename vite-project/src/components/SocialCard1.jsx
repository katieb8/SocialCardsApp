import React from 'react';

export default function SocialCard1(props) {
    return (
        <>
            <div className="socialCard1">
                <h2 className="card-title">{props.item.name}</h2>
                <img className="cardImage" src={props.item.image} alt={`picture of ${props.item.name}`} />
                <p className="card-text">{props.item.desc}</p>
            </div>
        </>
    );
}
