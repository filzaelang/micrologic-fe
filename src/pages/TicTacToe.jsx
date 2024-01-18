import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import "../css/TicTacToe.css"

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const renderSquare = (index) => {
        const squareValue = board[index];
        const squareClass = `square ${squareValue ? `player-${squareValue.toLowerCase()}` : ''}`;

        return (
            <div
                className={squareClass}
                onClick={() => handleClick(index)}
            >
                {squareValue}
            </div>
        );
    };

    const getStatus = () => {
        if (winner) {
            return `Winner: ${winner}`;
        } else {
            return `Next player: ${isXNext ? 'X' : 'O'}`;
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <Container>
            <Navbar />
            <Row className="justify-content-center mt-5">
                <Col xs={12} sm={8} md={6}>
                    <div className="status">{getStatus()}</div>
                    <div className="board">
                        {[0, 1, 2].map((row) => (
                            <Row key={row} className="board-row">
                                {[0, 1, 2].map((col) => (
                                    <Col key={col}>
                                        {renderSquare(row * 3 + col)}
                                    </Col>
                                ))}
                            </Row>
                        ))}
                    </div>
                    <div className="mt-3">
                        <Button onClick={resetGame} variant="primary">Reset Game</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

// Helper function to determine the winner
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
};

export default TicTacToe;
