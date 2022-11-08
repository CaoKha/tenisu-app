import { createContext, ReactNode, useContext, useState } from 'react'
import { Player } from './models'

type storeContextType = {
  players: Player[]
  player: null | Player
  filteredPlayers: Player[]
  setPlayers: any
  setPlayer: any
  setFilteredPlayers: any
}

const storeContextDefault: storeContextType = {
  players: [],
  player: null,
  filteredPlayers: [],
  setPlayers: () => { },
  setPlayer: () => { },
  setFilteredPlayers: () => { },
}

const StoreContext = createContext<storeContextType>(storeContextDefault)

export function useStore() {
  return useContext(StoreContext)
}

type Props = {
  children: ReactNode
}

export function StoreProvider({ children }: Props) {
  const [players, setPlayers] = useState<any>([])
  const [player, setPlayer] = useState<any>(null)
  const [filteredPlayers, setFilteredPlayers] = useState<any>([])

  const defaultValue = {
    players,
    player,
    filteredPlayers,
    setPlayers,
    setPlayer,
    setFilteredPlayers,
  }

  return (
    <>
      <StoreContext.Provider value={defaultValue}>
        {children}
      </StoreContext.Provider>
    </>
  )
}
