import React from "react";

export default function OperationalExcellence(){
    return (
        <div style={{'padding':"1rem"}}>
            <h3>Operation Excellence</h3>
            <p>Operational Excellence is a pillar of the well architected framework which focuses on <b>how you run in the cloud</b>.</p>
            <ul>
                <li>Focuses on running and monitoring systems to deliver business value, and continually improving processes and procedures.</li>
                <li>Includes making frequent, small, reversible changes, and being able to leverage experimentation and learn from failures.</li>
                <li>Also includes anticipating failure, and mitigating risk.</li>
                <li>Reviewing production incidents and mitigating the issues in the future.</li>
            </ul>
        </div>
    )
}