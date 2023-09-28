import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Ayye
            </header>
            <p>
                Counter Component: <Counter></Counter>
                <p></p>
                Reveal Answer Component: <RevealAnswer></RevealAnswer>
            </p>
            <p>
                Change Question Type Component: <ChangeType></ChangeType>
            </p>
            <p>
                Start Attempt Component: <StartAttempt></StartAttempt>
            </p>
            <p>
                TwoDice Component: <TwoDice></TwoDice>
            </p>
            <p>
                CycleHoliday Component: <CycleHoliday></CycleHoliday>
            </p>
        </div>
    );
}

export default App;
