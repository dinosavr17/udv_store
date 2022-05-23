import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import axios from "../api/axios";
import {OrderHistory} from "./OrderHistory";
import {Modal} from './Modal'
const Container = styled.div`
  border-color: #222222;
  border-size: 5px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Info = styled.div`
  flex: 3;
`;
const Order = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  background-color: lavender;
  margin: 1em;
  border-radius: 10px;
`;
const OrderDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CreationDate = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
export const OrderDetails = ({item}) => {
    const [modalActive, setModalActive] = useState(false);
    const [orderInfo, setOrderInfo] = useState([]);
    useEffect(async ()=>{
        const response=await axios.get(`http://localhost:3000/user/order_records/${item.id}`)
        setOrderInfo(response.data);
        console.log(response.data);
    },[item])
    return (
       <Container>
           <OrderButton onClick={() => setModalActive(true)}>Подробнее</OrderButton>
           <Modal active={modalActive} setActive={setModalActive}>
          <Info>
              {orderInfo.map((orderExtra) => (
                  <Order>
                      <Title>ID Заказа:{orderExtra.orderId}</Title>
                      <OrderDetail>
                          <Details>
                              <ProductId>
                                  <b>Товар: {orderExtra.productId}</b>
                              </ProductId>
                              <ProductSize>
                                  <b>Количество товара:{orderExtra.quantity}</b>
                              </ProductSize>
                          </Details>
                      </OrderDetail>
                  </Order>
                  ))}
          </Info>
           </Modal>
       </Container>
    )
}