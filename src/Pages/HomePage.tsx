import React from "react"
import { Card, Grid, Typography } from "@mui/material"
import Header from "../Components/Header"

const HomePage = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={3}>
        <Header />
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ p: 4 }}>
          <Typography color="text.secondary" variant="h3">
            Hi! Welcome to Wakabu!
          </Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HomePage
