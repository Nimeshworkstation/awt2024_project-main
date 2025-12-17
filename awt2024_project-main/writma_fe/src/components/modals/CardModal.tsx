import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeckSelectionModal from './DeckSelectionModal';
import { Grid } from '@mui/material';
import { flashcard } from '../../utils/types';

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

type props = {
  openStatus: boolean,
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>,
  enteredFrom: number, // enteredFrom will give us Edit vs View mode. 0 shall be View mode, 1 shall be Edit mode
  flashcard?: flashcard,
};

// enteredFrom will give us Edit vs View mode. 0 shall be View mode, 1 shall be Edit mode
export default function CardModal({openStatus, setModalStatus, enteredFrom, flashcard = {id: '', title: '', description : ''}} : props) {
  const [componentState, setComponentState] = useState(enteredFrom);
  const handleClose = () => {
    setModalStatus(false);
  };

  function SaveButton() {
    if (componentState==1) {
      return (
         <DeckSelectionModal ButtonText={"Save Card"}/>
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
                {flashcard.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {flashcard.description}
              </Typography>
            </Grid>
            <SaveButton />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
