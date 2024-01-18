import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";

const MatchingCard = () => {
    const animals = ["🐶", "🐹", "🐰", "🐺", "🐨", "🐼", "🦊", "🦁"];
    const [cards, setCards] = useState([]);
    const [flippedIndexes, setFlippedIndexes] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [isGameWon, setIsGameWon] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    const startGame = () => {
        const shuffledCards = shuffle([...animals, ...animals]);
        setCards(shuffledCards);
        setFlippedIndexes([]);
        setMatchedPairs([]);
        setIsGameWon(false);
        setIsGameStarted(true);
    };

    const handleCardClick = (index) => {
        if (!isGameStarted) {
            return;
        }

        if (flippedIndexes.length === 2 || flippedIndexes.includes(index) || matchedPairs.includes(cards[index])) {
            return;
        }

        const newFlippedIndexes = [...flippedIndexes, index];
        setFlippedIndexes(newFlippedIndexes);

        if (newFlippedIndexes.length === 2) {
            setTimeout(() => checkMatch(newFlippedIndexes), 1000);
        }
    };

    const checkMatch = (flippedIndexes) => {
        const [firstIndex, secondIndex] = flippedIndexes;
        const isMatch = cards[firstIndex] === cards[secondIndex];

        if (isMatch) {
            setMatchedPairs([...matchedPairs, cards[firstIndex]]);
            if (matchedPairs.length === animals.length - 1) {
                setIsGameWon(true);
            }
        }

        setTimeout(() => setFlippedIndexes([]), 500);
    };

    const handleTryAgain = () => {
        setIsGameStarted(false);
        startGame();
    };

    const renderCards = () => {
        return (
            <Row>
                {cards.map((card, index) => (
                    <Col key={index} xs={3} className="mb-3">
                        <Button
                            className={`w-100 h-100 bg-primary rounded-md shadow-md shadow-primary ${flippedIndexes.includes(index) || matchedPairs.includes(card) ? 'text-white' : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            {flippedIndexes.includes(index) || matchedPairs.includes(card) ? card : '?'}
                        </Button>
                    </Col>
                ))}
            </Row>
        );
    };

    return (
        <Container>
            <Navbar />
            <div className="d-flex flex-column align-items-center">
                <div>
                    <div className="p-5">
                        <h1 className="font-weight-bold text-xl text-center mb-2">Matching Game</h1>
                        <br></br>
                        {renderCards()}
                        {!isGameStarted && (
                            <div className="d-flex flex-column align-items-center mt-5 gap-3">
                                <Button
                                    className="font-weight-bold text-white p-2 rounded-md hover-bg-primary text-sm"
                                    onClick={startGame}
                                >
                                    Start Game
                                </Button>
                            </div>
                        )}
                        {isGameWon && (
                            <div className="d-flex flex-column align-items-center mt-5 gap-3">
                                <h3 className="font-weight-bold text-primary">You Win!</h3>
                                <Button
                                    className="font-weight-bold text-white p-2 rounded-md hover-bg-primary text-sm"
                                    onClick={handleTryAgain}
                                >
                                    Try Again
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MatchingCard;
