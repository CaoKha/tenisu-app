import TextField from '@mui/material/TextField';
import { useStore } from "../lib/store";
import { Player } from "../lib/models";
// import { styled } from '@mui/system';

export const SearchBar = () => {
  const { players, setFilteredPlayers } = useStore()

  const filterPlayer = (uInput: string, players: Player[]) => {
    if (!uInput) {
      return players
    } else {
      return players.filter((player: Player) =>
        player.firstname.toLowerCase().includes(uInput) ||
        player.lastname.toLowerCase().includes(uInput))
    }
  }

  const inputHandler = (event: any) => {
    let filteredPlayers = filterPlayer(event.target.value.toLowerCase(), players)
    setFilteredPlayers(filteredPlayers)
  }

  // --causing bug to refresh input field--
  // const SearchBox = styled(TextField)(() => ({
  //   '& fieldset': {
  //     borderRadius: '15px',
  //   },
  // }));


  return (
    <>
      <TextField label="Rechercher un joueur" variant="outlined"
        onChange={inputHandler} fullWidth
        sx={{ borderRadius: '15px', backgroundColor: 'transparent' }}
        InputLabelProps={{
          style: { color: 'grey', fontFamily: 'Mulish Bold' }
        }} />
    </>
  )




}

