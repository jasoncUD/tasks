import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, setDice1Value] = useState<number>(1);
    const [dice2, setDice2Value] = useState<number>(2);

    function rollLeft(): void {
        setDice1Value(d6());
    }
    function rollRight(): void {
        setDice2Value(d6());
    }

    return (
        <div>
            <span data-testid="left-die">{dice1}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            <span data-testid="right-die">{dice2}</span>
            {dice1 === 1 && dice2 === 1 && <p>You Lose</p>}
            {dice1 === dice2 && dice2 !== 1 && <p>You Win</p>}
            {dice1 !== dice2 && <p></p>}
        </div>
    );
}
