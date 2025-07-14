import React, { useState } from 'react'

function MainMenu(){
 const [menuOption, setmenuOption] = useState('menu');

 const renderMenu = () =>(
    <div className = "menu"> 
    <button onClick={() => setmenuOption('play')}>Start Game</button>
    <button onClick={() => setmenuOption('instructions')}>Instructions</button>
    <button onClick={() => setmenuOption('options')}>Options</button>
    </div>
 );

 const renderGame = () => (
<div>
    
</div>
 );

 const renderInstructions = () => (
    <div className='instructions'>
        <h2 className='insttitle'>Instructions</h2>
        <p className='inst'>
            🃏 Goal:
        Get a hand value as close to 21 as possible without going over, and beat the dealer’s hand.

        <p>🎮 Basic Gameplay:</p>
        Place a Bet
        Before cards are dealt, place your wager.

        Get Your Cards
        You and the dealer each get 2 cards.

        Your cards are face up.

        Dealer has one card face up, one face down (the “hole card”).

        <p>Know the Card Values

        2–10 = face value

        J, Q, K = 10

        Ace = 1 or 11 (whichever benefits your hand)</p>

        Player’s Turn
        You can:

        Hit: Take another card

        Stand: Keep your hand as-is

        Double Down: Double your bet, get one more card

        Split: If you have two of the same card, split into two hands (extra bet required)

        Keep hitting or standing until you’re satisfied or go bust (over 21).

        <p>Dealer’s Turn
        Dealer reveals hole card, then:

        Must hit if total is 16 or less

        Must stand on 17 or higher</p>

        🏆 Winning

        <p>You win if your total is higher than the dealer’s or dealer busts.

        Tie = Push (you get your bet back).

        Blackjack (Ace + 10-value card on first deal) usually pays 3:2.</p>
        </p>
        <button onClick={() => setmenuOption('menu')}>Return to Main Menu</button>
    </div>
 );

 const renderOptions = () => (
    <div className='options'>
        <p className='lang'>Choose your language</p>
        <button> English</button>
        <button> Brazillian Portuguese</button>
        <button onClick={() => setmenuOption('menu')}>Return to Main Menu</button>
   </div>
    
 );

 return(
    <div>
        {menuOption === 'menu' && renderMenu()}
        {menuOption === 'play' && renderGame()}
        {menuOption === 'instructions' && renderInstructions()}
        {menuOption === 'options' && renderOptions()}
    </div>
 );
}
export default MainMenu;