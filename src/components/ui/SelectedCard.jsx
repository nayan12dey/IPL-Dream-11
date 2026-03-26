
import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedCard = ({player, index, handleDeleteSelectedPlayer}) => {
    return (
        <div key={index} className='flex justify-between items-center my-5 border-2 p-6 rounded-xl'>
            <div className='flex justify-center items-center gap-6'>
                <img src={player.playerImage} alt={player.playerName} width="300x" className='rounded-2xl' />
                <div>

                    <h1 className='flex items-center gap-2 font-bold'><FaUser />{player.playerName}</h1>
                    <p>{player.playerType}</p>
                </div>
            </div>
            <button className='btn btn-outline btn-error' onClick={() => handleDeleteSelectedPlayer(player)}><MdDelete /></button>
        </div>
    );
};

export default SelectedCard;