import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userStatement, setUserStatement] = useState<string>("");

    function updateUserStatement(event: React.ChangeEvent<HTMLInputElement>) {
        setUserStatement(event.target.value);
    }
    return (
        <div>
            <h1>Check Answer: Who is the first president? </h1>
            <Form.Group controlId="formCheckAnswer">
                {""}
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={userStatement}
                    onChange={updateUserStatement}
                    placeholder="Write your answer here"
                ></Form.Control>
            </Form.Group>
            <div>{userStatement === expectedAnswer && <p>✔️</p>}</div>
            <div>{userStatement !== expectedAnswer && <p>❌</p>}</div>
        </div>
    );
}
