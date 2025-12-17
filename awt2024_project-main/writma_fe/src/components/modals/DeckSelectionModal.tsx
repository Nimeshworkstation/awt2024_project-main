import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MultiSelectCheckmarks from '../MultiSelectCheckMarks';
import DeckModal from './DeckModal';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeckSelectionModal({ButtonText}) {
  const [open, setOpen] = useState(false);
  const [deckCreationModalStatus, setDeckModalStatus] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleDeckModalStatus() {
    setDeckModalStatus(true);
  }

  function handleCardAssignment() {
    return;
    // Should controll the Card Assignment to the Decks
    // which Decks are selected is currently stored in the MultiSelectCheckmarks Component
    // that Data needs to be accessed from this component
    // Good luck to you!
    // Hint: Props

  }

  return (
    <div>
      <Button onClick={handleOpen}>{ButtonText}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MultiSelectCheckmarks />
            </Grid>
            <Grid item xs={5}>
              <Button onClick={handleCardAssignment} >Assign to Deck</Button>
              <Button onClick={handleDeckModalStatus} >Create new Deck</Button>
            </Grid>
          </Grid>
          <DeckModal 
            openStatus={deckCreationModalStatus}
            setModalStatus={setDeckModalStatus}
            enteredFrom={0}
            />
        </Box>
      </Modal>
    </div>
  );
}
