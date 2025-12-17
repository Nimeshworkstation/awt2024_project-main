import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardModal from '../modals/CardModal';
import { flashcard } from '../../utils/types';
import { Button } from '@mui/material';

type props = {
  flashcard? : flashcard,
};

export default function FlashCard({flashcard = {id: '0', title: '', description: ''}} : props) {
  const [cardCreationModalStatus, setCardModalStatus] = useState(false);

  function handleOnClick() {
    // for some reason if the modal gets triggered by the card, the entire screen triggers the cards onClick
    // as such, we need to toggle here

    setCardModalStatus(!cardCreationModalStatus);
  }

  return (
    <Card id="flashcard" sx={{ maxWidth: 345 }} onClick={handleOnClick}>
        <CardModal
        openStatus={cardCreationModalStatus}
        setModalStatus={setCardModalStatus}
        enteredFrom={0}
        flashcard={flashcard}
      />
      <CardMedia
        component="img"
        alt="missing picture!"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {flashcard.title} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {flashcard.description}
        </Typography>
     </CardContent>
   </Card>
  );
}
