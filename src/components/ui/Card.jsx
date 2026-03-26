
import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { toast } from 'react-toastify';

const Card = ({player, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {

    // state for choose player button
    const [isSelected, setIsSelected] = useState(false);

    console.log(player.price)

    const handleChoosePlayer = () => {

        let newCoin = coin - player.price;
        if(newCoin >= 0){
            setCoin(coin - player.price);  
        }
        else{
            toast.error("Not enough coin to purchase this players")
            return;
        }

        toast.success(`${player.playerName} is selected`,{
            position: "top-center",
        })
        setIsSelected(true); 

        setSelectedPlayers([...selectedPlayers, player]);
       
    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={player.playerImage}
                    alt="Shoes" height="10px" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser />{player.playerName}</h2>
                <div className='flex justify-between items-center gap-2'>
                    <FaFlag />
                    <p>{player.playerCountry}</p>
                    <button className='btn'>{player.playerType}</button>
                </div>
                <div className="divider"></div>

                <h2 className='font-bold'>Rating: ({player.rating})</h2>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>{player.battingStyle}</p>
                    <p className='font-bold text-right'>{player.bowlingStyle}</p>
                </div>

                <div className="card-actions justify-between items-center">
                    <div className='flex items-center'>
                        <MdCurrencyRupee />
                        <p className='font-bold'>
                            {player.price}</p>
                    </div>
                    <button className='btn' onClick={handleChoosePlayer}
                     disabled={isSelected}>{isSelected === true ? "selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;