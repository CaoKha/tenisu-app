import { useEffect } from "react"
import { useStore } from "../lib/store"
import { Player } from "../lib/models";
import { TennisCard } from "../components/tennis-card";
import { SearchBar } from "../components/search-bar";
import { Grid } from '@mui/material';

export const HomePage = () => {
  const {
    setPlayers,
    filteredPlayers,
    setFilteredPlayers,
  } = useStore()


  useEffect(() => {
    fetch("https://data.latelier.co/training/tennis_stats/headtohead.json").then(
      response => response.json()
    ).then(data => {
      setPlayers(data.players)
      setFilteredPlayers(data.players)
    })
  }, [])

  return (
    <>
      <Grid container direction="column" spacing={9} sx={{ 
        marginLeft: 0, 
        marginRight: 5, 
        paddingLeft:0,
        paddingRight: 10, 
        marginTop: 3,
        width: '700px',

      }}>
        <Grid item>
          <SearchBar />
        </Grid>
        <Grid item>
          {filteredPlayers.map((player: Player) =>
            <TennisCard {...player} key={player.id} />
          )}
        </Grid>
      </Grid>
    </>
  )

}
