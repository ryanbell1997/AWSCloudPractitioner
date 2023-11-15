import React from "react";

export default function EC2(){
    return(
        <div style={{'padding':"1rem"}}>
            <h3>EC2</h3>
            <p>EC2 stands for elastic compute. EC2 is an IaaS offering, short for Infrastructure as a service.</p>
            <p>EC2 virtual machines only support Linux and Windows operating systems. <b>EC2 is a basic building block, and the foundation of many other AWS services</b></p>
            <p>With EC2 you configure storage/CPU/Network, etc.</p>
            <h4>Key Points:</h4>
            <ul>
                <li>EC2 instances can scale out horizontally with the use of ELB.</li>
                <li>Infrastucture as a service, customer has a lot of responsibility.</li>
                <li>Cost savings can be made with reserved instances, spot instances.</li>
                <li>Dedicated instances can be used for compliance reasons.</li>
                <li>Customer pays all the time the instance is running.</li>
                <li>Can be managed and deployed remotely.</li>
                <li><b>Customer looks after the guest OS</b></li>
            </ul>
        </div>
    )
}