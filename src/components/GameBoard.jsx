import React, { useEffect, useState } from "react";
import  '../App.css';
import {dealcards, createdeck, round, animatecard,showcards,getSuitSymbol } from "./Game.jsx";


function GameBoard(){

    
    
    const deck = createdeck();
    const  {playerhand, dealerhand} = dealcards(deck);
    const [animation, setAnimation]= useState(false);
   
    return ( 
        <div className="GameBoard">
                
                <div className="deck"></div>
                <div className="dealer">
                    <span className="textdealer">Dealer</span>
                    {dealerhand.map ((card,i)=>(
                    <div
                    key={i} 
                    className={`dealercard${i}  ${card.suit === "H" || card.suit === "D" ? "red" : "black"}`}>
                        <span className="num">{card.num}</span>
                        <span className="suit">{getSuitSymbol(card.suit)}</span>
                    </div>
                    ))}
                </div>
                <div className="DealCards">
                    <button onClick = {() => setAnimation(true)}>Deal Cards</button>
                </div>
                <div className="null"></div>
                <div className="compare">
                    <button onClick={() => setAnimation(true)}>Compare</button>
                </div>
                
                <div className="null"></div>
                <div className="stake">
                    <span className="textstake">Stakes</span>
                </div>
                <div className="playerhand">
                    <span className="textPH">Your Hand</span>
                    {playerhand.map ((card,i)=>(
                    <div
                    key={i} 
                    className={`playercard${i}  ${card.suit === "H" || card.suit === "D" ? "red" : "black"}`}>
                        <span className="num">{card.num}</span>
                        <span className="suit">{getSuitSymbol(card.suit)}</span>
                    </div>
                    ))}
                </div>

                {animatecard(animation)}
                
                
                
        </div>
        
    );

}


export default GameBoard