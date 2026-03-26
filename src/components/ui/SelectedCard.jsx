
import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedCard = ({ player, index, handleDeleteSelectedPlayer }) => {
    return (
        // <div key={index} className='flex justify-between items-center my-5 border-2 p-6 rounded-xl'>
        //     <div className='flex justify-center items-center gap-6'>
        //         <img src={player.playerImage} alt={player.playerName} width="300x" className='rounded-2xl' />
        //         <div>

        //             <h1 className='flex items-center gap-2 font-bold'><FaUser />{player.playerName}</h1>
        //             <p>{player.playerType}</p>
        //         </div>
        //     </div>
        //     <button className='btn btn-outline btn-error' onClick={() => handleDeleteSelectedPlayer(player)}><MdDelete /></button>
        // </div>


        <div
            key={index}
            className="flex justify-between items-center my-5 p-5 bg-linear-to-r from-purple-50 via-pink-50 to-yellow-50 border-2 border-transparent rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >

            <div className="flex items-center gap-5">
                <img
                    src={player.playerImage}
                    alt={player.playerName}
                    className="w-32 h-32 object-cover rounded-2xl border-2 border-purple-300"
                />
                <div>
                    <h1 className="text-xl font-bold flex items-center gap-2 text-purple-700">
                        <FaUser className="text-purple-500" />
                        {player.playerName}
                    </h1>
                    <p className="text-sm font-medium text-gray-600 mt-1">{player.playerType}</p>
                </div>
            </div>

            {/* Delete Button */}
            <button
                className="flex items-center justify-center px-4 py-2 border-2 border-red-400 text-red-600 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300"
                onClick={() => handleDeleteSelectedPlayer(player)}
            >
                <MdDelete className="text-lg" />
            </button>
        </div>
    );
};

export default SelectedCard;