import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {sliderItems} from "./data";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './button.css'
import './slider.css'
import Parallax from 'parallax-js';
const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  justify-content: center;
  background-color: #171616;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
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
  background-color: rgba(255, 255, 255, 0.71);
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 1em;
  padding: 2em;
  background-image: url("${(props) => props.bg}");
  overflow: hidden;
`;

const ImgContainer = styled.div`
  margin-top: 0.5em;
  height: 70%;
display: flex;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const InfoContainer = styled.div`
  margin-top: 0.75em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 40%;
`;

const Title = styled.h1`
  font-size: 16px;
  margin: 5px;
  font-weight: normal;
`;

const Desc = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 10px;
`;

const Button = styled.button`
  
`;

const Slider = () => {
  // window.onload=function() {
  //   let scene = document.getElementById('scene');
  //   if (scene) {
  //       let parallax = new Parallax(scene);
  //   };}
    useEffect(()=>{
        let scene = document.getElementById('scene');
        if (scene) {
        let parallax = new Parallax(scene);
    }},[])
    const [modalActive, setModalActive] = useState(false);
    const [slideIndex, setSlideIndex] = useState(-1);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex < -1 ? slideIndex - 1 : -1);
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 1);
        }
    };


    return (
        <Container className='containerSlide'>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                            <div id="scene" data-hover-only="true"  className="scene border">
                                <div className='layer' data-depth="1.0"><img src={item.img1}/></div>
                                <div className='layer' data-depth="0.60"><img src={item.img2}/></div>
                                <div className='layer' data-depth="0.40"><img src={item.img3}/></div>
                            </div>
                        <ImgContainer>
                        <Image data-depth="0.2" onClick={() => setModalActive(true)} src={item.img} />
                        </ImgContainer>
                        {/*<InfoContainer>*/}
                        {/*<div>*/}
                        {/*    <Title>{item.title}</Title>*/}
                        {/*    <Desc>{item.desc}</Desc>*/}
                        {/*    </div>*/}
                        {/*<div>*/}
                        {/*    <Button className='custom-btn'>Купить</Button>*/}
                        {/*    </div>*/}
                        {/*</InfoContainer>*/}
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosIcon />
            </Arrow>
        </Container>
    );
};

export default Slider;