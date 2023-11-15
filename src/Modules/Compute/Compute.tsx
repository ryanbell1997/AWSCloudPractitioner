import React from "react";
import Container from "../../Coponents/Container";
import EC2 from "./EC2";
import Lambda from "./Lambda";
import AWSBatch from "./AWSBatch";
import Beanstalk from "./Beanstalk";
import LightSail from "./Lightsail";
import Outpost from "./Outpost";

export default function Compute(){
    return(
        <Container>
            <h2>Compute</h2>
            <div style={{'display':'grid', 'gridTemplateColumns':'repeat(2, 1fr)', 'gridTemplateRows':'repeat(2, 1fr)'}}>
                <EC2 />
                <Lambda />
                <LightSail />
                <Outpost />
            </div>
            <h3>Compute Orchestration</h3>
            <div style={{'display':'grid', 'gridTemplateColumns':'repeat(2, 1fr)', 'gridTemplateRows':'1fr'}}>
                <AWSBatch />
                <Beanstalk />
            </div>
        </Container>
    )
}