import { Grid, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import TabComponent from '../components/tabs/TabComponent';

type Props = {}

export default function DeckBrowserPage({}: Props) {
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <TabComponent catalog={[{title: 'catalog1', description: 'missing'}]} backlog={[{title: 'backlog1', description: 'missing'},{title: 'backlog2', description: 'missing'}]}/>
      </Grid>
    </Grid>
  )
}
