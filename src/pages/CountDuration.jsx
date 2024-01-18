import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import "../css/Background.css"

const CountDuration = () => {

    const [targetDate, setTargetDate] = useState("");
    const [counting, setCounting] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleStart = () => {
        if (!targetDate) {
            alert("Date must be filled in");
        } else {
            setCounting(true);
        }
    };

    const handleReset = () => {
        setCounting(false);
        setTargetDate("");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    useEffect(() => {
        let interval;

        const calculateTime = () => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const distance = target - now;

            const calcDays = Math.floor(distance / (1000 * 60 * 60 * 24));
            const calcHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const calcMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const calcSeconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(calcDays);
            setHours(calcHours);
            setMinutes(calcMinutes);
            setSeconds(calcSeconds);

            if (distance < 0) {
                clearInterval(interval);
                setCounting(false);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        };

        if (counting) {
            interval = setInterval(calculateTime, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [counting, targetDate]);

    return (
        <Container>
            <Navbar />
            <div className="d-flex flex-column align-items-center">
                <div className="bg-blue w-80 rounded-md shadow-md shadow-secondary">
                    <div className="p-5">
                        <h1 className="font-weight-bold text-xl text-center mb-6">Countdown Time</h1>
                        <div className="mt-2 d-flex flex-column gap-2 align-items-center">
                            <h2 className="font-weight-light">Enter the Target Date and Time:</h2>
                            <input
                                type="datetime-local"
                                className="bg-light w-8/12 rounded-md"
                                value={targetDate}
                                onChange={(e) => setTargetDate(e.target.value)}
                            />
                            <div className="mt-5 d-flex justify-content-center gap-3">
                                <button
                                    className="bg-primary font-weight-bold text-white p-2 hover-bg-secondary rounded-md text-sm"
                                    onClick={handleStart}
                                >
                                    {counting ? "Count..." : "Start"}
                                </button>
                                {counting && (
                                    <button
                                        className="bg-primary font-weight-bold text-white p-2 rounded-md hover-bg-secondary text-sm"
                                        onClick={handleReset}
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>
                            <h3 className="text-sm">Countdown:</h3>
                            <h4 className="text-sm font-weight-light">
                                {counting
                                    ? `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`
                                    : "Mulai menghitung"}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CountDuration;