import React from "react";
import  '../App.css';
import cardback from '../assets/cardback.jpg';

function GameBoard(){
    return ( 
        <div className="GameBoard">
       
                <div className="deck">
                 <span className="textdeck">Deck</span>
                 <img src={cardback} alt= "Cardback" className="cardback"></img>
                
                 </div>
                <div className="dealer">
                    <span className="textdealer">Dealer</span>
                </div>
                <div className="null"></div>
                <div className="null"></div>
                <div className="null"></div>
                <div className="null"></div>
                <div className="stake">
                    <span className="textstake">Stakes</span>
                </div>
                <div className="playerhand">
                    <span className="textPH">Your Hand</span>
                </div>
                <div className="null"></div>
        </div>
    );

}

export default GameBoard