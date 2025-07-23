import React from 'react';
import styled from 'styled-components';

const WhoWeAre = () => {
  return (
    <WhoWeAreSection>
      <WhoContainer>
        <WhoRow>
          <WhoImageCol>
            <WhoImagesGrid>
              <WhoImageItemCol6>
                <img src="https://codechimpit.com/wp-content/uploads/2024/01/About-icons-1.png.webp" alt="Who We Are Image 1" />
              </WhoImageItemCol6>
              <WhoImageItemCol6>
                <img src="https://codechimpit.com/wp-content/uploads/2024/01/About-icons-2.png.webp" alt="Who We Are Image 2" />
              </WhoImageItemCol6>
              <WhoImageItemCol12>
                <img src="https://codechimpit.com/wp-content/uploads/2024/01/About-icons-3.png.webp" alt="Who We Are Image 3" />
              </WhoImageItemCol12>
            </WhoImagesGrid>
          </WhoImageCol>

          <WhoContentCol>
            <SectionHeading>Who We Are</SectionHeading>
            <Paragraph>
              Codechimp is an IT services, consulting and business solutions organization. We take a long-term view building relationships that endure, leading to mutual growth and sustainable outcomes.
            </Paragraph>
            <Paragraph>
              We believe in building greater futures by connecting people to opportunities in the digital economy.
            </Paragraph>
            <Paragraph>
              We leverage our holistic portfolio of capabilities in consulting, design, engineering, operations, and emerging technologies to help clients realize their boldest ambitions and build future-ready, sustainable businesses.
            </Paragraph>
            <Paragraph>
              We deliver on the promise of helping our customers, colleagues, and communities thrive in an ever-changing world.
            </Paragraph>
            <Paragraph>
              The work we do is driven toward creating a fairer and more equitable world for all. We make a difference beyond our own business and those of our clients, ensuring our actions and what we do together, empower people and communities to achieve more and live better lives.
            </Paragraph>
            <ParagraphLast>
              We are deeply committed to being a well-governed, environmentally sustainable organization where diverse talent thrives in an inclusive workplace.
            </ParagraphLast>
          </WhoContentCol>
        </WhoRow>
      </WhoContainer>
    </WhoWeAreSection>
  );
};

export default WhoWeAre;

// --- Styled Components Definitions ---

const WhoWeAreSection = styled.section`
  background-color: #f9f9f9;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const WhoContainer = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  max-width: 1320px; /* Setting a fixed max-width for consistency */
`;

const WhoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
  align-items: center;
`;

const WhoImageCol = styled.div`
  flex: 0 0 auto;
  width: 50%; /* Fixed width for image column */
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
`;

const WhoImagesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
  padding-left: 50px;
  padding-right: 50px;
`;

const WhoImageItemCol6 = styled.div`
  flex: 0 0 auto;
  width: 50%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.375rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
`;

const WhoImageItemCol12 = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.375rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
`;

const WhoContentCol = styled.div`
  flex: 0 0 auto;
  width: 50%; /* Fixed width for content column */
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-top: 1.5rem; /* mt-4 equivalent */
  
  padding-left: 50px;
  padding-right: 50px;
`;

const SectionHeading = styled.h2`
  font-size: 1.85rem;
  font-weight: 900;
  line-height: 1.3;
  color: #085DF3;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
`;

const ParagraphLast = styled(Paragraph)`
  margin-bottom: 2rem;
`;