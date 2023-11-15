import React from "react";

export default function Lambda() {
    return (
        <div style={{'padding':"1rem"}}>
            <h3>Lambda</h3>
            <p>Lambda is the serverless offering by AWS. Customers can define functions which can be triggered by various events.</p>
            <p>Lambda is fully managed, with various different language runtimes.</p>
            <h4>Key Points:</h4>
            <ul>
                <li>Billed by processing second, pay as you use model.</li>
                <li>Very scalable and responsive to load.</li>
                <li>Can be triggered through HTTP, Events, SQS Messages and more.</li>
                <li>Fully managed service by AWS.</li>
            </ul>
        </div>
    )
}