// src/components/Topbar.jsx
import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Styled Components
const TopbarWrapper = styled.div`
  background-color: #070707;
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom:1.5px solid white;
  font-weight: 400;
  
`;

const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const Left = styled.div`
  display: flex;
  gap: 24px;
  font-size: 18px;
`;

const Right = styled.div`
  display: flex;
  gap: 16px;
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #ffc107; /* yellow highlight on hover */
    }
  }
`;

const Icon = styled.span`
  margin-right: 8px;
`;

const Topbar = () => {
  return (
    <TopbarWrapper>
      <Container>
        <Left>
          <span><Icon><FaPhoneAlt /></Icon>91+ 7000688032</span>
          <span><Icon><FaEnvelope /></Icon>info@codechimpit.com</span>
        </Left>

        <Right>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </Right>
      </Container>
    </TopbarWrapper>
  );
};

export default Topbar;
