import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";

const WordScramb = () => {

    const fruitsData = [
        { scrambled: "papaay", correct: "papaya" },
        { scrambled: "lmneo", correct: "lemon" },
        { scrambled: "ranosb", correct: "bonsar" },
        { scrambled: "anbnaa", correct: "banana" },
        { scrambled: "berryblack", correct: "blackberry" },
        { scrambled: "wetmraoenl", correct: "watermelon" },
        { scrambled: "wiki", correct: "kiwi" },
        { scrambled: "amngo", correct: "mango" },
        { scrambled: "lime", correct: "lime" },
        { scrambled: "rryehc", correct: "cherry" },
        { scrambled: "aveadoc", correct: "avocado" },
        { scrambled: "gerfpurit", correct: "grapefruit" },
        { scrambled: "lpepa", correct: "apple" },
        { scrambled: "rrbeay", correct: "berry" },
        { scrambled: "pcleah", correct: "peach" },
        { scrambled: "ignhppeaea", correct: "pineapple" },
        { scrambled: "tsareeb", correct: "beetras" },
        { scrambled: "yrrberlub", correct: "blueberry" },
        { scrambled: "llocauetno", correct: "cantaloupe" },
        { scrambled: "onagaer", correct: "orange" },
    ];

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    const checkAnswer = () => {
        const correctAnswer = fruitsData[currentQuestion].correct.toLowerCase();
        const userEnteredAnswer = userAnswer.toLowerCase();

        if (userEnteredAnswer === correctAnswer) {
            setIsCorrect(true);
            setScore(score + 1);
        } else {
            setIsCorrect(false);
            setScore(0);
        }

        setShowButtons(true);
    };

    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer("");
        setIsCorrect(false);
        setShowButtons(false);
    };

    const tryAgain = () => {
        setCurrentQuestion(Math.floor(Math.random() * fruitsData.length));
        setUserAnswer("");
        setIsCorrect(false);
        setShowButtons(false);
    };

    return (
        <Container>
            <Navbar />
            <div className="bg-slate-400 w-80 rounded-md shadow-md p-5">
                <h1 className="font-weight-bold text-xl text-center mb-6">Word Scramble</h1><br></br><br></br>
                <h3 className="text-sm text-center">Skor: <span className="font-weight-bold">{score}</span></h3>
                <div className="mt-2 d-flex flex-column gap-2 align-items-center">
                    <h2>Kata yang diacak</h2>
                    <h3 className="text-sm italic mt-2">
                        {fruitsData[currentQuestion].scrambled}
                    </h3>
                    <Form.Control
                        type="text"
                        className="bg-slate-200 w-8/12 rounded-md"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    />
                    <Button
                        onClick={checkAnswer}
                        className="bg-slate-600 font-weight-bold text-white p-2 hover:bg-slate-500 rounded-md text-sm mt-3"
                    >
                        Cek Jawaban
                    </Button>
                    {showButtons && (
                        <div className="text-center"> {/* Ganti dengan elemen yang sesuai */}
                            {isCorrect ? (
                                <div>
                                    <p className="text-success font-weight-bold">Benar!</p>
                                    {currentQuestion < fruitsData.length - 1 ? (
                                        <Button
                                            onClick={nextQuestion}
                                            className="bg-slate-600 font-weight-bold text-white p-2 hover:bg-slate-500 rounded-md text-sm mt-3"
                                        >
                                            Pertanyaan Selanjutnya
                                        </Button>
                                    ) : (
                                        <p className="text-primary font-weight-bold">Selesai !</p>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <p className="text-danger font-weight-bold">
                                        Salah! Jawaban yang benar adalah {" "}
                                        {fruitsData[currentQuestion].correct}
                                    </p>
                                    <Button
                                        onClick={tryAgain}
                                        className="bg-slate-600 font-weight-bold text-white p-2 hover:bg-slate-500 rounded-md text-sm mt-3"
                                    >
                                        Coba Lagi
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </Container>
    );
};

export default WordScramb;