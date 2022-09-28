import { useEffect, useState } from "react";

import "./styles/main.css";

import logoImg from './assets/logo-nlw-esports.svg';

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className="flex flex-col items-center max-w-[1344px] mx-auto my-20">
      <img src={logoImg} alt="" />
      <h1 className="mt-20 text-white font-black text-6xl">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-14">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}
        
      </div>
      <Dialog.Root>
        <CreateAdModal/> 
        <CreateAdBanner/> 
      </Dialog.Root>
    </div>
  )
}

export default App
