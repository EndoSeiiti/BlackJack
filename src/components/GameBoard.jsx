import React, { useEffect, useState } from "react";
import  '../App.css';
import {dealcards, createdeck, animatecard, getSuitSymbol } from "./Game.jsx";


function GameBoard(){
    const [playerhand, setPlayerHand] = useState([]);
    const [dealerhand, setDealerHand] = useState([]);
    const [dealerCover, setDealerCover] = useState()
    
    const handledeal=() => {  
        const deck = createdeck();
        const  {playerhand, dealerhand} = dealcards(deck);
        setPlayerHand(playerhand);
        setDealerHand(dealerhand);
        setDealerCover(true);
    };

   
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
                        {i === 1 && dealerCover &&
                        <div className="Dcard"></div>
                        }
                    </div>
                    ))}
                </div>
                <div className="DealCards">
                    <button onClick = {handledeal}>DEAL CARDS</button>
                </div>
                <div className="null"></div>
                <div className="Stand">
                    <button onClick={()=> setDealerCover(false)}>STAND</button>
                </div>
                
                <div className="null"></div>
                <div className="null"></div>
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
                <div className="hit">
                    <button onClick={()=> setDealerCover(false)}>HIT</button>
                </div>

               
                
                
                
        </div>
        
    );

}


export default GameBoard