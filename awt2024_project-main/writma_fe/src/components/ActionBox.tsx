import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

import DeckCard from './cards/DeckCard';
import { PrioList } from './PrioList';
import SplitButton from './buttons/SplitButton';
import DeckModal from './modals/DeckModal';
import CardModal from './modals/CardModal';

export default function ActionBox() {
    const [deckCreationModalStatus, setDeckModalStatus] = useState(false);
    const [cardCreationModalStatus, setCardModalStatus] = useState(false);

    return (
        <>
        <Grid container spacing={1}>
            <Button component={Link} to={`/decks`}>Browse Decks</Button>
            <SplitButton
                toggleDeckModal={setDeckModalStatus} 
                toggleCardModal={setCardModalStatus}
            />
            <Grid item xs={12}>
                <DeckCard />
            </Grid>
            <Grid item xs={12}>
                <PrioList />
            </Grid>
        </Grid>
        <DeckModal 
            openStatus={deckCreationModalStatus}
            setModalStatus={setDeckModalStatus}
            enteredFrom={1}
        />
        <CardModal 
            openStatus={cardCreationModalStatus}
            setModalStatus={setCardModalStatus}
            enteredFrom={1}
        />
        </>
    )
}
