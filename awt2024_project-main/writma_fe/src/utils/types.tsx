type flashcard =  {
    id: string,
    title: string,
    description: string,
}

type deck = {
    id: string,
    title: string,
    description: string,
    cards: flashcard[],
}

export type {
    flashcard,
    deck
}
