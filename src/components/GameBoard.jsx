import React, { useEffect, useState } from "react";
import  '../App.css';
import {dealcards, createdeck, getSuitSymbol, getCardValue, getCardValue2 } from "./Game.jsx";


function GameBoard(){
    const [playerhand, setPlayerHand] = useState([]);
    const [dealerhand, setDealerHand] = useState([]);
    const [dealerCover, setDealerCover] = useState();
    const [deck, setDeck] = useState ();
    const [standmessage, setStandMessage] = useState("");
    
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
        setPlayerHand(prev =>[...prev, card])
        setDeck([...deck])

    }

    const handlestand = (playerhand,dealerhand) => {
        const  playerscore = getCardValue(playerhand);
        const dealerscore = getCardValue2(dealerhand);

        if (playerscore > 21) setStandMessage("You busted!");
        else if (playerscore > dealerscore) setStandMessage ("You Win!");
        else if (dealerscore > playerscore) setStandMessage ("You Lose!");
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
                    <button onClick = {handledeal}>DEAL CARDS</button>
                </div>
                <div className="null"></div>
                <div className="Stand">
                    <button onClick={()=> {setDealerCover(false)
                         handlestand(playerhand, dealerhand);
                    
                         }}>STAND</button>
                         
                </div>
                {standmessage && <div className="message" >{standmessage}</div>}
                <div className="null">
                </div>
                <div className="null"></div>
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
                    <button onClick={handlehit}>HIT</button>
                    
                </div>

                </div>
        
    );

}


export default GameBoard