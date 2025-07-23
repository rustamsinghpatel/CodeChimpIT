import React from 'react';
import styled from 'styled-components';

const Hire = () => {
  const developers = [
    { src: "https://codechimpit.com/wp-content/uploads/2024/02/3.webp", alt: "Ionic App Developer", title: "Ionic App Developer" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/02/4.webp", alt: "CodeIgnitor Developer", title: "CodeIgnitor Developer" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/02/5.webp", alt: ".Net Developers", title: ".Net Developers" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/02/9.webp", alt: "WordPress Developer", title: "WordPress Developer" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/02/2.webp", alt: "Flutter Developers", title: "Flutter Developers" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/02/1.webp", alt: "Full Stack Developer", title: "Full Stack Developer" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/02/8.webp", alt: "React JS Developer", title: "React JS Developer" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/02/6.webp", alt: "Magento Developer", title: "Magento Developer" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/02/7.webp", alt: "PHP Developer", title: "PHP Developer" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/01/homeSprite6-1.png.webp", alt: "Web Developers", title: "Web Developers" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/01/homeSprite6-2.png.webp", alt: "Android App Developer", title: "Android App Developer" },
    { src: "https://codechimpit.com/wp-content/uploads/2024/01/homeSprite6-3.png.webp", alt: "Angularjs Developer", title: "Angularjs Developer" },
  ];

  return (
    <HireSection>
      <HireContainer>
        <MainHeading>
          Hire Developers<br />
          For Custom IT Solutions
        </MainHeading>
        <HireDescription>
          We are one of the best IT Consulting companies that handle all aspects of software creation.
          Hire web developers who excel in a wide range of technology solutions and build websites that are
          efficient, flexible, and easy to maintain. Also, we help you to hire app developers who develop
          bespoke applications to help you redefine customer experiences.
        </HireDescription>
        <HighlightBox>HIRE DEVELOPERS</HighlightBox>

        <DeveloperGridRow>
          {developers.map((dev, index) => (
            <DeveloperCol key={index}>
              <DevCard>
                <DevImage src={dev.src} alt={dev.alt} />
                <DevCardTitle>{dev.title}</DevCardTitle>
              </DevCard>
            </DeveloperCol>
          ))}
        </DeveloperGridRow>
      </HireContainer>
    </HireSection>
  );
};

export default Hire;

const HireSection = styled.section`
  padding: 60px 0;
  text-align: center;
`;

const HireContainer = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  max-width: 1320px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const HireDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const HighlightBox = styled.div`
  display: inline-block;
  padding: 10px 30px;
  background-color: #0066ff;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  margin-bottom: 50px;
`;

const DeveloperGridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
`;

const DeveloperCol = styled.div`
  flex: 0 0 auto;
  width: 33.333333%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-bottom: 24px;
`;

const DevCard = styled.div`
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DevImage = styled.img`
  max-width: 80px;
  height: auto;
  margin-bottom: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const DevCardTitle = styled.h5`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #000;
`;