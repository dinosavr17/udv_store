import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import './button.css'
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "../api/axios";
import {buildTimeValue} from "@testing-library/user-event/dist/utils";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
`;

const ImgContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  max-width: 100%;
  height: 50%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
`;

const ProductPage = ({item}) => {

    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title></Title>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount></Amount>
                            <Add/>
                        </AmountContainer>
                        <Button classname='custom-btn'>Купить</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    );
};

export default ProductPage;