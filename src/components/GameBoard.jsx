import React from "react";
import  '../App.css';

function GameBoard(){
    return ( 
        <div className="dealerhand">
            <h1>Dealer</h1>
                <div className="Deck">
                    <h1>Deck</h1>
                        <div className="Hand">
                            <h1>Your Hand</h1>
                        </div>
                </div>
        </div>
    );

}

export default GameBoard