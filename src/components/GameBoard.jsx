import React, { useEffect, useState } from "react";
import  '../App.css';
import {dealcards, createdeck, round, animatecard } from "./Game.jsx";


function GameBoard(){

    
    const [animation, setAnimation]= useState(false);
   
    
   
    return ( 
        <div className="GameBoard">
                
                <div className="deck"></div>
                <div className="dealer">
                    <span className="textdealer">Dealer</span>
                </div>
                <div className="null"></div>
                <div className="null"></div>
                <div className="compare">
                    <button 
                onClick={() => setAnimation(true)}>Compare</button>
                </div>
                
                <div className="null"></div>
                <div className="stake">
                    <span className="textstake">Stakes</span>
                </div>
                <div className="playerhand">
                    <span className="textPH">Your Hand</span>
                </div>

                {animatecard(animation)}
                
                
                
        </div>
        
    );

}


export default GameBoard