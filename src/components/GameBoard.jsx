import React, { useEffect, useState } from "react";
import  '../App.css';
import {dealcards, createdeck, getSuitSymbol, getCardValue, getCardValue2 } from "./Game.jsx";
import translations from './Languages'

function GameBoard({language}){
    const [playerhand, setPlayerHand] = useState([]);
    const [dealerhand, setDealerHand] = useState([]);
    const [dealerCover, setDealerCover] = useState();
    const [deck, setDeck] = useState ();
    const [standmessage, setStandMessage] = useState("");
    const [canclick, setCanClick] = useState(true);
    const [canclickhit, setCanClickhit] = useState(false);
    const [score, setScore] = useState(0);
    const [gethighscore, sethighscore] = useState(0);
    
    const t = translations[language];

    
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
        if (playerscore > 21) setStandMessage(t.busted),  
        setCanClickhit(false), 
        setCanClick(true), 
        setScore(0);
    }

    const handlestand = (playerhand,dealerhand) => {
        const  playerscore = getCardValue(playerhand);
        const dealerscore = getCardValue2(dealerhand);

        
        if (playerscore > dealerscore){ setStandMessage (t.win), setScore(score => score + 1);
            if (score >= gethighscore)  {sethighscore (gethighscore+1 )};} 
        else if (dealerscore > playerscore) setStandMessage (t.lose),setScore(0);
        else setStandMessage (t.tie);
        
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
                       >{t.dealcards}</button>
                </div>
                <div className="null"></div>
                <div className="Stand">
                    <button disabled={canclick} onClick={()=> {setDealerCover(false);
                         handlestand(playerhand, dealerhand);
                         setCanClick(true);
                         setCanClickhit(false);
                         }}>{t.stand}</button>
                         
                </div>
                {standmessage && <div className="message" >{standmessage}</div>}
                <div className="null">
                </div>
                <div className="record">
                    <span className="highscore">{t.highscore}</span>
                    <span className="highnumber">{gethighscore}</span>
                    <span className="currentS">{t.score}</span>
                    <span className="score">{score}</span>
                    
                </div>
                <div className="playerhand">
                    <span className="textPH">{t.hand}</span>
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
                    <button disabled = {!canclickhit} onClick={handlehit}>{t.hit}</button>
                </div>
                </div>
        
    );

}

export default GameBoard