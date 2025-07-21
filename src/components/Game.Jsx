import React from "react";

const decknum = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const decksuit = ['♠', '♥', '♦', '♣'];


const deck = [];
const playerhand = [];
const dealerhand = [];

for (let num of decknum){
    for (let suit of decksuit){
        deck.push({num,suit})
    }
}

function dealcards (playerhand, dealerhand, deck){

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
}



