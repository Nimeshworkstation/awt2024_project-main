import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeckModal from '../modals/DeckModal';
import { deck } from '../../utils/types';

type props = {
  deck? : deck,
};

export default function DeckCard({deck = {id: '0', title: 'empty deck', description: 'empty deck', cards: []}} : props) {
  const [deckCreationModalStatus, setDeckModalStatus] = useState(false);

  function handleOnClick() {
    // for some reason if the modal gets triggered by the card, the entire screen triggers the cards onClick
    // as such, we need to toggle here
    setDeckModalStatus(!deckCreationModalStatus);
  }

  return (
    <Card id="DeckCard" sx={{ maxWidth: 345 }} onClick={handleOnClick}>
      <CardMedia
        component="img"
        alt="missing picture!"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {deck.title} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {deck.description}
        </Typography>
      </CardContent>
      <DeckModal
        openStatus={deckCreationModalStatus}
        setModalStatus={setDeckModalStatus}
        enteredFrom={0}
        deck={deck}
      />
    </Card>
  );
}
