import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { CaretDown, Check, GameController } from "phosphor-react";
import { Input } from './Form/Input';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
    id: string;
    title: string;
}

export function CreateAdModal() {
    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)

    console.log(weekDays)
  
    useEffect(() => {
      axios('http://localhost:3333/games').then(response => {
        setGames(response.data)
      })
    }, [])

    async function handleCreateAd( event: FormEvent) {
        event.preventDefault();

        const formData =  new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        console.log(data)

        if (!data.name) {
            return
        }

        try {
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel
            })
            alert('Anúncio criado com sucesso')
        } catch (error) {
            console.log(error)
            alert('Erro ao criar anúncio')
        }
    }
    
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60" />

            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-black/25 w-[600px] bg-[#2A2634] text-white py-8 px-10">
                <Dialog.Title className="text-2xl font-black">Publique um anúncio</Dialog.Title>
                <form onSubmit={handleCreateAd} className="flex flex-col gap-4 mt-8">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">Qual o game?</label>
                        <select
                            id="game"
                            name="game"
                            placeholder="Selecione o game que deseja jogar"
                            className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
                            defaultValue=""
                        >
                            <option disabled value="">Selecione o game que deseja jogar</option>  
                            {
                                games.map(game => <option key={game.id} value={game.id}>{game.title}</option>)
                            }
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <Input id="name" name="name" type="text" placeholder="Como te chamam dentro do game?" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                            <Input type="number" id="yearsPlaying" name="yearsPlaying" placeholder="Tudo bem ser ZERO" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord">Qual seu discord?</label>
                            <Input type="text"  id="discord" name="discord" placeholder="usuario#0000" />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">Quando costuma jogar?</label>
                            <ToggleGroup.Root
                                type="multiple"                                
                                className="grid grid-cols-4 gap-2 text-sm"
                                value={weekDays}
                                onValueChange={setWeekDays}
                            >
                                
                                <ToggleGroup.Item
                                    value="0"
                                    title="Domingo"
                                    className={`rounded h-8 w-8 ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    D
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="1"
                                    title="Segunda"
                                    className={`rounded h-8 w-8 ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="2"
                                    title="Terça"
                                    className={`rounded h-8 w-8 ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    T
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="3"
                                    title="Quarta"
                                    className={`rounded h-8 w-8 ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="4"
                                    title="Quinta"
                                    className={`rounded h-8 w-8 ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="5"
                                    title="Sexta"
                                    className={`rounded h-8 w-8 ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="6"
                                    title="Sábado"
                                    className={`rounded h-8 w-8 ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>   
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hourStart">Qual horário do dia</label>
                            <div className="grid grid-cols-2 gap-2">
                                <Input id="hourStart" type="time" placeholder="De" />
                                <Input id="hourEnd" type="time" placeholder="Até" />
                            </div>
                        </div>
                    </div>

                    <label className="flex items-center gap-2 text-sm mt-2">
                        <Checkbox.Root
                            checked={useVoiceChannel} 
                            onCheckedChange={(checked) => {
                                if (checked === true) {
                                    setUseVoiceChannel(true)
                                } else {
                                    setUseVoiceChannel(false)
                                }
                            }}  
                            className='w-6 h-6 p-1 rounded bg-zinc-900'>
                            <Checkbox.Indicator>
                                <Check className='w-4 h-4 text-emerald-400' />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </label>

                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close className="bg-zinc-500 font-semibold rounded-md h-12 px-5 hover:bg-zinc-600">Cancelar</Dialog.Close>
                        <button
                            type="submit"
                            className="flex items-center gap-3 bg-violet-500 font-semibold rounded-md h-12 px-5 hover:bg-violet-600"
                        >
                            <GameController size={24} />
                            Encontrar Duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}