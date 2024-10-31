import React from "react";
import "./Line.css";
import { line, curveCardinal } from "d3-shape";

const data = [
    [25, 20],
    [50, 25],
    [75, 50],
    [95, 80],
    [125, 90],
    [150, 90],
    [180, 90]
];

const Line = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scale the data to fit the viewport
    const scaledData = data.map(([x, y]) => [
        (x / 200) * width,
        (y / 100) * height
    ]);

    const pathData = line()
        .curve(curveCardinal)
        .x(d => d[0])
        .y(d => d[1])(scaledData);

    return (
        <div className="line-container">
            <svg className="line" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
                <path d={pathData} stroke="black" strokeWidth="2" fill="none" />
            </svg>
        </div>
    );
}

export default Line;
