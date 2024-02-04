import React from 'react'
import Header from '../Common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Common/Footer'

export default function NriCorner() {
  return (
    <>
    <Header/>
    <Container fluid className='bg-main'>
          <Container>
            <Row>
              <Col lg='12'>
                <div class="d-flex align-items-center justify-content-center flex-column">
                  <span class="text-white fs-19 mb-2">HOME / NRI CORNER</span>
                  <span class="h2 golden-color text-center fw-bold">NRI Corner</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className='py-4 py-lg-5'>
            <Container>
                <Row>
                    <Col lg='12' className='mb-4'>
                        <div class="nri-corner">
                            <h2 class="blue-color text-center fw-semibold h2 mb-25">NRI</h2>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div class="my-2">
                            <span class="pe-3 fs-15 golden-color position-relative">NRI</span>
                            <h2 class="h2">NRI Clients <span class="golden-color">Corner</span></h2>
                            <div class="text-color fs-14 pe-lg-4">
                                <p>A non-resident Indian (NRI) is a citizen of India who holds an Indian passport and has temporarily emigrated to another country for six months or more for employment, residence, education or any other such purpose. A person of Indian origin (PIO) is a person of Indian origin or ancestors but who is not a citizen of India and is the citizen of another country. A PIO might have been a citizen of India and subsequently taken citizenship of another country, or have ancestors born in India or other states. Other terms with vaguely the same meaning are overseas Indian and expatriate India. In common usage, this often includes Indian-born individuals (and also people of other nations with Indian ancestors) who have taken the citizenship of other countries. As per the Ministry of Overseas Indian Affairs, India has the second largest diaspora in the world after overseas Chinese. The overseas Indian community is estimated at 25 million spread across every region of the world.</p>
                                <h3>Investment destination: India</h3>
                                <p>In recent times, India has emerged as one of the popular real estate destinations for global investors. Real estate is one of the booming industries in the country and investment in property is promising and set to flourish in the times to come. It is expected to scale new heights with the emergence of fresh localities in tier-I and II cities.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                    <div class="contact-form p-4 position-relative overflow-hidden">
                        <h3 className='blue-color'>NRI ENQUIRY</h3>
                        <p class="text-color lh-30 fs-16">Please fill in the form and we would contact you at the earliest.</p>
                        <div class="row mt-lg-4 ">
                            <div class="mb-4 col-lg-12">
                                <div class="input-box position-relative">
                                    <input type="text" class="w-100"/>
                                    <label>Name</label>
                                </div>
                            </div>
                            <div class="mb-4 col-lg-12">
                                <div class="input-box position-relative">
                                    <input type="email" class="w-100"/>
                                    <label>Email</label>
                                </div>
                            </div>
                            <div class="mb-4 col-lg-12 position-relative">
                                <div class="input-box">
                                    <input type="text" class="w-100"/>
                                    <label>Phone</label>
                                </div>
                            </div>
                            <div class="mb-4 col-lg-12">
                                <div class="input-box position-relative">
                                    <input type="text" class="w-100 text-start h-106"/>
                                    <label>Message</label>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <button type="button" class="golden-btn">SUBMIT</button>
                            </div>
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
