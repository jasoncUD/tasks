import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>My name is Jason Chan</h1>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img
                src="https://stillmed.olympics.com/media/Images/OlympicOrg/News/2017/04/11/2017-04-11-Volleyball-thumbnail.jpg"
                alt="Volleyball Attack Picture"
            />
            <div>
                Ordered List:
                <ol>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ol>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                border: "4px solid red",
                                width: 80,
                                height: 100,
                                backgroundColor: "orange",
                                padding: "4px"
                            }}
                        >
                            First column
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                border: "4px solid red",
                                width: 80,
                                height: 100,
                                backgroundColor: "yellow",
                                padding: "4px"
                            }}
                        >
                            Second column
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
