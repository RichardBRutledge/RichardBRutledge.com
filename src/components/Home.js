import React from 'react'
import styled from 'styled-components';
import { Row, Col, Card } from 'react-bootstrap'

export default function Home() {
    return (
        <HomeDisplay>
            <div className='container'>
                <Row className='landing-row'>
                    <Col sm={12} >
                        <img
                            src='./Img/good boys .jpg'
                            alt='goodboys'
                        />
                        <Card className='card-back'> {/*Global CSS*/}
                            <h1>Web Developer</h1>
                            <h4>HTML | CSS | JavaScript | React | Redux | Git | Node.js</h4>

                            <div className='social-links'>
                                <a href='/google' target='_blank' rel='noopener noreferrer'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>
                                <a href='/google' target='_blank' rel='noopener noreferrer'>
                                    <i className='fa fa-github-square' aria-hidden='true' />
                                </a>
                            </div>
                        </Card>
                    </Col>
                </Row>

            </div>
        </HomeDisplay>
    )
}

const HomeDisplay = styled.div`
  .container {
      width: 100%;
      margin: auto;
      
  }  
    img {
        margin-top: 3rem;
        margin-bottom: 3rem;
        border: 1rem solid rgba(0, 0, 0, .5);
        -webkit-background-clip: padding-box; /* for Safari */
        background-clip: padding-box;
        border-radius: 100px;
    }

    .landing-row {
        width: 75%;
        margin: auto;
    }

    .card-back h1 {
         padding-bottom: 2rem;
    }
    .social-links {
        display: flex;
        justify-content: space-between;
        width: 50%;
        margin: auto;
    }
    .social-links i {
        color: white;
        padding-top: 2rem;
        font-size: 3rem
    }
`;