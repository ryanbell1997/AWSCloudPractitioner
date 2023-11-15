import React from 'react';
import Container from '../../Coponents/Container';
import ECS from './ECS';
import EKS from './EKS';
import ECR from './ECR';

export default function Containers() {
    return (
        <Container>
            <h3>Containers</h3>
            <div style={{'display':'grid', 'gridTemplateColumns':'repeat(2, 1fr)', 'gridTemplateRows':'repeat(2, 1fr)'}}>
                <ECS />
                <EKS />
                <ECR />
            </div>
        </Container>
    )
}