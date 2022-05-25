import React, { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import './login.css';
import axios from "../api/axios";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import registerLogo from '../images/logotype.svg'
import styled from "styled-components";
import {mobile} from "../responsive";
import {OrderDetails} from "./OrderDetails";
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

const BalanceIncrease = () => {
    const [users,setUsers] = useState({});
    const [increaseBalance,setIncreaseBalance] = useState({});
    const [balance, setBalance] = useState({});
    const changeValue = (event) => {
        setBalance({...balance, [event.target.name]:event.target.value})
    }
    useEffect(async ()=>{
        const response=await axios.get(
            'http://localhost:3000/admin/info',
            {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userData")).accessToken}`,
                },
            }
        );
        setUsers(response.data);
        console.log(response.data);
    },[])
    let userArray = [];
    const result = Object.keys(users).map(key => {
        // console.log(key); // 👉️ name, country
        // console.log(users[key]); // 👉️ James, Chile
        userArray = users[key];
        return {[key]: users[key]};
    });
    console.log('Ага',userArray);
    const handleClick = (event, emailUser) => {
        // setBalance({...balance, [event.target.name]:event.target.value})
        console.log('лог',emailUser);
        const userBalance = balance[emailUser];
        setBalance({...balance, [emailUser]:''});

    }
    return (
        <section className="login_section">
            <div className="card">
                <Container>
                    <Wrapper>
                        <Title>
                            <div>Пользователи:</div>
                        </Title>
                        <Info>
                            {userArray.map((user) => (
                                <Order key={user.uuid}>
                                    <OrderDetail>
                                        <Details>
                                            <CreationDate>
                                                <b>Email: {user.email}</b>
                                            </CreationDate>
                                        </Details>
                                    </OrderDetail>
                                    <PriceDetail>
                                        Баланс:
                                        <ProductAmountContainer>
                                            {user.userBalance}🪙
                                        </ProductAmountContainer>
                                            <input key={user.uuid}
                                                   type="text"
                                                   id="increase"
                                                   required
                                                   onChange={changeValue}
                                                   value={balance[user.email]||''}
                                                   name={user.email}
                                            />
                                            <button onClick={(event)=>handleClick(event,user.email)} className="login_btn">Начислить</button>
                                    </PriceDetail>
                                </Order>
                            ))}
                        </Info>
                    </Wrapper>
                </Container>
            </div>
        </section>
    )
}

export default BalanceIncrease