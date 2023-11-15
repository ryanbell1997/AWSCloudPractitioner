import React from 'react';
import Container from '../../Coponents/Container';
import OperationalExcellence from './OperationExcellence';
import Security from './Security';
import Reliability from './Reliability';
import Performance from './Performance';
import CostOptimization from './CostOptimization';
import Sustainability from './Sustainability';

export default function WAF() {
    return (
        <Container>
            <h2>Well Architected Framework</h2>
            <div style={{'display':'grid', 'gridTemplateColumns':'repeat(3, 1fr)', 'gridTemplateRows':'repeat(2, 1fr)'}}>
                <OperationalExcellence />
                <Security />
                <Reliability />
                <Performance />
                <CostOptimization />
                <Sustainability />
            </div>
            <p>Remember <b>SPROCS</b>!!!, Security, performance, reliability, operation excellence, cost optimization, Sustainability!</p>

            <p>Customers can use the Well Architected Framework survey to get recommendations.</p>
            <p>To use the survey</p>
            <ol>
                <li>Define a workload and select a lens</li>
                <li>Conduct a Review</li>
                <li>Apply the best practices</li>
            </ol>
        </Container>
    )
}