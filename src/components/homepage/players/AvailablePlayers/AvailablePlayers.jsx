
import React from 'react';
import Card from '../../../ui/Card';
// import viratImg from "https://i.ibb.co/sJ5BJshT/Virat-Kohli.jpg";

const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    // console.log(players);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>

            {
                players.map((player, index) => {
                    return <Card key={index} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></Card>
                })
            }



        </div>
    );
};

export default AvailablePlayers;