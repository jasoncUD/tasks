import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="multipleChoiceQuestion">
                <Form.Label>Which state has no sales tax?</Form.Label>
                <Form.Select value={userAnswer} onChange={updateAnswer}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            The chosen answer {userAnswer} is
            {userAnswer === expectedAnswer ? "✔️" : "❌"}.
        </div>
    );
}
