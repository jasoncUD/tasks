import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [isInProgress, setIsInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setIsInProgress(!isInProgress);
        setNumAttempts(numAttempts - 1);
    }
    function stopQuiz(): void {
        setIsInProgress(!isInProgress);
    }
    function increaseAttempts(): void {
        setNumAttempts(numAttempts + 1);
    }
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={isInProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={increaseAttempts} disabled={isInProgress}>
                Mulligan
            </Button>
            <p>Number of Attempts remaining: {numAttempts}</p>
        </div>
    );
}
