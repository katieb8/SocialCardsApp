const SocialCard1 = ({ userData }) => {
    return (
        <div className="socialCard1">
            <h2 className="card-title" data-testid={`card-title-${userData.name.first}`}>{userData.name.first}</h2>
            <img className="cardImage" src={userData.picture.medium} alt={`picture of ${userData.name.first}`} data-testid={`profile-pic-${userData.name.first}`}  />
            <div className="card-text-container">
                <p className="card-text">
                    Hi I'm {userData.name.first} {userData.name.last}, and I'm from {userData.location.city}.
                </p>
            </div>
        </div>
    )
};
 
export default SocialCard1;