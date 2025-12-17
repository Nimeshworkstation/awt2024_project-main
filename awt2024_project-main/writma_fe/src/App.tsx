import './App.css'

import Navbar from './components/Navbar.tsx';
import { Grid } from '@mui/material';

import AppRouter from './routes/AppRouter.tsx';

function App() {

  return (
    <Grid container spacing={1}>
      <Grid item id="header" xs={12}>
          <Navbar />
      </Grid>
      <Grid item id="body" xs={12}>
          <AppRouter />
      </Grid>
      <Grid item id="footer" xs={12}>
        <p> Footer! </p>
      </Grid>
   </Grid>
  
  )
}

export default App
