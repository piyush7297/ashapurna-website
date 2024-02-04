import React from 'react'
import Header from '../Common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Common/Footer'

export default function Management() {
  return (
    <>
    <Header/>
        <Container fluid className='bg-main'>
          <Container>
            <Row>
              <Col lg='12'>
                <div class="d-flex align-items-center justify-content-center flex-column">
                  <span class="text-white fs-19 mb-2">HOME / MANAGEMENT SPEAKS</span>
                  <span class="h2 golden-color text-center fw-bold">Our Management</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className='management-main'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div class="m-top">
                            <h2 class="blue-color text-center fw-semibold h2 mb-3">Board Of Directors</h2>
                            <div class="text-color fs-14">
                                <p>Ashapurna Group is a socially responsible company. The group is active in almost all spheres of society and works on the ground level to bring about meaningful change. Ashapurna has worked in the fields of health, education, social awareness, and environment. During the challenging time of Covid, the group has worked hand in hand with government and non-government agencies. Ashapurna understands its responsibility and always strives hard to be with society in times of need.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col lg='7'>
                    <div class="testimonials-block position-relative rounded-2 pt-4 pb-5 px-2 px-lg-5 mb-4">
                        <span class="pe-3 fs-15 golden-color position-relative">CMD</span>
                        <h3 class="h3 blue-color mb-15">Shri Karan Singh Uchiyarda</h3>
                        <div class="text-color fs-14 line-clamp-7 mb-4">
                            <p>Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for the best quality housing at a minimum and reasonable cost which otherwise may not be possible if a customer builds his own house. Shri Karan Singh Uchiyarda with his zeal and enthusiasm to work for the social upliftment of poor people has established a trust named ‘Shree Mag Mohan Charitable Trust’, which, with the association of Ashapurna Buildcon Ltd. works for the welfare of the general public by organizing medical camps, social events like large scale marriage functions, housing and other donations to poor and needy people, charitable activities etc. Ashapurna has the best talents on its staff rolls. It also has its self-integrated modern state-of-art infrastructure to support the manpower. Highly skilled intelligent architects have to date produced real wonders; their scintillating and stunning designs have captivated and awed many people in Rajasthan. Ashapurna has redefined the Building and Construction Business with unique modern designs and preserving the rich heritage and the traditional and cultural values of India. It is obvious to conclude that the group has in its humble way tried to enrich the quality of life and living standards of the people in general. For customers, Ashapurna Constructs has a wide range of requirements and offers the best suitable options.</p>
                        </div>
                        <a href="" class="blue-btn rounded-1">Read More</a>
                        <div class="position-absolute end-0 bottom-0 me-3 mb-2">
                            <img src="https://ashapurna.com/images/icons/quotes.png" height={57} width={63} alt="Quotes"/>
                        </div>
                    </div>
                    </Col>
                    <Col lg='5'>
                        <div class="d-flex align-items-center justify-content-center m-img mx-auto">
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/management_speak/6e449cbb-2eb8-4888-b0d6-bd7d77d8f039-1669299130.jpg" class="img-fluid" alt="cmd"/>
                        </div>
                    </Col>
                </Row>
                <Row className='mb-4 mt-5'>
                    <Col lg='5'>
                        <div class="d-flex align-items-center justify-content-center m-img mx-auto">
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/management_speak/c28d2e5b-7f72-4378-9421-ad2cb6099f77-1669299122.jpg" class="img-fluid" alt="director"/>
                        </div>
                    </Col>
                    <Col lg='7'>
                    <div class="testimonials-block position-relative rounded-2 pt-4 pb-5 px-2 px-lg-5 mb-4">
                        <span class="pe-3 fs-15 golden-color position-relative">DIRECTOR</span>
                        <h3 class="h3 blue-color mb-15">Mr Harshvardhan Singh Uchiyarda</h3>
                        <div class="text-color fs-14 line-clamp-7 mb-4">
                            <p>Regarding their surging success, the Director asserts, “I believe that achievements are what make us and define us and no achievement can be attained without the seed of a dream. Ashapurna Group is a perfect example of this vary philosophy. “Apart from this, he accredits the company’s commendable success to the blessings of their ‘Kuldevi’- Maa Ashapurna. She has been the prime motivation to name the organization as- ‘Ashapurna Buildcon’. As a sign of their utmost gratitude towards their adored goddess-the group always ensures to establish a small temple for her at every project they establish. Being the changing face of Ashapurna Group, Harshvardhan Singh Uchiyarda is leading the Group by keeping technology at the forefront. The Team at Ashapurna Buildcon Limited has a mission to deliver the best workmanship, in both product and service, by maintaning the highest level of professionalism while dealing with employees and customers.</p>
                        </div>
                        <a href="" class="blue-btn rounded-1">Read More</a>
                        <div class="position-absolute end-0 bottom-0 me-3 mb-2">
                            <img src="https://ashapurna.com/images/icons/quotes.png" height={57} width={63} alt="Quotes"/>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Footer/>
    </>
  )
}
