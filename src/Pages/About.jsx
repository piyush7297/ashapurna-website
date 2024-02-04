import React from 'react'
import Header from '../Common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Common/Footer'
import Slider from 'react-slick';

export default function About() {

  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
        <Header/>
        <Container fluid className='bg-main'>
          <Container>
            <Row>
              <Col lg='12'>
                <div class="d-flex align-items-center justify-content-center flex-column">
                  <span class="text-white fs-19 mb-2">HOME / ABOUT US</span>
                  <span class="h2 golden-color text-center fw-bold">About Us</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className='aboutus-main'>
          <Container>
            <Row>
              <Col lg='6'>
                <div class="about-us-img">
                  <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/ashapurna-buildcon-corporate-office-1681628091.webp" class="img-fluid" alt=""/>
                </div>
              </Col>
              <Col lg='6'>
                <div class="pt-4 pt-lg-0 ps-0 ps-lg-3">
                  <span class="pe-3 fs-15 golden-color subtitle position-relative">ABOUT US</span>
                  <h2 class="h2 fw-semibold blue-color">Welcome to Ashapurna</h2>
                  <div class="aboutus-content">
                      <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and turned into a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company’s first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its existence of 27 years, Ashapurna Buildcon has 40 projects and has delivered 36 projects spanning 75,00,000 square feet, housing more than 25,000 smiling and satisfied faces.</p>
                      <p>Under the able leadership of Shri Karan Singh Uchiyarda, Ashapurna Buildcon has spread its wings across top residential projects in Jodhpur, hospitality, education, and entertainment domains, and commercial property in Jodhpur. Shri Karan Singh Uchiyarda gave ‘Comforts Residency Palace’, a renowned 3-star hotel, to Jodhpur, Hotel Ashapurna to Jaipur and another 5-star resort-cum-hotel is coming up at Uchiyarda. In education, the company owns and runs an architecture institute named ‘Buddha Institute’ in Udaipur. In the past few years, Ashapurna Buildcon has proven itself to the Real Estate market of Rajasthan and conveyed itself as one of the <a href="home.html" class="golden-color">Top 10 Real Estate Companies in Rajasthan</a>. In its quest to take the idea of lifestyle to the next level, Ashapurna Buildcon has launched premium budget homes that perfectly blend style and practicality.</p>
                  </div>
                </div>
              </Col>
              <Col lg='12'>
                <div className='about-features px-3'>
                  <Row>
                    <Col xs='6' md='3'>
                      <div class="feature-block mb-5 mb-md-0 text-center">
                        <div class="feature-icon bg-white d-flex align-items-center justify-content-center    rounded-1 mx-auto">
                          <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/experience-check.svg" alt=""/>
                        </div>
                        <h4 class="golden-color fw-bold">
                          <div height={40}><span>26+</span></div>
                        </h4>
                        <h6 class="text-white fs-16">Years Of Experience</h6>
                      </div>
                    </Col>
                    <Col xs='6' md='3'>
                      <div class="feature-block mb-5 mb-md-0 text-center">
                        <div class="feature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto">
                          <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/villas-completed.svg" alt=""/>
                        </div>
                        <h4 class="golden-color fw-bold">
                          <div height={40}><span>40+</span></div>
                        </h4>
                        <h6 class="text-white fs-16">Projects Completed</h6>
                      </div>
                    </Col>
                    <Col xs='6' md='3'>
                      <div class="feature-block mb-5 mb-md-0 text-center">
                        <div class="feature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto">
                          <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/happy.svg" alt=""/>
                        </div>
                        <h4 class="golden-color fw-bold">
                          <div height={40}><span>26000+</span></div>
                        </h4>
                        <h6 class="text-white fs-16">Happy Families</h6>
                      </div>
                    </Col>
                    <Col xs='6' md='3'>
                      <div class="feature-block mb-5 mb-md-0 text-center">
                        <div class="feature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto">
                          <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/units.svg" alt=""/>
                        </div>
                        <h4 class="golden-color fw-bold">
                          <div height={40}><span>11000+</span></div>
                        </h4>
                        <h6 class="text-white fs-16">Units</h6>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg='12'>
                <div className='about-areas'>
                  <h2 class="h2 blue-color fw-semibold text-center mb-25">Featured Projects</h2>
                  <div className='position-relative mt-5'>
                    <Slider {...settings}>
                      <div className='ab-lower'>
                        <Col className='position-relative cursor-pointer'>
                          <div class="outerBlock shadow-lg">
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-heritage-buy-villa-in-jodhpur-1681985498.webp" className='img-fluid' alt=""/>
                            <div class="position-absolute red-box rounded shadow-sm cursor-pointer">Few Units Left</div>
                            <div class="position-absolute innerBlock rounded shadow-sm">
                              <div class="d-flex align-items-center mb-2">
                                <div class="rounded">
                                  <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-heritage-logo-1677495446.webp" height={30} alt=""/></a>
                                </div>
                                <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Heritage</h3>
                              </div>
                              <p class="fs-14 line-clamp-1">
                                <i class="fa-solid fa-location-dot"></i>
                                  Basni Benda, Airport Road, Jodhpur, Rajasthan 342011
                              </p>
                              <div class="innerBottom d-flex justify-content-between align-items-center">
                                <span><i class="fa-solid fa-house-chimney"></i> Few Units Left </span>
                                <a href="" class="project-tag">See All</a>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                      <div class="position-relative cursor-pointer">
                      <div class="outerBlock shadow-lg">
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-empire-flats-in-jaipur-1681995100.webp" alt="" className='img-fluid'/>
                        <div class="position-absolute green-box rounded shadow-sm cursor-pointer">Ready
                            to Move</div>
                        <div class="position-absolute innerBlock rounded shadow-sm">
                          <div class="d-flex align-items-center mb-2">
                            <div class="rounded">
                              <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-empire-apartments-in-jaipur-logo-1677495242.webp" height="30" alt=""/></a>
                            </div>
                            <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Empire</h3>
                          </div>
                          <p class="location">
                            <i class="fa-solid fa-location-dot"></i>
                              Vaishali Nagar, Jaipur, Rajasthan 302021
                          </p>
                          <div class="innerBottom d-flex justify-content-between align-items-center">
                            <span><i class="fa-solid fa-house-chimney"></i>Ready to Move
                            </span>
                            <a href="" class="project-tag p-btn">See All</a>
                          </div>
                        </div>
                      </div>
                    </div>
                      </div>
                      <div>
                        <div class="position-relative cursor-pointer">
                          <div class="outerBlock shadow-lg">
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-basera-flats-in-jodhpur-1682081467.webp" alt="" className='w-100 img-fluid'/>
                            <div class="position-absolute green-box rounded shadow-sm cursor-pointer">Ready
                                to Occupy</div>
                            <div class="position-absolute innerBlock rounded shadow-sm">
                              <div class="d-flex align-items-center mb-2">
                                <div class="rounded">
                                  <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-basera-phase-ii-logo-1677495521.webp" height={30} alt=""/></a>
                                </div>
                                <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Basera</h3>
                              </div>
                              <p class="location">
                                <i class="fa-solid fa-location-dot"></i>
                                  Sangariya Bypass Rd, Pal, Rajasthan 342008
                              </p>
                              <div class="innerBottom d-flex justify-content-between align-items-center">
                                <span><i class="fa-solid fa-house-chimney"></i> Ready to Occupy
                                </span>
                                <a href="" class="project-tag p-btn">See All</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="position-relative cursor-pointer">
                          <div class="outerBlock shadow-lg">
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/premium-township-in-pachpadra-1681987454.webp" className='img-fluid' alt=""/>
                            <div class="position-absolute blue-box rounded shadow-sm cursor-pointer">Booking Open</div>
                            <div class="position-absolute innerBlock rounded shadow-sm">
                              <div class="d-flex align-items-center mb-2">
                                <div class="rounded">
                                  <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-pachpadra-logo-1677495132.webp" height={30} alt=""/></a>
                                </div>
                                <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Pachpadra</h3>
                              </div>
                              <p class="fs-14 line-clamp-1">
                                <i class="fa-solid fa-location-dot"></i>
                                  Near HRRL Township, Rajasthan
                              </p>
                              <div class="innerBottom d-flex justify-content-between align-items-center">
                                <span><i class="fa-solid fa-house-chimney"></i> Booking Open </span>
                                <a href="" class="project-tag">See All</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="position-relative cursor-pointer">
                          <div class="outerBlock shadow-lg">
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/best-township-in-jodhpur-1681994962.webp" width="100%" alt=""/>
                            <div class="position-absolute cyan-box rounded shadow-sm cursor-pointer">Under Construction</div>
                            <div class="position-absolute innerBlock rounded shadow-sm">
                              <div class="d-flex align-items-center mb-2">
                                <div class="rounded">
                                  <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp" height={30} alt=""/></a>
                                </div>
                                <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna NRI</h3>
                              </div>
                              <p class="fs-14 line-clamp-1">
                                <i class="fa-solid fa-location-dot"></i>
                                  Main Pali Highway, Jodhpur
                              </p>
                              <div class="innerBottom d-flex justify-content-between align-items-center">
                                <span><i class="fa-solid fa-house-chimney"></i> Under Construction </span>
                                <a href="" class="project-tag">See All</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className='mission-main'>
          <Container>
            <Row>
              <Col md='6'>
                <div class="m-shadow bg-white py-3 py-lg-0 me-lg-1 mb-3 mb-lg-0">
                  <div class="m-0 align-items-center row">
                    <Col lg='4' className="p-0">
                      <div class="mission-img mb-3 mb-lg-0 text-center">
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/ourvision.png" alt=""/>
                      </div>
                    </Col>
                    <Col lg='8' className="pe-0">
                      <div class="mission-content d-flex flex-column py-lg-3 py-xl-0 ps-2 pe-1">
                        <h3 class="fw-semibold position-relative text-start">OUR VISION</h3>
                        <div class="text-color fs-14 mb-0 mt-3">
                          <p>To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.</p>
                        </div>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
              <Col md='6'>
                <div class="m-shadow bg-white py-3 py-lg-0 me-lg-1 mb-3 mb-lg-0">
                  <div class="m-0 align-items-center row">
                    <Col lg='4' className="p-0">
                      <div class="mission-img mb-3 mb-lg-0 text-center">
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/ourmission.png" alt=""/>
                      </div>
                    </Col>
                    <Col lg='8' className="pe-0">
                      <div class="mission-content d-flex flex-column py-lg-3 py-xl-0 ps-2 pe-1">
                        <h3 class="fw-semibold position-relative text-start">OUR MISSION</h3>
                        <div class="text-color fs-14 lh-26 mb-0 mt-3">
                          <p>To offer quality and refined workmanship in both product and service plus maintain the highest level of professionalism while dealing with customers, employees and associates.</p>
                        </div>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className='achievements'>
          <Container>
            <Row>
              <Col lg='7' md='8' className='ms-auto'>
                <div class="achievement-content bg-white position-relative p-4">
                  <h3 class="blue-color fw-semibold mb-3">Our Achievement</h3>
                  <div class="text-color fs-14">
                    <p>“Indian Leadership Award for Infrastructure Development 2011” for Outstanding Contribution in the Field of Infrastructure Development to Shri Karan Singh Uchiyarda, Chairman & Managing Director, Ashapurna Buildcon by “Indian Economic Development & Research Association, New Delhi”</p>
                    <p>Dignitaries Present: Dr. Bhishma Narayan Singh, Former Governor, Tamil Nadu; Dr. GVG Krishnamoorti, Former Chief Election Commissioner, Government of India and Jogendra Singh, Former CBI Director</p>
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
