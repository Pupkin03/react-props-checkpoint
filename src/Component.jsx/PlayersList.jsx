// import React from 'react'

import { players } from "../Players"
import Player from "./Player"

const PlayersList = () => {
return (
    <div className="players-list">
        {players.map((player) => (
            <Player key = {player.name} {...player} />
        
        ) )}
        
        </div>
);
};

export default PlayersList;