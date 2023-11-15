import React from "react";

export default function ECS(){
    return (
        <div>
            <h3>ECS</h3>
            <p>ECS stands for Elastic Container Service. It is a fully managed container orchestration service.</p>
            <h4>Key points: </h4>
            <ul>
                <li>Allows you to runand manage docker containers.</li>
                <li>Extremely scalable offering.</li>
                <li>Integrates with other services like ELB, IAM, and CloudWatch</li>
                <li>Define how a docker container behaves from a networking and storage perspective.</li>
                <li>Manages long running containers, ensuring consistent uptime.</li>
                <li>Offers Fargate, which  basically abstracts the underlying infrastructure.</li>
            </ul>

        </div>
    )
}