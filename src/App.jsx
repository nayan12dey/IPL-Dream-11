
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from "./components/homepage/players/Players"
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'


const fetchPlayer = async () => {
  const response = await fetch("/data.json")
  return response.json();
}

function App() {

  const playersPromise = fetchPlayer();

  const [coin, setCoin] = useState(5000000);


  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>


      {/* react toastify */}
      <ToastContainer />

    </>
  )
}

export default App
