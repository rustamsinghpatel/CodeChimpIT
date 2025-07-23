import React from 'react';
import styled from 'styled-components';

const Awards = () => {
  return (
    <AwardsSection>
      <AwardsContainer>
        <AwardsRow>
          <AwardsIconCol>
            <AwardImage src="https://codechimpit.com/wp-content/uploads/2024/01/award.png"
                         alt="Award Icon"
                         style={{ maxWidth: '50px' }} />
          </AwardsIconCol>

          <AwardsTextCol>
            <SectionHeading>Awards & Recognition</SectionHeading>
            <AwardsParagraph>
              We are extremely happy to reserve a place among the top website and app development companies in India as we are certified and honored with many accolades.
            </AwardsParagraph>
          </AwardsTextCol>

          <AwardImageCol>
            <AwardImage src="https://codechimpit.com/wp-content/uploads/2024/01/imagews-1.png" alt="Award 1" />
          </AwardImageCol>

          <AwardImageCol>
            <AwardImage src="https://codechimpit.com/wp-content/uploads/2024/01/imaged-2.png" alt="Award 2" />
          </AwardImageCol>

          <AwardImageCol>
            <AwardImage src="https://codechimpit.com/wp-content/uploads/2024/01/imaages-3.png" alt="Award 3" />
          </AwardImageCol>

          <AwardImageCol>
            <AwardImage src="https://codechimpit.com/wp-content/uploads/2024/01/imaghes.png" alt="Award 4" />
          </AwardImageCol>
        </AwardsRow>
      </AwardsContainer>
    </AwardsSection>
  );
};

export default Awards;

const AwardsSection = styled.section`
  background: radial-gradient(circle at top left, #2874fc 10%, #020381 80%);
  padding: 60px 20px;
`;

const AwardsContainer = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  max-width: 1320px;
`;

const AwardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
  margin-top: calc(var(--bs-gutter-y, 0) * -1);
  align-items: center;
  justify-content: space-between;

  
`;

const AwardsIconCol = styled.div`
  flex: 0 0 auto;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  text-align: center;
  align-self: flex-start;
  width: 8.333333%;
`;

const AwardsTextCol = styled.div`
  flex: 0 0 auto;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .6);
  text-align: center;
  width: 25%;
  padding-bottom: 7rem;
`;

const AwardImageCol = styled.div`
  flex: 0 0 auto;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  text-align: center;
  width: 16.666667%;
`;

const SectionHeading = styled.h2`
  font-size: 1.85rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.3;
  text-align: inherit;
  
`;

const AwardsParagraph = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  margin-bottom: 0;
  text-align: inherit;
`;

const AwardImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  ${props => props.style && props.style.maxWidth && `max-width: ${props.style.maxWidth};`}
  margin: auto;
`;