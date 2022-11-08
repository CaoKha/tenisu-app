import { useStore } from "../lib/store"
import { CardContent, Card, CardMedia, Typography, Grid, Box, Button } from '@mui/material'
import { useEffect, useState } from "react"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNavigate } from "react-router-dom";
export const DetailPage = () => {
  const {
    player,
  } = useStore()
  const [cname, setCname] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    if (player)
      fetch("https://restcountries.com/v3.1/alpha/" + player.country.code)
        .then(response => response.json())
        .then(cdatas => cdatas.map((cdata: any) => setCname(cdata.name.common)))
  }, [])

  const handleImageError = (e: any) => {
    e.target.onerror = null;
    // e.target.style.display = 'none'
    e.target.src = "src/assets/images/usa.jpg"
  }

  const goToHomePage = () => {
    navigate('/')
  }

  if (player) {
    const { data, } = player
    const { points, rank, age, height, weight } = data
    return (
      <>
        <Button sx={{  position: 'absolute', top: '2rem', right: '50%'}} onClick={goToHomePage} >
        <CloseRoundedIcon sx={{ color: 'black', objectFit:'cover'}}/>
        </Button>
        <Box sx={{ display: 'block', margin: 'auto' }}>
          <Card sx={{ minWidth: '75rem', maxHeight: '43rem', display: 'flex', margin: '5rem 3rem 0 3rem' }}>
            <CardMedia
              component="img"
              image={player.picture}
              sx={{
                display: 'block',
                width: '25rem',
                height: '50rem',
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ marginRight: '-2rem' }}>
              <Typography component="div" variant="h1" sx={{
                fontFamily: "Montserrat Bold",
                color: "var(--orange)",
                marginLeft: "-20%"
              }}>
                {player.firstname} {player.lastname}
              </Typography>
              <Grid container columnSpacing={12} sx={{ marginTop: 10, marginRight: 10 }} rowSpacing={6}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      fontFamily: 'Mulish Bold',
                      color: 'var(--black)',
                      opacity: '30%'
                    }}>
                    RANK
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat Bold',
                      color: 'var(--orange)'
                    }}
                  >
                    #{rank}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{
                    fontFamily: 'Mulish Bold',
                    color: 'var(--black)',
                    opacity: '30%'
                  }}>
                    POINTS
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat Bold',
                      color: 'var(--orange)'
                    }}>
                    {points}
                  </Typography>
                </Grid>
                <Grid item xs={4} >
                  <Typography sx={{
                    fontFamily: 'Mulish Bold',
                    color: 'var(--black)',
                    opacity: '30%'
                  }}>
                    COUNTRY
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat Bold',
                      color: 'var(--orange)'
                    }}
                  >
                    {cname}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{
                    fontFamily: 'Mulish Bold',
                    color: 'var(--black)',
                    opacity: '30%'
                  }}>
                    BIRTHDAY
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat Bold',
                      color: 'var(--orange)'
                    }}>

                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography sx={{
                    fontFamily: 'Mulish Bold',
                    color: 'var(--black)',
                    opacity: '30%'
                  }}>
                    AGE
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat Bold',
                      color: 'var(--orange)'
                    }}
                  >
                    {age}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{
                    fontFamily: 'Mulish Bold',
                    color: 'var(--black)',
                    opacity: '30%'
                  }}>
                    WEIGHT
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat Bold',
                      color: 'var(--orange)'
                    }}
                  >
                    {weight / 1000} kg
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{
                    fontFamily: 'Mulish Bold',
                    color: 'var(--black)',
                    opacity: '30%'
                  }}>
                    HEIGHT
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat Bold',
                      color: 'var(--orange)'
                    }}
                  >
                    {height} cm
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <Grid container direction="column" alignItems="center" spacing={4}>
              <Grid item>
                <CardMedia
                  component="img"
                  image={player.country.picture}
                  sx={{
                    display: 'flex',
                    width: '20rem',
                    height: '10rem',
                    objectFit: 'scale-down',
                    objectPosition: '50% 50%',
                    paddingTop: 5,
                  }}
                  onError = {handleImageError}
                />
              </Grid>
              <Grid item>
                <Typography variant="h2" sx={{ color: 'grey' }}>
                  {player.country.code}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </>
    )
  }
  else return (
    <p> You have refreshed the page! Please go back to homepage. </p>
  )

}
