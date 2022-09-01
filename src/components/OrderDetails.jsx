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
  text-align: center;
  font-weight: normal;
`;
const Info = styled.div`
`;
const Order = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  background-color: lavender;
  margin: 1em;
  border-radius: 10px;
  max-height: 100%;
  font-weight: normal;
`;
const OrderDetail = styled.div`
  display: flex;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductId = styled.span`
    font-weight: normal;
`;

const ProductSize = styled.span`
font-weight: normal`;
const OrderButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`;
export const OrderDetails = ({item}) => {
    const [modalActive, setModalActive] = useState(false);
    const [orderInfo, setOrderInfo] = useState([]);
    useEffect(async ()=>{
        const response=await axios.get(`http://localhost:3000/user/order_records/${item.id}`)
        setOrderInfo(response.data);
        // console.log(response.data);
    },[item])
    return (
       <Container>
           <OrderButton onClick={() => setModalActive(true)}>Подробнее</OrderButton>
           <Modal active={modalActive} setActive={setModalActive}>
          <Info>
              {orderInfo.map((orderExtra,i) => (
                  <Order key={i}>
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