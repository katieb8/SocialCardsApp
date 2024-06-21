const SocialCard1 = ({ userData }) => {
    return (
        <div className="socialCard1">
            <h2 className="card-title" data-testid={`card-title-${userData.name.first}`}>{userData.name.first}</h2>
            <img className="cardImage" src={userData.picture.medium} alt={`picture of ${userData.name.first}`} data-testid={`profile-pic-${userData.name.first}`}  />
            <div className="card-text-container">
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis illum, dolores autem, neque voluptatum reprehenderit quasi officia cum sapiente sint. Fugiat, facere architecto? Doloribus delectus dolores hic in velit.
                </p>
            </div>
        </div>
    )
};
 
export default SocialCard1;