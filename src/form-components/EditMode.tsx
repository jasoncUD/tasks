import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit Mode"
                checked={isEdit}
                onChange={updateEdit}
            />

            {isEdit && (
                <Form.Group controlId="formStudentName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={studentName}
                        onChange={updateName}
                        disabled={!isEdit}
                    />
                </Form.Group>
            )}

            {isEdit && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={isStudent}
                    disabled={!isEdit}
                    onChange={updateIsStudent}
                />
            )}

            <h3>
                {studentName} is {isStudent ? "a student" : "not a student"}.
            </h3>
        </div>
    );
}
