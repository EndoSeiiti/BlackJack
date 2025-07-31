import React, { useEffect, useState } from "react";
import  '../App.css';
import {dealcards, createdeck, getSuitSymbol, getCardValue, getCardValue2 } from "./Game.jsx";


function GameBoard(){
    const [playerhand, setPlayerHand] = useState([]);
    const [dealerhand, setDealerHand] = useState([]);
    const [dealerCover, setDealerCover] = useState();
    const [deck, setDeck] = useState ();
    const [standmessage, setStandMessage] = useState("");
    const [canclick, setCanClick] = useState(true);
    const [canclickhit, setCanClickhit] = useState(false);
    const [score, setScore] = useState(0);
    const [gethighscore, sethighscore] = useState(0);
    
    const handledeal=() => {  
        const deck = createdeck();
        const  {playerhand, dealerhand} = dealcards(deck);
       
        setPlayerHand(playerhand);
        setDealerHand(dealerhand);
        setDeck(deck)
        setDealerCover(true);
    };

    const handlehit= () => {
        
         const i = Math.floor(Math.random() * deck.length);
         const [card] = deck.splice(i, 1);
         
         const newhand = [...playerhand, card]
        
            
        setPlayerHand(newhand);
        setDeck([...deck]);
        const  playerscore = getCardValue(newhand);
        if (playerscore > 21) setStandMessage("You busted!"),  
        setCanClickhit(false), 
        setCanClick(true), 
        setScore(0);
    }

    const handlestand = (playerhand,dealerhand) => {
        const  playerscore = getCardValue(playerhand);
        const dealerscore = getCardValue2(dealerhand);

        
        if (playerscore > dealerscore){ setStandMessage ("You Win!"), setScore(prev => prev + 1);
            if (score > gethighscore)  {sethighscore (score+1 )};} 
        else if (dealerscore > playerscore) setStandMessage ("You Lose!"),setScore(0);
        else setStandMessage ("It's a Tie!");
        
    }



   
   
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
                    <button disabled = {!canclick} onClick = {()=>{
                        handledeal();
                        setCanClick(false);
                        setCanClickhit(true);
                        setStandMessage("")
                    }}
                       >DEAL CARDS</button>
                </div>
                <div className="null"></div>
                <div className="Stand">
                    <button disabled={canclick} onClick={()=> {setDealerCover(false);
                         handlestand(playerhand, dealerhand);
                         setCanClick(true);
                         setCanClickhit(false);
                         }}>STAND</button>
                         
                </div>
                {standmessage && <div className="message" >{standmessage}</div>}
                <div className="null">
                </div>
                <div className="record">
                    <span className="highscore">High Score</span>
                    <span className="highnumber">{gethighscore}</span>
                    <span className="score">{score}</span>
                    
                </div>
                <div className="playerhand">
                    <span className="textPH">Your Hand</span>
                    {playerhand.map ((card,i)=>(
                    <div
                    key={i} 
                    className={`playercard ${card.suit === "H" || card.suit === "D" ? "red" : "black"}`}>
                        <span className="num">{card.num}</span>
                        <span className="suit">{getSuitSymbol(card.suit)}</span>
                    </div>
                  ))}
                </div>
                <div className="hit">
                    <button disabled = {!canclickhit} onClick={handlehit}>HIT</button>
                </div>
                </div>
        
    );

}

export default GameBoard