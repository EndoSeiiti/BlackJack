import { useState } from 'react'
import MainMenu  from './components/MainMenu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
  <>
    
    <MainMenu/>
  </>
  );
}




export default App
