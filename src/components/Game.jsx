import React, { useState } from "react";

export function createdeck(){
const decknum = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const decksuit = ['S', 'H', 'D', 'C'];


const deck = [];


for (let num of decknum){
    for (let suit of decksuit){
        deck.push({num,suit})
    }
}
return deck;


}

export function dealcards (deck){

    const playerhand = [];
    const dealerhand = [];

    while (playerhand.length < 2) {
        const i = Math.floor(Math.random()*deck.length);
        const [card] = deck.splice(i,1);
        playerhand.push(card);
    }

    while (dealerhand.length < 2) {
        const i = Math.floor(Math.random()*deck.length);
        const [card] = deck.splice(i,1);
        dealerhand.push(card);
    }
    return {playerhand, dealerhand};
}
export function round(){
  const deck = createdeck();
    console.log(deck);
    dealcards(deck);
    
    const playerhand = dealcards(deck);
    console.log(playerhand);
}

export function animatecard(animation){
    return <div className={`Dcard ${animation ? "animate-card":""}`}> </div>;
}



