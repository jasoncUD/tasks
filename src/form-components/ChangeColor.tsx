import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "black"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    return (
        <div>
            {COLORS.map((colorOption: string) => (
                <Form.Check
                    key={colorOption}
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    id="color-{colorOption}"
                    label={colorOption}
                    value={colorOption}
                    checked={color === colorOption}
                />
            ))}
            <h1 style={{ backgroundColor: color }} data-testid="colored-box">
                You have chosen {color}
            </h1>
        </div>
    );
}
