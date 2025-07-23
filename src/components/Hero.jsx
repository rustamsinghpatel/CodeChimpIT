import React, { useState } from "react";
import styled from "styled-components";

const slides = [
  {
    img: "/images/hero3.avif",
    heading: "We Create Web Experience",
    subheading: "LET’S GET STARTED",
    description:
      "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
    heading: "Create Your Work in Office",
    subheading: "WATCH LEARN GROW ",
    description:
      "Creating impactful solutions for your business needs with latest technologies and trends.",
  },
  {
    img: "/images/hero2.avif",
    heading: "Business Takes it the Next Level",
    subheading: "LET'S GET STARTED",
    description:
      "Helping you reach new heights with strategic digital transformation.",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  const slide = slides[currentIndex];

  return (
    <HeroSectionContainer $backgroundImage={slide.img}>
      <ContentBox>
        <HeroHeading>{slide.heading}</HeroHeading>
        <HeroSubheading>{slide.subheading}</HeroSubheading>
        <HeroDescription>{slide.description}</HeroDescription>
        <ReadMoreButton>READ MORE</ReadMoreButton>
      </ContentBox>

      <NavArrowsContainer>
        <ArrowButton onClick={prevSlide}>&#10094;</ArrowButton>
        <ArrowButton onClick={nextSlide}>&#10095;</ArrowButton>
      </NavArrowsContainer>
    </HeroSectionContainer>
  );
}

// --- Styled Components ---

const HeroSectionContainer = styled.section`
  position: relative;
  height: 600px;
  color: white;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 50px;
  
`;

const ContentBox = styled.div`
  max-width: 500px;
   background-color: rgba(0, 0, 0, 0.8);  /*You wanted this darker earlier, remember? */
  padding: 40px;
  border-radius: 12px;
  margin-left:200px
  

  
  
`;

const HeroHeading = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
`;

const HeroSubheading = styled.h4`
  letter-spacing: 2px;
  font-weight: normal;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ReadMoreButton = styled.button`
  background-color: #FF3B3B;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e03030;
  }
`;

const NavArrowsContainer = styled.div`
  position: absolute;
  right: 150px;
  bottom: 70px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ArrowButton = styled.button`
  background-color: #FF3B3B;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e03030;
  }

`;