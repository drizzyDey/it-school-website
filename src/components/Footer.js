import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='footer'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                LIGHT CODE
              </h6>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Lorem ipsum dolor sit amet,
                consectetur elit.
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Courses</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Course 1
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Course 2
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Course 3
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Course 4
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About our team
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact information</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Bishkek, Bishkek, KG
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 
                +996(000)123-123
              </p>
              <p>
                <MDBIcon fab icon="instagram" className="me-3" /> 
                @instagram
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: LC
      </div>
    </MDBFooter>
  );
};

export default Footer;