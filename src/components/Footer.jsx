// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';



const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </Col>

          <Col>
            <h5>Our Industries</h5>
            <ul>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Mobile App Development</a></li>
              <li><a href="#">Food</a></li>
              <li><a href="#">Real Estate</a></li>
              <li><a href="#">Health</a></li>
              <li><a href="#">E-Commerce</a></li>
            </ul>
          </Col>

          <Col>
            <h5>Get In Touch</h5>
            <p><FaEnvelope /> Email: info@codechimpit.com</p>
            <p><FaEnvelope /> HR: hr@codechimpit.com</p>
            <p><FaPhoneAlt /> Sales: +91-7023388784</p>
            <p><FaMapMarkerAlt /> Address: R-Tech, Capital Mall, 12 A, Industrial Area, Behror, Rajasthan 301701</p>
          </Col>
        </Row>

        <FooterLine />

        <BottomRow>
          <p>© 2024 Codechimp IT Solution. All rights reserved.</p>
          <SocialIcons>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </SocialIcons>
        </BottomRow>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: #121212;
  color: #fff;
  padding: 60px 20px 20px;
  font-size: 16px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;

const Col = styled.div`
  flex: 1 1 250px;

  h5 {
    font-size: 16px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      font-size: 14px;

      a {
        color: #ddd;
        text-decoration: none;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;

    i {
      margin-right: 8px;
      color: #00aaff;
    }
  }
`;

const FooterLine = styled.hr`
  border-top: 1.85px solid white;
  margin: 40px auto 20px;
  width: 90%;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  p {
    margin: 0;
    font-size: 15px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    font-size: 18px;

    &:hover {
      color: #00aaff;
    }
  }
`;