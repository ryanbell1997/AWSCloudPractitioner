import React from "react";

export default function Outpost(){
    return (
        <div>
            <h3>Outpost</h3>
            <p>Outpost is a physical hardware stack which lives in your on premise data center and runs AWS services.</p>
            <p>Basically you can run your own AWS instance on premise,.</p>
            <h4>Comes in two mediums:</h4>
            <ul>
                <li>Outpost Racks</li>
                <li>Outpost Servers</li>
            </ul>
            <h4>Key Points:</h4>
            <ul>
                <li>Low latency compute.</li>
                <li>Data residence, compliance reasons.</li>
                <li>Can be used as a migration step.</li>
            </ul>
        </div>
    )
}