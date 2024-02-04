import React from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <Container className='header-section position-sticky shadow-sm bg-white'>
      <Row className='justify-content-between align-items-center' style={{height:'70px'}}>
        <Col lg='5'>
          <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/ec33214d-e643-4f45-bbb8-50ee61b830ec-1673703981.webp" alt="logo" height={120} className='shadow-sm position-absolute top-0'/>
        </Col>
        <Col lg='7' className='d-flex justify-content-between align-items-center' style={{height:'70px'}}>
          <Link to={'/'} className='hover-underline'>Home</Link>
          <Dropdown className='py-3'>
            <Dropdown.Toggle style={{fontSize:'16px'}}>
              About Us
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to={'/about-us'}>About Us</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/our-journey'}>Our Journey</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/management'}>Management Speaks</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/our-team'}>Our Team</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/csr'}>CSR Social Responsibilities</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/newsletter'}>Newsletter</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/nri-corner'}>NRI Corner</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/why-invest'}>Why Invest in Jodhpur?</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/corporate-profile'}>Corporate Profile</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='py-3'>
          <Dropdown.Toggle style={{fontSize:'16px'}}>
              Projects
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to={'/residential'}>Residential</Link></Dropdown.Item>
              <Dropdown.Item><Link>Commercial</Link></Dropdown.Item>
              <Dropdown.Item><Link>Rental & Lease</Link></Dropdown.Item>
              <Dropdown.Item><Link>Hospitality</Link></Dropdown.Item>
              <Dropdown.Item><Link>Education</Link></Dropdown.Item>
              <Dropdown.Item><Link>Windmills</Link></Dropdown.Item>
              <Dropdown.Item><Link>NRI Township</Link></Dropdown.Item>
              <Dropdown.Item><Link>Upcoming Projects</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to={'/events'} className='hover-underline'>Media and Events</Link>
          <Link to={'/blogs'} className='hover-underline'>Blogs</Link>
          <Link to={'/contact'} className='hover-underline'>Contact Us</Link>
          <button className='enquiry-btn rounded-1 fw-medium'>ENQUIRE</button>
        </Col>
      </Row>
    </Container>
    </>
  )
}
