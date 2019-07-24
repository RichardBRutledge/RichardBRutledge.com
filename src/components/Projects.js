import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
export default function Projects() {
    return (
        <ProjectDisplay>
            <div>
                <Row>
                    <Col md={4}>
                        <Card className='card-back'>
                            <Card.Img variant='top' src='www.google.com' />
                            <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Card.Text>A general description of the project</Card.Text>
                                <Button variant='light'>Go</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='card-back'>
                            <Card.Img variant='top' src='www.google.com' />
                            <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Card.Text>A general description of the project</Card.Text>
                                <Button variant='light'>Go</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='card-back'>
                            <Card.Img variant='top' src='www.google.com' />
                            <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Card.Text>A general description of the project</Card.Text>
                                <Button variant='light'>Go</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </ProjectDisplay>
    )
}

const ProjectDisplay = styled.div`
    Card {
        Color: white;
    }
`;
