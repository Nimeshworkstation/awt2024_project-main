import React from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import DeckCard from './cards/DeckCard';
import { Grid } from '@mui/material';

const decks = [
  {
    id: '1',
    title: 'Deck 1',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    cards: [],
  },
  {
    id: '2',
    title: 'Deck 2',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
    cards: [],
  },
  {
    id: '3',
    title: 'Deck 3',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    cards: [],
  },
];

export function PrioList() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = decks.length;
  const placeHolderDeck1 = {id: '-1', title: "Do you have enough decks?", description: "Time for more!", cards: []}
  const placeHolderDeck2 = {id: '-2', title: "You can create more!", description: "Just click create a deck!", cards: []}

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={4}>
          <DeckCard deck={decks[activeStep]} />
        </Grid>
        <Grid item xs={4}>
          <DeckCard deck={decks[activeStep+1] ? decks[activeStep+1] : placeHolderDeck1} />
        </Grid>
        <Grid item xs={4}>
          <DeckCard deck={decks[activeStep+2] ? decks[activeStep+2] : placeHolderDeck2} />
        </Grid>
      </Grid>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
