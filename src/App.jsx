import { useState } from 'react'
import MainMenu  from './components/MainMenu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
  <>
    <h1>BlackJack</h1>
    <MainMenu/>
  </>
  );
}




export default App
