import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
    return (
        <div className="self-stretch bg-nlw-gradient pt-1 mt-8 rounded-lg overflow-hidden">
            <div className="flex flex-row items-center justify-between bg-[#2A2634] px-8 py-6">
                <div>
                    <strong className="block mb-2 text-white font-black text-2xl">Não encontrou seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> ainda?</strong>
                    <span className="text-zinc-300">Publique um anúncio para encontrar novos players</span>
                </div>
                <Dialog.Trigger className="flex items-center gap-3 justify-between py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-lg">
                    <MagnifyingGlassPlus weight="bold" size={24}/>                  
                    Publicar anúncio
                </Dialog.Trigger>          
            </div>
        </div>    
    )
}