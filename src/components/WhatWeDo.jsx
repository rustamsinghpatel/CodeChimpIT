import React from 'react';
import styled from 'styled-components';

const WhatWeDo = () => {
  return (
    <WhatWeDoSection>
      <WhatWeDoContainer>
        <SectionHeading>What Can We Do For You ? </SectionHeading>
        <LeadParagraph>
          Our 360-degree approach towards digital marketing is one of its kind. We are firm upholder of the fact that success isn’t a one-way road, it is a staircase that needs endeavour, hard work and commitment to climb uphill. That is why with constant diligence we have evolved into the eventual digital marketing package that can help you to prevail over the gap between a new business to a widely-known brand. Here are some of our specialties that you can choose from. Dive in!
        </LeadParagraph>

        <CardsRow>
          <CardCol>
            <ServiceCard>
              <CardImage src="https://codechimpit.com/wp-content/uploads/2024/01/light-blue.jpg" alt="Mobile App Icon" />
              <CardTitle>Mobile App Development</CardTitle>
              <CardText>We help you build lightweight and interactive apps that work on multiple platforms.</CardText>
            </ServiceCard>
          </CardCol>

          <CardCol>
            <ServiceCard>
              <CardImage src="https://codechimpit.com/wp-content/uploads/2024/02/ecom-yellow.jpg" alt="E-Commerce Icon" />
              <CardTitle>E-Commerce Solutions</CardTitle>
              <CardText>We work with the leading e-commerce platforms to help you grow your business online.</CardText>
            </ServiceCard>
          </CardCol>

          <CardCol>
            <ServiceCard>
              <CardImage src="https://codechimpit.com/wp-content/uploads/2024/02/cms-purple.jpg" alt="CMS Icon" />
              <CardTitle>Content Management Systems (CMS)</CardTitle>
              <CardText>CMS enables us to create fast, visually-appealing, and localized digital experiences.</CardText>
            </ServiceCard>
          </CardCol>

          <CardCol>
            <ServiceCard>
              <CardImage src="https://codechimpit.com/wp-content/uploads/2024/02/web-orange.jpg" alt="Web Design Icon" />
              <CardTitle>Web Design</CardTitle>
              <CardText>Our team plans, designs, and develops custom stunning web and mobile websites.</CardText>
            </ServiceCard>
          </CardCol>

          <CardCol>
            <ServiceCard>
              <CardImage src="https://codechimpit.com/wp-content/uploads/2024/02/re-red.jpg" alt="Digital Marketing Icon" />
              <CardTitle>Digital Marketing</CardTitle>
              <CardText>We help you build lightweight and interactive apps that work on multiple platforms.</CardText>
            </ServiceCard>
          </CardCol>

          <CardCol>
            <ServiceCard>
              <CardImage src="https://codechimpit.com/wp-content/uploads/2024/02/blue1.jpg" alt="Digital Consulting Icon" />
              <CardTitle>Digital Consulting</CardTitle>
              <CardText>Our SMO experts drive real traffic from various social networks and other big search engines.</CardText>
            </ServiceCard>
          </CardCol>

          <CardCol>
            <ServiceCard>
              <CardImage src="https://codechimpit.com/wp-content/uploads/2024/02/re-red.jpg" alt="Local SEO Icon" />
              <CardTitle>Local SEO</CardTitle>
              <CardText>We help you build lightweight and interactive apps that work on multiple platforms.</CardText>
            </ServiceCard>
          </CardCol>

          <CardCol>
            <ServiceCard>
              <CardImage src="https://codechimpit.com/wp-content/uploads/2024/02/orange1.jpg" alt="Social Media Icon" />
              <CardTitle>Social Media Marketing</CardTitle>
              <CardText>We help you build lightweight and interactive apps that work on multiple platforms.</CardText>
            </ServiceCard>
          </CardCol>
        </CardsRow>
      </WhatWeDoContainer>
    </WhatWeDoSection>
  );
};

export default WhatWeDo;

const WhatWeDoSection = styled.section`
  padding-top: 10px;
  padding-bottom: 80px;
  background-color: #ffffff;

`;

const WhatWeDoContainer = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  max-width: 1320px;
`;

const SectionHeading = styled.h2`
  font-size: 1.85rem;
  font-weight: 600;
  color: #085DF3;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  text-align: center;
`;

const LeadParagraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
  justify-content: center;
`;

const CardCol = styled.div`
  flex: 0 0 auto;
  width: 25%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-top: 1.5rem;
`;

const ServiceCard = styled.div`
  height: 100%;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.375rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  width: 60px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h5`
  position: relative;
  font-size: 17px;
  padding-bottom: 40px;
  margin-bottom: 15px;
  color: #333;

  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: #333333;
    left: 0;
    bottom: 0;
    border-radius: 2px;
  }
`;

const CardText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 0;
`;