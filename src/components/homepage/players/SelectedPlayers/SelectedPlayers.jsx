
import React from 'react';

import SelectedCard from '../../../ui/SelectedCard';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoin, coin}) => {
    console.log(selectedPlayers, "selctedPlayers");

    const handleDeleteSelectedPlayer = (player) => {
        console.log(player);

        console.log(selectedPlayers, "selected players");

        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName);

        console.log(filteredPlayers)

        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);

    

    }



    return (
        <div>
            {
               selectedPlayers.length === 0 ? 
               <div className='h-100 flex flex-col justify-center items-center gap-4'>
                    <h2 className='font-semibold text-2xl text-gray-400'>No Players Selected yet</h2>
                    <p className='text-xl text-gray-400'>Go to Available tab to Select Players</p>
               </div> 
               :selectedPlayers.map((player, index) => {
                    return <SelectedCard player={player} key={index} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>
                })
            }
        </div>
    );
};

export default SelectedPlayers;