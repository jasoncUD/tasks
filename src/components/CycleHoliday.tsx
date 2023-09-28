/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎃" | "🎄" | "🦃" | "🪖" | "📜";
//Halloween, Christmas, Thanksgiving, Veteran's Day, Independence Day

export function CycleHoliday(): JSX.Element {
    const holidays: Holiday[] = ["🎄", "🎃", "📜", "🦃", "🪖"];

    const [holiday, setHoliday] = useState<Holiday>("🎄");
    function nextAlphabetHoliday(): void {
        const currentIndex = holidays.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % holidays.length;
        setHoliday(holidays[nextIndex]);
    }
    function nextYearHoliday(): void {
        switch (holiday) {
            case "🎃":
                setHoliday("🦃");
                break;
            case "🦃":
                setHoliday("🎄");
                break;
            case "🎄":
                setHoliday("🪖");
                break;
            case "🪖":
                setHoliday("📜");
                break;
            case "📜":
                setHoliday("🎃");
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <Button onClick={nextAlphabetHoliday}>Advance by Alphabet</Button>
            <Button onClick={nextYearHoliday}>Advance by Year</Button>
            <p>Holiday: {holiday}</p>
        </div>
    );
}
