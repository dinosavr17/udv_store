import React, { useState, useEffect } from 'react';
import './login.css';
import axios from "../api/axios";
import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import {mobile} from "../responsive";
const Container = styled.div`
  border-color: #222222;
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

const CreateProduct = () => {
    // console.log('Ага',userArray);
    // const handleClick = async (event, userId) => {
    //     // setBalance({...balance, [event.target.name]:event.target.value})
    //     console.log('лог',);
    //     const preUserBalance = balance[userId];
    //     console.log('Баланс', preUserBalance);
    //     let userBalance = Number(preUserBalance);
    //     let profile = {};
    //     profile = {...id,userBalance};
    //     console.log(profile);
    //     try {
    //         console.log(JSON.stringify(profile));
    //         const response = await axios.post('http://localhost:3000/admin/user_balance',
    //             JSON.stringify(profile),
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //                     'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userData")).accessToken}`,
    //                 },
    //             },
    //         );
    //         console.log(response?.data);
    //     } catch (err) {}
    // };
    return (
        <section className="login_section">
            <div className="card">
                <Container>
                    <Wrapper>
                        <Title>
                            <div>МИША БАЗАРНАЯ БАБКА:</div>
                        </Title>
                        <Info>
                            <Order>
                                <nav>
                                        <NavLink to='/adm-add'>
                                    <button>Добавить товар</button>
                                        </NavLink>
                                    <NavLink to='/adm-remove'>
                                    <button>
                                        Удалить товар
                                </button>
                                        </NavLink>
                                    <NavLink to='/adm-show'>
                                <button>
                                    Посмотреть товары
                                </button>
                                        </NavLink>
                                    </nav>
                            </Order>
                        </Info>
                    </Wrapper>
                </Container>
            </div>
        </section>
    )
}

export default CreateProduct