import React, {useState} from "react";
import styled from 'styled-components'
import {sliderItems} from "./data";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #00d29d;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  `;
const Wrapper = styled.div`
  height: 100%;
  background-color: #1a83ff;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  background-color: pink;
  align-content: center;
`;
const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const Title = styled.h1`
  font-size: 1em;
`;

const Desc = styled.p`
  font-size: 0.5em;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}><ArrowBackIosIcon></ArrowBackIosIcon></Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>ПОКУПАЙ</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}><ArrowForwardIosIcon></ArrowForwardIosIcon></Arrow>
      <div>Гавно на палочке</div>
        </Container>
    );

};

export default Slider;