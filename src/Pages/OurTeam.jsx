import React from 'react'
import Header from '../Common/Header'
import { Col, Container, Row } from 'react-bootstrap'

export default function OurTeam() {
  return (
    <>
    <Header/>
        <Container fluid className='bg-main'>
          <Container>
            <Row>
              <Col lg='12'>
                <div class="d-flex align-items-center justify-content-center flex-column">
                  <span class="text-white fs-19 mb-2">HOME / OUR TEAM</span>
                  <span class="h2 golden-color text-center fw-bold">Our Team</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className='ourteam-main py-4 py-lg-5 mb-5'>
          <Container>
            <Row>
              <Col lg='12'>
                <div class="our-team">
                  <h2 class="blue-color text-center fw-semibold h2 mb-25">Ashapurna Team</h2>
                  <div class="text-color fs-14">
                    <p class="mb-30">Shri Karan Singh Uchiyarda, the Founder Chairman & Managing Director of Ashapurna Buildcon, is a man with crystal-clear foresight and strong business acumen. It is his vision that led the company to scale new heights and set new benchmarks of excellence in Jodhpur's real estate scene. Acceptance and popularity of Ashapurna's projects are proof of his passion, skill, and hard work. Besides real estate, Shri Karan Singh Uchiyarda is a known figure in the hospitality sector as well.</p>
                    <p class="mb-30">On one hand, Shri Karan Singh Uchiyarda is a respected name in the Jodhpur's business circle, on the other, he is known for giving back to society through his trust Shree Mag Mohan Charitable Trust. His social welfare work includes medical camps, large-scale marriage functions, housing, and other donation for the poor and needy. What's more, in a very unique and commendable CSR initiative, Ashapurna Buildcon provides a free home to a widow in every project which in itself is living proof of Shri Karan Singh Uchiyardas concern towards the less privileged section of society.</p>
                  </div>
                  <div class="d-flex justify-content-center">
                    <img src="https://ashapurna.com/images/banner/organization-chart3.jpg" class="img-fluid" alt=""/>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
    </>
  )
}
