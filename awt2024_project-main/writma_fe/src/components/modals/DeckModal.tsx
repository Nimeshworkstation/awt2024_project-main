import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid } from '@mui/material';
import FlashCard from '../cards/FlashCard';
import { Link } from 'react-router-dom';
import { deck } from '../../utils/types';

const style = {
  position: 'absolute' as const,
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type props = {
  openStatus : boolean,
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>,
  enteredFrom : number, // enteredFrom will give us Edit vs View mode. 0 shall be View mode, 1 shall be Edit mode
  deck? : deck
};

export default function DeckModal({openStatus, setModalStatus, enteredFrom, deck = {id: '', title: '', description : '', cards: []}} : props) {
  const [componentState, setComponentState] = useState(enteredFrom);
  const handleClose = () => {
    setModalStatus(false);
  };

  const placeholderFlashCard = {id: '0', title: "Empty Card", description: "Empty Card"}

  function ViewGrid() {
    if (componentState == 0) {
      return (
        [...Array(9)].map((item, id) => (
                <Grid key={id} item xs={4}>
                  <FlashCard key={id} flashcard={placeholderFlashCard} />
                </Grid>
        ))
        // TODO: deck.cards[0] needs to be replaced with either random, or last card that was seen in a deck
        // && <Button component={Link} to={`/reader/${deck.id}/${deck.cards[0].id}`}></Button>
      )
    } else {
      return;
    }
  }

  return (
    <div>
      <Modal
        open={openStatus}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={12}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {deck.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {deck.description}
              </Typography>
            </Grid>
            <ViewGrid /> 
         </Grid>
       </Box>
      </Modal>
    </div>
  );
}
