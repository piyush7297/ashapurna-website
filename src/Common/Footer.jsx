import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
      <Container fluid className='footer1 py-5'>
        <Container>
          <Row>
            <Col xl='4' lg='5' md='6' className='footer-left'>
              <span>
                <img
                    src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/footer_logo/ffe726b1-c8b0-4798-8c89-ebad0cb7ebf3-1673702923.svg"
                    alt="Ashapurna-logo" width={160} height={73}/>
              </span>
              <div class="contact-info ps-2 ps-lg-4 mt-lg-2">
                <div class="contact-info-block d-flex align-items-center mb-3">
                  <div class="contact-icon d-flex justify-content-center align-items-center text-white rounded-1">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div class="ms-2 fs-16 text-white">
                    <span>9314041747</span><br/>
                    <span>0291-2514747, 9610383747</span>
                  </div>
                </div>
                <div class="contact-info-block d-flex align-items-center mb-3">
                  <div class="contact-icon d-flex justify-content-center align-items-center text-white rounded-1">
                      <i class="fa-solid fa-envelope-open"></i>
                  </div>
                  <div class="ms-2 fs-16 text-white">
                    <span>marketing@ashapurna.com</span>
                  </div>
                </div>
                <div class="contact-info-block d-flex align-items-center mb-3">
                  <div class="contact-icon d-flex justify-content-center align-items-center text-white rounded-1">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div class="ms-2 fs-16 text-white">
                    <span>-, 4A, EAST PATEL NAGAR, CIRCUIT HOUSE<br/> ROAD,
                          OPPOSITE LIC OFFICE, Jodhpur,<br/> Rajasthan, 342011</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl='8' lg='7' md='6' className='ps-4 footer-right'>
              <h4 class="text-white position-relative footer-right-h4 mb-25">Useful Links</h4>
              <div class="d-flex flex-wrap align-items-center mb-25">
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Residentials Projects</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Commercial Projects</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Investors Club</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">NRI Corner</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Career</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Become a Partner</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Our Testimonials</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Privacy Policy</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Terms & Conditions</a>
                </div>
              </div>
              <h4 class="text-white position-relative footer-right-h4 mb-25">Important Links</h4>
              <div class="d-flex flex-wrap align-items-center mb-25">
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Social Responsibility</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Corporate Profile</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Why Invest In Jodhpur?</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">RERA Disclaimer</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">EMI Calculator</a>
                </div>
                <div class="links mb-2">
                  <a href="" class="link position-relative me-4">Referral Scheme</a>
                </div>
              </div>
            </Col>
            <Col lg='12'>
              <hr class="blue-border mx-auto my-0"/>
            </Col>
          </Row>
          <Row>
            <Col xl='3' lg='4' md='6' className='socials mx-auto d-flex justify-content-center'>
              <h4 class="text-white text-center my-3">Follow Us On</h4>
              <div class="d-flex flex-wrap align-items-center justify-content-center">
                <div class="social-block d-flex justify-content-center align-items-center me-2">
                  <a href="https://www.facebook.com/AshapurnaBuildconLtd" class="blue-color fs-14">
                  <svg xmlns="http://www.w3.org/2000/svg" height={16} width={10} viewBox="0 0 320 512" className='svg'><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                  </a>
                </div>
                <div class="social-block d-flex justify-content-center align-items-center me-2">
                  <a href="https://www.facebook.com/AshapurnaBuildconLtd" class="blue-color fs-14">
                  <svg xmlns="http://www.w3.org/2000/svg" height={24} width={14} viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                  </a>
                </div>
                <div class="social-block d-flex justify-content-center align-items-center me-2">
                  <a href="https://www.facebook.com/AshapurnaBuildconLtd" class="blue-color fs-14">
                  <svg xmlns="http://www.w3.org/2000/svg" height={22} width={18} viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                  </a>
                </div>
                <div class="social-block d-flex justify-content-center align-items-center me-2">
                  <a href="https://www.facebook.com/AshapurnaBuildconLtd" class="blue-color fs-14">
                  <svg xmlns="http://www.w3.org/2000/svg" height={22} width={16} viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                  </a>
                </div>
                <div class="social-block d-flex justify-content-center align-items-center me-2">
                  <a href="https://www.facebook.com/AshapurnaBuildconLtd" class="blue-color fs-14">
                  <svg xmlns="http://www.w3.org/2000/svg" height={22} width={16} viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
                  </a>
                </div>
                <div class="social-block d-flex justify-content-center align-items-center me-2">
                  <a href="https://www.facebook.com/AshapurnaBuildconLtd" class="blue-color fs-14">
                  <svg xmlns="http://www.w3.org/2000/svg" height={22} width={14} viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='footer2'>
        <Container>
          <Row>
            <Col lg='12'>
              <div class="text-center d-flex flex-wrap justify-content-start justify-content-lg-center align-items-center">
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">Real Estate Developer In Jodhpur</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">Top Builders In Jodhpur</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">Top Residential Projects In Jodhpur</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">Comercial Property In Jodhpur</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">Houses In Rajasthan</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">Flats In Jodhpur</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">Villas In Jodhpur</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">Plots In Jodhpur</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">2BHK Flats In Jodhpur</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">JDA Property In Jodhpur</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">Property Type</a>
                </div>
                <div class="links m-2">
                  <a href="" class="link2 position-relative me-5">Properties In Jodhpur</a>
                </div>
              </div>
            </Col>
            <Col lg='12'>
              <hr class="golden-border mx-lg-auto"/>
            </Col>
            <Col lg='12'>
              <div class="px-2 px-lg-5 mb-0 text-start text-lg-center lh-30">
                <p>The information on the website regarding the project, except the legal       documents, is
                  purely indicative and representational and do not constitute a promise by the company.
                  Further, the Company/Architects reserve the right to add / delete any details /
                  specifications / elevations mentioned, if so warranted.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='footer3 py-3'>
        <Container>
          <Row>
            <Col lg='6'>
              <p class="text-black my-0 fs-16">Copyright © 2022 Ashapurna Buildcon Limited</p>
            </Col>
            <Col lg='6'>
            <p class="text-black my-0 fs-16 text-md-end">Design and Developed by 
            <a href="https://instagram.com/ig_praveen2709?utm_source=qr&igshid=MzNINGNkZWQ4Mg%3D%3D"> Praveen Sharma</a></p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}
