
import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {

    // state for choose player button
    const [isSelected, setIsSelected] = useState(false);

    console.log(player.price)

    const handleChoosePlayer = () => {

        let newCoin = coin - player.price;
        if (newCoin >= 0) {
            setCoin(coin - player.price);
        }
        else {
            toast.warn(`Not enough coin to purchase ${player.playerName}`,{
                position: "top-center",
            })
            return;
        }

        toast.success(`${player.playerName} is selected`, {
            position: "top-center",
        })
        setIsSelected(true);

        setSelectedPlayers([...selectedPlayers, player]);

    }

    return (
        // <div className="card bg-base-100 w-96 shadow-sm">
        //     <figure>
        //         <img
        //             src={player.playerImage}
        //             alt="Shoes" height="10px" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title"><FaUser />{player.playerName}</h2>
        //         <div className='flex justify-between items-center gap-2'>
        //             <FaFlag />
        //             <p>{player.playerCountry}</p>
        //             <button className='btn'>{player.playerType}</button>
        //         </div>
        //         <div className="divider"></div>

        //         <h2 className='font-bold'>Rating: ({player.rating})</h2>
        //         <div className='flex justify-between items-center'>
        //             <p className='font-bold'>{player.battingStyle}</p>
        //             <p className='font-bold text-right'>{player.bowlingStyle}</p>
        //         </div>

        //         <div className="card-actions justify-between items-center">
        //             <div className='flex items-center'>
        //                 <MdCurrencyRupee />
        //                 <p className='font-bold'>
        //                     {player.price}</p>
        //             </div>
        //             <button className='btn' onClick={handleChoosePlayer}
        //              disabled={isSelected}>{isSelected === true ? "selected" : "Choose Player"}</button>
        //         </div>
        //     </div>
        // </div>

        <div className="max-w-sm bg-linear-to-br from-purple-100 via-pink-100 to-yellow-100 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <figure className="relative">
                <img
                    src={player.playerImage}
                    alt={player.playerName}
                    className="w-full h-56 object-cover rounded-t-xl"
                />
                <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full uppercase font-bold">
                    {player.playerType}
                </span>
            </figure>

            <div className="p-5">
                
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-700">
                    <FaUser className="text-purple-500" />
                    {player.playerName}
                </h2>

                
                <div className="flex items-center gap-2 text-gray-700 mb-4">
                    <FaFlag className="text-red-500" />
                    <p className="font-medium">{player.playerCountry}</p>
                </div>

                
                <div className="bg-purple-200 p-3 rounded-lg mb-4 flex justify-between items-center text-purple-800 font-semibold">
                    <span>Rating:</span>
                    <span>{player.rating}</span>
                </div>

                
                <div className="flex justify-between mb-4 text-purple-700 font-medium">
                    <span>{player.battingStyle}</span>
                    <span>{player.bowlingStyle}</span>
                </div>

                
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 font-bold text-purple-800">
                        <MdCurrencyRupee />
                        <span>{player.price}</span>
                    </div>
                    <button
                        className={`px-4 py-2 rounded-lg font-semibold text-white transition-colors ${isSelected
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-pink-500 hover:bg-pink-600"
                            }`}
                        onClick={handleChoosePlayer}
                        disabled={isSelected}
                    >
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;