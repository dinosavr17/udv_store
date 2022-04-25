import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from '@mui/icons-material';
import styled from "styled-components";
import React from "react";


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
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
const InfoContainer = styled.div`
  color: black;
  margin-top: 0.75em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 40%;
`;
const ImgContainer = styled.div`
  margin-top: 0.5em;
  height: 70%;
display: flex;
`;

const Product = ({ item }) => {
    return (
        <Container>
            <ImgContainer>
            <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <div>
                    <Title>Продукт</Title>
                    <Desc>Описание</Desc>
                </div>
                <div>
                    <Button className='custom-btn'>Купить</Button>
                </div>
            </InfoContainer>
        </Container>
    );
};

export default Product;