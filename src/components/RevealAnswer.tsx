import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visibleAnswer, setShowAnswer] = useState<boolean>(false);
    function flipShowAnswer(): void {
        setShowAnswer(!visibleAnswer);
    }
    return (
        <div>
            <Button onClick={flipShowAnswer}>Reveal Answer</Button>
            {visibleAnswer && <div>42</div>}
        </div>
    );
}
