import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from '@mui/icons-material';
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "../api/axios";
import {Modal} from "./Modal";
import ProductPage from "./ProductPage";

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
  max-height: 100%;
  max-width: 100%;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
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
  color: whitesmoke;
  margin-top: 0.75em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 40%;
`;
const ImgContainer = styled.div`
  margin-top: 0.5em;
  max-height: 60%;
 justify-items: center;
  align-items: center;
display: flex;
`;

const Product = ({ item }) => {
    const [modalActive, setModalActive] = useState(false);
    const [product, setProduct] = useState({});
    const handleClick = () => { }

    useEffect(async ()=>{
        const response=await axios.get(`/products/${item.id}`)
        console.log("Product",response.data)
        setProduct(response.data);
    },[item])
    return (
        <Container>
            <ProductPage item={product} key={product.id} />
            <ImgContainer>
                <div><Image alt='товар' onClick={() => setModalActive(true)} src={item.imageUrl}/></div>
            </ImgContainer>
            <InfoContainer>
                <div>
                    <Title>{item.name}</Title>
                    <Desc>{item.price}🪙</Desc>
                </div>
                <div>
                    <Button onClick={handleClick} className='custom-btn'>Купить</Button>
                </div>
            </InfoContainer>
            <Modal active={modalActive} setActive={setModalActive}>
                <div>{item.id}</div>
            </Modal>
        </Container>
    );
};

export default Product;