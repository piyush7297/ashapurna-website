import React from 'react'
import Header from '../Common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Residential() {
  return (
    <>
    <Header/>
    <Container fluid className='bg-main'>
          <Container>
            <Row>
              <Col lg='12'>
                <div class="d-flex align-items-center justify-content-center flex-column">
                  <span class="text-white fs-19 mb-2">HOME / PROJECTS</span>
                  <span class="h2 golden-color text-center fw-bold">Ashapurna Projects</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid style={{padding:'80px 0'}}>
          <Container>
            <Row>
              <Col lg='12'>
                <h2 class="h2 blue-color fw-semibold text-center" style={{marginBottom:'30px'}}>Residential Projects</h2>
                  <div class="nav-buttons py-lg-3">
                    <ul class="list-unstyled text-center">
                      <li class="mb-lg-3 mx-2 d-inline-block">
                          <Link to={'/residential'} class="text-decoration-none text-color d-flex align-items-center px-2 active">Residential</Link>
                      </li>
                      <li class="mb-lg-3 mx-2 d-inline-block">
                        <Link to={'/residential'} class="text-decoration-none text-color d-flex align-items-center px-2">Commercial</Link>
                      </li>
                      <li class="mb-lg-3 mx-2 d-inline-block">
                        <Link to={'/residential'} class="text-decoration-none text-color d-flex align-items-center px-2">Hospitality</Link>
                      </li>
                      <li class="mb-lg-3 mx-2 d-inline-block">
                        <Link to={'/residential'} class="text-decoration-none text-color d-flex align-items-center px-2">Education</Link>
                      </li>
                    </ul>
                  </div>
              </Col>
            </Row>
          </Container>
        </Container>
    </>
  )
}
