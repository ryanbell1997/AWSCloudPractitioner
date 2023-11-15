import React from "react";

export default function Reliability(){
    return (
        <div style={{'padding':"1rem"}}>
            <h3>Reliability</h3>
            <p>Reliability is the practice of ensuring systems are maintained correctly and managed properly.</p>
            <ul>
                <li>Ensure the ability for systems to recover from failure.</li>
                <li>Implementing solutions which are testable to ensure code is reliable.</li>
                <li><b>Recovery</b> is key point for this pillar.</li>
                <li>Cross region replication - How does your workload cope in a natural disaster.</li>
            </ul>
        </div>
    )
}