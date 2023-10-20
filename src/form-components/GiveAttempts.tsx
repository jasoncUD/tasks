import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<string>("");
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    function decreaseNumToZero() {
        if (numAttempts > 1) {
            setNumAttempts(numAttempts - 1);
        } else if (numAttempts === 1) {
            setNumAttempts(numAttempts - 1);
            setButtonDisabled(true);
        } else {
            setButtonDisabled(true);
        }
    }

    function increaseNumAttempts() {
        if (!Number.isNaN(parseInt(reqAttempts))) {
            setNumAttempts(numAttempts + parseInt(reqAttempts));
            if (numAttempts + parseInt(reqAttempts) > 0) {
                setButtonDisabled(false);
            }
        }
    }

    return (
        <div>
            <Form.Group controlId="formReqAttempts">
                <Form.Label>Input the amount of attempts you want:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    placeholder="Input a number here"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setReqAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={decreaseNumToZero} disabled={isButtonDisabled}>
                use
            </Button>
            <Button onClick={increaseNumAttempts}>gain</Button>
            <h3>Number of Attempts Remaining: {numAttempts}</h3>
        </div>
    );
}
