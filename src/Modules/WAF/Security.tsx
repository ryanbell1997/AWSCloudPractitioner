import React from "react";

export default function Security(){
    return (
        <div style={{'padding':"1rem"}}>
            <h3>Security</h3>
            <p>Security focuses on ensuring best practice is maintained when it comes to securely running workloads in the cloud</p>
            <ul>
                <li>Security is never to be traded off.</li>
                <li>Maintaining good logging and traceability.</li>
                <li>Encrypting data as much as possible, both at rest and in transit</li>
                <li>Having suitable identity policies in place</li>
                <li>Adopting a zero trust policy is a good method.</li>
            </ul>
        </div>
    )
}