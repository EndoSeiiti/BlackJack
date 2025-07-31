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

export function addCard (deck, playerhand){
        const i = Math.floor(Math.random()*deck.length);
        const [card] = deck.splice(i,1);
        playerhand.push(card);
        return {playerhand};

}



export function getSuitSymbol(suit) {
  switch (suit) {
    case "H": return "♥";
    case "D": return "♦";
    case "S": return "♠";
    case "C": return "♣";
    default: return "?";
  }
}

export function getCardValue(playerhand){
    let aces = 0
    let total = 0
    for (const card of playerhand){
        if (["K", "Q", "J"].includes (card.num)){
            total += 10;}
            else if (card.num ==="A"){
                total += 11;
                aces += 1;
            } 
            else {
                total += parseInt(card.num)
            }
    }

    while (total > 21 && aces > 0){
        total -=10;
        aces --;
    }
    return total;
}

export function getCardValue2(dealerhand){
    let Daces = 0
    let Dtotal = 0
    for (const card of dealerhand){
        if (["K", "Q", "J"].includes(card.num)){
            Dtotal +=10;}
            else if (card.num ==="A"){
                Dtotal += 11;
                Daces += 1;
            } 
            else {
                Dtotal += parseInt(card.num)
            }
    }

    while (Dtotal > 21 && Daces > 0){
        Dtotal -=10;
        Daces --;
    }
    return Dtotal;
}



