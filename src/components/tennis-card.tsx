import { Player } from "../lib/models"
import { CardMedia, CardContent, Card, Grid, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../lib/store";


export const TennisCard = (player: Player) => {
  const { picture, firstname, lastname, data, country, id } = player
  const { setPlayer } = useStore()
  const { rank, points } = data
  const [cname, setCname] = useState<string>('')
  const navigate = useNavigate()
  const goToDetail = () => {
    setPlayer(player)
    navigate('/' + id)
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/alpha/" + country.code)
      .then(response => response.json())
      .then(cdatas => cdatas.map((cdata: any) => setCname(cdata.name.common)))
  }, [])


  return (
    <>
      <Card sx={{ display: 'flex', minWidth: '35rem', marginBottom: '1.5rem' }} onClick={goToDetail} >
        <Grid container>
          <Grid item>
            <CardMedia
              component="img"
              image={picture}
              sx={{
                height: '10rem',
                width: '15rem',
                objectFit: 'cover',
                objectPosition: '-2rem 0%'
              }}
            />
          </Grid>
          <Grid item>
            <CardContent sx={{ marginLeft: '-2rem' }}>
              <Typography component="div" variant="h5"
                sx={{
                  color: 'var(--orange)',
                  paddingTop: 1,
                  marginBottom: 3,
                  fontFamily: 'Montserrat Bold'
                }}>
                {firstname} {lastname}
              </Typography>
              <Grid container spacing={6}>
                <Grid item>
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
                <Grid item>
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
                <Grid item>
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
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}
