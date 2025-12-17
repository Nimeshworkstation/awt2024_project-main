import { Grid } from '@mui/material'
import React from 'react'

import ActionBox from './ActionBox';
export default function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <p> PLACEHOLDER STATS </p>
      </Grid>
      <Grid item xs={11}>
        <ActionBox />
      </Grid>
      <Grid item xs={1}>
        <p> PLACEHOLDER LATESTS TOP DECK/CARD</p>
      </Grid>
    </Grid>
  )
}
