import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
interface BoxColorProps {
    setIndexColor: (newIndex: number) => void;
    indexColor: number;
}

function ChangeColor(props: BoxColorProps): JSX.Element {
    return (
        <Button
            onClick={() =>
                props.setIndexColor((1 + props.indexColor) % COLORS.length)
            }
        >
            Next Color
        </Button>
    );
}

function ColorPreview(props: BoxColorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[props.indexColor],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setIndexColor={setColorIndex}
                    indexColor={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    setIndexColor={setColorIndex}
                    indexColor={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
