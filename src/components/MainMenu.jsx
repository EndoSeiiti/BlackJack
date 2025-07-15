import React, { useState } from 'react'
import translations from './Languages'
import GameBoard from './GameBoard'

function MainMenu(){

 const [language, setLanguage] = useState('en');

 const t = translations[language];

 const [menuOption, setmenuOption] = useState('menu');

 const renderMenu = () =>(
      
    <div className = "menu">
    <h1>BlackJack</h1>
    <button onClick={() => setmenuOption('play')}>{t.start}</button>
    <button onClick={() => setmenuOption('instructions')}>{t.instructions}</button>
    <button onClick={() => setmenuOption('options')}>{t.options}</button>
    </div>
 );

  const renderGame = () => (
<div>
   <GameBoard/>

</div>
 );

 const renderInstructions = () => (
    <div className='instructions'>
        <h2 className='insttitle'>{t.instructions}</h2>
        <p className='inst'>{t.inst}</p>
        <button onClick={() => setmenuOption('menu')}>{t.return}</button>
    </div>
 );

 const renderOptions = () => (
    <div className='options'>
        <p className='lang'>{t.chooseLanguage}</p>
        <button onClick={() => setLanguage('en')}> English</button>
        <button onClick={() => setLanguage('br')}> Portugues Brasileiro</button>
        <button onClick={() => setmenuOption('menu')}>{t.return}</button>
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