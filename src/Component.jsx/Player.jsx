/* eslint-disable react/prop-types */
// import React from 'react'



const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    console.log(name)
return (
    <div className="player-card">
        <img src={imageUrl} alt={name} />
        <div className="player-info">
            <h3>{name}</h3>
            <p>
            {/* <span>Team: </span> */}
            {team}
            </p>
            <p>
            {/* <span>Nationality: </span> */}
            {nationality}
            </p>
            <p>
            {/* <span>Jersey Number: </span> */}
            {jerseyNumber}
            </p>
            <p>
            {/* <span>Age: </span> */}
            {age}
            </p>
        </div>
    </div>
    )
}

// Player.defaultProps = {
//     name: "Player Name",
//     team: "Team Name",
//     nationality: "N/A",
//     jerseyNumber: 0,
//     age: 0,
//     imageUrl: "",
//   };

export default Player



