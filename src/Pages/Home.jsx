import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from '../Common/Header';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../Common/Footer';
import axios from 'axios';
import { BaseUrl } from '../API/ApiUrl';

export default function Home() {

  let [sliderPath, setSliderPath] = useState('')
  let [sliderData, setSliderData] = useState([])
  let [aboutPath, setAboutPath] = useState([])
  let [aboutData, setAboutData] = useState({})
  let [getProjects, setGetProjects] = useState([])
  let [projectImagePath, setProjectImagePath] = useState('')
  let [amenityImagePath, setAmenityImagePath] = useState('')
  let [getWhyChooseUs, setGetWhyChooseUs] = useState([])
  let [whyChooseUsImagePath, setWhyChooseUsImagePath] = useState('')
  let homePagedata = () => {
    axios.post(BaseUrl + '/home')
      .then((res) => res.data)
      .then((finalRes) => {
        let fData = finalRes._data
        //sliderData
        setSliderPath(fData.slider_image_path)
        setSliderData(fData.getSliders)
        //aboutData
        setAboutData(fData.aboutUs)
        setAboutPath(fData.about_us_image_path)
        //getprojects
        setProjectImagePath(fData.project_image_path)
        setAmenityImagePath(fData.amenities_image_path)
        setGetProjects(fData.getFeaturedProjects)
        setGetWhyChooseUs(fData.getWhyChooseUs)
        setWhyChooseUsImagePath(fData.why_choose_us_image_path)
      })
  }

  useEffect(() => {
    homePagedata();
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  var settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  var settings3 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  var settings4 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <Header />
      <Container className='px-lg-3'>
        <Slider {...settings}>
          {sliderData.length >= 1
            ?
            sliderData.map((items, i) => {
              return (
                <div>
                  <img src={sliderPath + items.image} className='img-fluid shadow-sm' alt="" />
                </div>
              )
            })
            :
            ""
          }
        </Slider>
        <div className='bg-white p-3 shadow-lg d-none d-lg-block form-section'>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Name" />
              </Col>
              <Col>
                <Form.Control placeholder="Email" />
              </Col>
              <Col>
                <Form.Control placeholder="Phone" />
              </Col>
              <Col>
                <Form.Select defaultValue="Select Property">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Control placeholder="Explain Your Query" />
              </Col>
              <Col lg='12' xl='auto'>
                <button className='submit-btn rounded-1 fw-medium'>Submit</button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
      <Container className='py-5'>
        <Row>
          {aboutData !== undefined
            ?
            <>
              <Col lg='5' className='d-none d-lg-block'>
                <img src={aboutPath + aboutData.homepage_image} className='pt-5 img-fluid' alt="" />
              </Col>
              <Col lg='7' className='d-flex align-items-center'>
                <div className='about-us position-relative'>
                  <span className='position-relative pe-3 fs-15 golden-color'>{aboutData.homepage_title}</span>
                  <h1 className='fw-semibold'>{aboutData.homepage_tagline}</h1>
                  <div className='aboutus-content'>
                    <p dangerouslySetInnerHTML={{ __html: aboutData.homepage_description }}></p>
                  </div>
                  <div className='aboutus-features px-3 py-4 d-none d-lg-block'>
                    <Row>
                      <Col>
                        <div className='text-center'>
                          <div className='feature-icon mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-2'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/experience-check.png" className='img-fluid' alt="" />
                          </div>
                          <div className='numbers fw-bold'>26+</div>
                          <div className='mb-0 text-color fs-16'>Years Of Experience</div>
                        </div>
                      </Col>
                      <Col>
                        <div className='text-center'>
                          <div className='feature-icon mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-2'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/property.svg" className='img-fluid' alt="" />
                          </div>
                          <div className='numbers fw-bold'>40+</div>
                          <div className='mb-0 text-color fs-16'>Projects</div>
                        </div>
                      </Col>
                      <Col>
                        <div className='text-center'>
                          <div className='feature-icon mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-2'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/happy.png" className='img-fluid' alt="" />
                          </div>
                          <div className='numbers fw-bold'>26000+</div>
                          <div className='mb-0 text-color fs-16'>Happy Families</div>
                        </div>
                      </Col>
                      <Col>
                        <div className='text-center'>
                          <div className='feature-icon mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-2'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/measuring-tape.png" className='img-fluid' alt="" />
                          </div>
                          <div className='numbers fw-bold'>36+</div>
                          <div className='mb-0 text-color fs-16'>Lakh Sq.Ft Delivered</div>
                        </div>
                      </Col>
                      <Col>
                        <div className='text-center'>
                          <div className='feature-icon mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-2'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/units.png" className='img-fluid' alt="" />
                          </div>
                          <div className='numbers fw-bold'>11000+</div>
                          <div className='mb-0 text-color fs-16'>Units</div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </>
            :
            ''
          }
        </Row>
      </Container>
      <section className='whyus'>
        <Container>
          <Row>
            <Col lg='4' className='d-flex align-items-center'>
              <div className='whyus-left'>
                <span className='position-relative pe-3 fs-15 golden-color'>WHY US</span>
                <h1 className='fw-semibold'>Why Ashapurna Is The Best Choice</h1>
                <div className='aboutus-content'>
                  <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.</p>
                </div>
              </div>
            </Col>

            <Col lg='8'>
              <div className='ps-xl-5 position-relative'>
                <div className='position-absolute d-none d-lg-block'>
                  <Row>
                    {getWhyChooseUs.map((items, i) => {
                      return (
                        <Col xs='6'>
                          <div class="inner-block my-3 me-lg-3 position-relative">
                            <span><img src={whyChooseUsImagePath + items.image} alt="" /></span>
                            <div class="empty-block position-absolute"></div>
                            <h4 class="my-3 fw-semibold">{items.title}</h4>
                            <div class="title-underline"></div>
                            <p class="mt-3 line-clamp-2">{items.short_description}
                            </p>
                            <div class="mt-2">
                              <span class="golden-color cursor-pointer">Read More</span>
                            </div>
                          </div>
                        </Col>
                      )
                    })}
                  </Row>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      <section className='projects'>
        <Container>
          <Row>
            <Col lg='12'>
              <span class="position-relative pe-3 fs-15 golden-color">OUR WORK</span>
              <h2 class="h2 text-white fw-semibold d-none d-lg-block">Featured Projects</h2>
              <h3 class="h3 blue-color fw-semibold d-block d-lg-none">Featured Projects</h3>
            </Col>
            <Col lg='12' className='mt-4'>
              <div className='w-100 p-0'>
                <Slider {...settings2}>
                  {getProjects.map((v, i) => {
                    return (
                      <div>
                        <Row>
                          <Col xl='6' md='5'>
                            <img src={projectImagePath + v.homepage_image} className='img-fluid' alt="" />
                          </Col>
                          <Col xl='6' md='5'>
                            <Row>
                              <Col lg='12'>
                                <div class="about-project">
                                  <div class="d-flex align-items-center">
                                    <div class="logo2">
                                      <img src={projectImagePath + v.project_logo_2} className='img-fluid' alt="" style={{ height: "50px" }} />
                                    </div>
                                    <h2 class="ms-2"><a href="">{v.name}</a></h2>
                                  </div>
                                  <div class="about-it mt-3 mb-4">{v.short_description}
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              {v.amenities.slice(0, 3).map((am, ami) => {
                                return (
                                  <Col xs='6' sm='4'>
                                    <div class="f-block d-flex align-items-start">
                                      <div class="f-icon me-2 me-md-3">
                                        <img src={amenityImagePath + am.image} className='img-fluid' alt="" />
                                      </div>
                                      <div class="f-content">
                                        <h4 class="fs-16 fw-semibold mb-1 golden-color">{am.title}</h4>
                                        <span class="text-white fs-14">{am.sub_title}</span>
                                      </div>
                                    </div>
                                  </Col>
                                )
                              })}
                              <Col lg='12' className="mb-3">
                                <a href="" class="bg-golden py-2 px-3 t-btn">See All</a>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    )
                  })}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='project-overview'>
        <Container>
          <Row>
            <Col lg='12'>
              <span class="position-relative pe-3 fs-15 golden-color">PROJECT OVERVIEW</span>
              <h2 class="h2 text-black fw-semibold d-none d-lg-block">Ready & Nearing Completion Projects</h2>
              <div className='aboutus-content'>
                <p>Meticulously crafted and emotionally designed, Ashapurna homes are the perfect place to be in. A lifestyle benchmark in Rajasthan,<br></br> today and tomorrow, our successful communities are our biggest achievement.</p>
              </div>
            </Col>
            <Col lg='12'>
              <div className='position-relative mt-5'>
                <Slider {...settings3}>
                  <div className='ab-lower'>
                    <div class="position-relative cursor-pointer">
                      <div class="outerBlock shadow-lg">
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/premium-budget-villas-in-jodhpur-1681994380.webp" alt="" className='img-fluid' />
                        <div class="position-absolute yellow-box rounded shadow-sm cursor-pointer">
                          Possesion Soon</div>
                        <div class="position-absolute innerBlock rounded shadow-sm">
                          <div class="d-flex align-items-center mb-2">
                            <div class="rounded">
                              <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp" height={30} alt="" />
                            </div>
                            <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Anmol I, II, III</h3>
                          </div>
                          <p class="location">
                            <i class="fa-solid fa-location-dot"></i>
                            Near New High Court, Jodhpur
                          </p>
                          <div class="innerBottom d-flex justify-content-between align-items-center">
                            <span>
                              <i class="fa-solid fa-house-chimney"></i>
                              Possesion Soon
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
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-aangan-budget-house-in-jodhpur-1682079322.webp" alt="" className='img-fluid' />
                        <div class="position-absolute yellow-box rounded shadow-sm cursor-pointer">
                          Possesion Soon</div>
                        <div class="position-absolute innerBlock rounded shadow-sm">
                          <div class="d-flex align-items-center mb-2">
                            <div class="rounded">
                              <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-aangan-logo-1677495610.webp" height={30} alt="" /></a>
                            </div>
                            <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Aangan</h3>
                          </div>
                          <p class="location">
                            <i class="fa-solid fa-location-dot"></i>
                            Banar, Jodhpur
                          </p>
                          <div
                            class="innerBottom d-flex justify-content-between align-items-center">
                            <span><i class="fa-solid fa-house-chimney"></i> Possesion Soon</span>
                            <a href="" class="project-tag p-btn">See All</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="position-relative cursor-pointer">
                      <div class="outerBlock shadow-lg">
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-basera-flats-in-jodhpur-1682081467.webp" alt="" className='w-100 img-fluid' />
                        <div class="position-absolute green-box rounded shadow-sm cursor-pointer">Ready
                          to Occupy</div>
                        <div class="position-absolute innerBlock rounded shadow-sm">
                          <div class="d-flex align-items-center mb-2">
                            <div class="rounded">
                              <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-basera-phase-ii-logo-1677495521.webp" height={30} alt="" /></a>
                            </div>
                            <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Basera II Phase</h3>
                          </div>
                          <p class="location">
                            <i class="fa-solid fa-location-dot"></i>
                            Pal, Sangariya Road
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
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="" className='img-fluid' />
                        <div class="position-absolute red-box rounded shadow-sm cursor-pointer">Few Units Left</div>
                        <div class="position-absolute innerBlock rounded shadow-sm">
                          <div class="d-flex align-items-center mb-2">
                            <div class="rounded">
                              <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height={30} alt="" /></a>
                            </div>
                            <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Sheoganj</h3>
                          </div>
                          <p class="location">
                            <i class="fa-solid fa-location-dot"></i>
                            Sheoganj, Sirohi District, Rajasthan
                          </p>
                          <div class="innerBottom d-flex justify-content-between align-items-center">
                            <span><i class="fa-solid fa-house-chimney"></i> Few Units Left
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
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/nanomax-project-thumbnail-1681986809.webp" alt="" className='img-fluid' />
                        <div class="position-absolute red-box rounded shadow-sm cursor-pointer">Few
                          Units Left</div>
                        <div class="position-absolute innerBlock rounded shadow-sm">
                          <div class="d-flex align-items-center mb-2">
                            <div class="rounded">
                              <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-nanomax-ii-logo-1677494586.webp" height={30} alt="" /></a>
                            </div>
                            <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Nanomax II</h3>
                          </div>
                          <p class="location">
                            <i class="fa-solid fa-location-dot"></i>
                            Jodhpur, Rajasthan 342015, India
                          </p>
                          <div class="innerBottom d-flex justify-content-between align-items-center">
                            <span><i class="fa-solid fa-house-chimney"></i> Few Units Left
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
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-empire-flats-in-jaipur-1681995100.webp" alt="" className='img-fluid' />
                        <div class="position-absolute green-box rounded shadow-sm cursor-pointer">Ready
                          to Move</div>
                        <div class="position-absolute innerBlock rounded shadow-sm">
                          <div class="d-flex align-items-center mb-2">
                            <div class="rounded">
                              <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-empire-apartments-in-jaipur-logo-1677495242.webp" height="30" alt="" /></a>
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
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-platinum-best-flats-in-jodhpur-1682070306.webp" className='img-fluid' alt="" />
                        <div class="position-absolute green-box rounded shadow-sm cursor-pointer">Ready
                          to Move</div>
                        <div class="position-absolute innerBlock rounded shadow-sm">
                          <div class="d-flex align-items-center mb-2">
                            <div class="rounded">
                              <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-platinum-apartments-in-jodhpur-logo-1677495735.webp" height={30} alt="" /></a>
                            </div>
                            <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Platinum</h3>
                          </div>
                          <p class="location">
                            <i class="fa-solid fa-location-dot"></i>
                            Basni, Basni, Jodhpur, Rajasthan, 342008
                          </p>
                          <div class="innerBottom d-flex justify-content-between align-items-center">
                            <span><i class="fa-solid fa-house-chimney"></i> Ready to Move
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
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-tower-aprtment-in-paota-jodhpur-1682058189.webp" className='img-fluid' alt="" />
                        <div class="position-absolute green-box rounded shadow-sm cursor-pointer">Ready
                          to Move</div>
                        <div class="position-absolute innerBlock rounded shadow-sm">
                          <div class="d-flex align-items-center mb-2">
                            <div class="rounded">
                              <a href=""><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-tower-logo-1677497040.webp" height={30} alt="" /></a>
                            </div>
                            <h3 class="fs-16 fw-semibold ms-2 mb-0">Ashapurna Tower</h3>
                          </div>
                          <p class="location">
                            <i class="fa-solid fa-location-dot"></i>
                            Paota, Jodhpur, Rajasthan 342006
                          </p>
                          <div class="innerBottom d-flex justify-content-between align-items-center">
                            <span><i class="fa-solid fa-house-chimney"></i> Ready to Move
                            </span>
                            <a href="" class="project-tag p-btn">See All</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='testimonials'>
        <Container>
          <Row>
            <Col xl='4' lg='5' className='d-flex align-items-center'>
              <div>
                <span class="position-relative pe-3 fs-15 golden-color">OUR TESTIMONIALS</span>
                <h2 class="h2 text-white fw-semibold mt-2">What They're Saying About Ashapurna</h2>
                <div className='aboutus-content text-white mt-4 pe-4'>
                  <p>From the heart of South Mumbai to the western suburbs and beyond take your pick from our finest addresses in the city. Select a location to view the property.</p>
                </div>
                <div className='d-none d-lg-block mt-4'>
                  <a class="t-btn bg-golden py-3 px-5 fs-5" href="">See All</a>
                </div>
              </div>
            </Col>
            <Col lg='7' className='offset-xl-1'>
              <div class="t-right position-relative">
                <div class="dots-img2 position-absolute end-0"><img src="https://ashapurna.com/images/testimonials/bg_dots.png" alt="" /></div>
              </div>
              <Slider {...settings4}>
                <div>
                  <div class="t-block position-relative bg-white pb-5 px-2 px-lg-5">
                    <div class="d-flex mb-0 mb-md-4">
                      <div class="t-image position-relative me-2 me-lg-4">
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/komal-1682513334.webp" alt="Komal-Bhati" className='img-fluid rounded-circle' />
                      </div>
                      <div class="t-info pt-3">
                        <h5 class="golden-color fw-bold mb-1">Komal Bhati</h5>
                        <span class="AA mb-1">Ashapurna Aangan</span>
                      </div>
                    </div>
                    <div class="review">I'm Komal, I recently bought a villa in Ashapurna Aangan.
                      The society is too great, the view is astounding also. highly recommend
                      everyone to visit the site once and explore the beautiful villas at
                      Ashapurna Aangan.</div>
                    <div class="t-quote position-absolute end-0 bottom-0 me-3 mb-3">
                      <img src="https://ashapurna.com/images/icons/quotes.png" alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="t-block position-relative bg-white pb-5 px-2 px-lg-5">
                    <div class="d-flex mb-0 mb-md-4">
                      <div class="t-image position-relative me-2 me-lg-4">
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/aasaa-1681650821.webp" class="img-fluid rounded-circle" alt="Mrs-Usha-Solanki" />
                      </div>
                      <div class="t-info pt-3">
                        <h5 class="golden-color fw-bold mb-1">Mrs Usha Solanki</h5>
                        <span class="AA mb-1">Ashapurna Aangan</span>
                      </div>
                    </div>
                    <div class="review">I am pleased to be a customer of Ashapurna Buildcon Ltd. The
                      experience was outstanding. They were always responsive, and proactive, and
                      went the extra mile with efforts to ensure smooth and seamless transactions.
                    </div>
                    <div class="t-quote position-absolute end-0 bottom-0 me-3 mb-3">
                      <img src="https://ashapurna.com/images/icons/quotes.png" alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="t-block position-relative bg-white pb-5 px-2 px-lg-5">
                    <div class="d-flex mb-0 mb-md-4">
                      <div class="t-image position-relative me-2 me-lg-4">
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/aas-1681650689.webp" class="img-fluid rounded-circle" alt="Mr-Damodar-Prajapat" />
                      </div>
                      <div class="t-info pt-3">
                        <h5 class="golden-color fw-bold mb-1">Mr Damodar Prajapat</h5>
                        <span class="AA mb-1">Ashapurna Aangan</span>
                      </div>
                    </div>
                    <div class="review">Being a customer of Ashapurna Buildcon Ltd. makes me happy.
                      The experience was excellent. To ensure swift and easy process, they were
                      always attentive, responsive, and went above and beyond to help us not as a
                      client ut as a family member.</div>
                    <div class="t-quote position-absolute end-0 bottom-0 me-3 mb-3">
                      <img src="https://ashapurna.com/images/icons/quotes.png" alt="" />
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='media bg-white'>
        <Container>
          <Row>
            <Col lg='12'>
              <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
                <h2 class="h2 fw-semibold blue-color">Media And Event</h2>
                <a href="" class="d-md-block blue-btn rounded-1">See All</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg='12' className='mt-3 mx-2'>
              <Slider {...settings3}>
                <div className='media-slider'>
                  <div class="event bg-white">
                    <div class="text-center position-relative">
                      <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/EVENT_TB_FOR_HERITAGE_-1700635451.jpg" alt="" class="img-fluid" />
                      <div class="event-heading text-start ps-2 ps-lg-3">
                        <h3 class="my-3">
                          <a href="" class="blue-color fs-17 fw-semibold">Karwa Chauth Celebration At Ashapurna Heritage</a>
                        </h3>
                        <div class="event-place fs-14 AA mb-2">
                          <i class="fa-solid fa-location-dot golden-color fs-15"></i>
                          Ashapurna Heritage
                        </div>
                        <div class="event-place fs-14 AA mb-2">
                          <i class="fa-solid fa-clock golden-color fs-15"></i> 2023-11-01
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="event bg-white">
                    <div class="text-center position-relative">
                      <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/basera_event_banner-1698994780.webp" alt="" class="img-fluid" />
                      <div class="event-heading text-start ps-2 ps-lg-3">
                        <h3 class="my-3">
                          <a href="" class="blue-color fs-17 fw-semibold">Mandir's Bhoomi Poojan At Ashapurna Basera</a>
                        </h3>
                        <div class="event-place fs-14 AA mb-2">
                          <i class="fa-solid fa-location-dot golden-color fs-15"></i>
                          Ashapurna Basera
                        </div>
                        <div class="event-place fs-14 AA mb-2">
                          <i class="fa-solid fa-clock golden-color fs-15"></i> 2023-10-29
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="event bg-white">
                    <div class="text-center position-relative">
                      <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/event-thumbnail-1698994445.webp" alt="" class="img-fluid" />
                      <div class="event-heading text-start ps-2 ps-lg-3">
                        <h3 class="my-3">
                          <a href="" class="blue-color fs-17 fw-semibold">Dandiya Night Celebration At Ashapurna Heritage</a>
                        </h3>
                        <div class="event-place fs-14 AA mb-2">
                          <i class="fa-solid fa-location-dot golden-color fs-15"></i>
                          Ashapurna Heritage
                        </div>
                        <div class="event-place fs-14 AA mb-2">
                          <i class="fa-solid fa-clock golden-color fs-15"></i> 2023-10-24
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="event bg-white">
                    <div class="text-center position-relative">
                      <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/Untitled-1-1698993464.webp" alt="" class="img-fluid" />
                      <div class="event-heading text-start ps-2 ps-lg-3">
                        <h3 class="my-3">
                          <a href="" class="blue-color fs-17 fw-semibold">Kaniya Poojan At Ashapurna Aangan</a>
                        </h3>
                        <div class="event-place fs-14 AA mb-2">
                          <i class="fa-solid fa-location-dot golden-color fs-15"></i>
                          Ashapurna Aangan
                        </div>
                        <div class="event-place fs-14 AA mb-2">
                          <i class="fa-solid fa-clock golden-color fs-15"></i> 2023-10-23
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="event bg-white">
                    <div class="text-center position-relative">
                      <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/05-1696857898.webp" alt="" class="img-fluid" />
                      <div class="event-heading text-start ps-2 ps-lg-3">
                        <h3 class="my-3">
                          <a href="" class="blue-color fs-17 fw-semibold">Mohan Singh Ji</a>
                        </h3>
                        <div class="event-place fs-14 AA mb-2">
                          <i class="fa-solid fa-location-dot golden-color fs-15"></i>
                          Uchiyarda
                        </div>
                        <div class="event-place fs-14 AA mb-2">
                          <i class="fa-solid fa-clock golden-color fs-15"></i> 2023-10-09
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}
