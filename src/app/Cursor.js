"use client";

import { useEffect } from "react";

export default function Cursor() {
    useEffect(() => {
        const cursorDot = document.querySelector(".cursor-dot");
        const cursorOutline = document.querySelector(".cursor-outline");

        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;

            // Move small dot instantly
            cursorDot.style.left = `${x}px`;
            cursorDot.style.top = `${y}px`;

            // Move outline smoothly
            cursorOutline.style.left = `${x}px`;
            cursorOutline.style.top = `${y}px`;
        };

        // Attach event listener
        window.addEventListener("mousemove", moveCursor);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
        </>
    );
}
