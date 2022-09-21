import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";

import logoImg from '../assets/logo-nlw-esports.svg';

function App() {
  return (
    <div className="flex flex-col items-center max-w-[1344px] mx-auto my-20">
      <img src={logoImg} alt="" />
      <h1 className="mt-20 text-white font-black text-6xl">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-14">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient pt-16 pb-4 px-4">
            <strong className="block text-white font-bold">Game</strong>
            <span className="text-zinc-300 font-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient pt-16 pb-4 px-4">
            <strong className="block text-white font-bold">Game</strong>
            <span className="text-zinc-300 font-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient pt-16 pb-4 px-4">
            <strong className="block text-white font-bold">Game</strong>
            <span className="text-zinc-300 font-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient pt-16 pb-4 px-4">
            <strong className="block text-white font-bold">Game</strong>
            <span className="text-zinc-300 font-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient pt-16 pb-4 px-4">
            <strong className="block text-white font-bold">Game</strong>
            <span className="text-zinc-300 font-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient pt-16 pb-4 px-4">
            <strong className="block text-white font-bold">Game</strong>
            <span className="text-zinc-300 font-sm">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="self-stretch bg-nlw-gradient pt-1 mt-8 rounded-lg overflow-hidden">
        <div className="flex flex-row items-center justify-between bg-[#2A2634] px-8 py-6">
          <div>
            <strong className="block mb-2 text-white font-black text-2xl">Não encontrou seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> ainda?</strong>
            <span className="text-zinc-300">Publique um anúncio para encontrar novos players</span>
          </div>
          <button className="flex items-center gap-3 justify-between py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-lg">
            <MagnifyingGlassPlus weight="bold" size={24}  />
            Publicar anúncio
          </button>          
        </div>
      </div>      
    </div>
  )
}

export default App
