import React, {useState} from "react";
import styled from "styled-components";
import axios from "../api/axios";
import {mobile} from "../responsive";
import './adminAdd.css'
import { useForm } from 'react-hook-form';


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

export const AdminAddProduct = () => {
    const [product, setProduct] = useState({});
    var bodyFormData = new FormData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
       console.log(data.file[0]);
       data.file = data.file[0];
       console.log(data.name);
       console.log(data.price);
       console.log(data.amount);
        let imageBlob = resolve => data.file.toBlob(resolve, 'image/png');
        bodyFormData.append('name', data.name);
        bodyFormData.append('price', data.price);
        bodyFormData.append('description', data.description);
        bodyFormData.append('amount', data.amount);
        bodyFormData.append('file', data.file);
        bodyFormData.append("file", imageBlob, "image.png");
        for(let [name, value] of bodyFormData) {
            alert(`${name} = ${value}`); // key1=value1, потом key2=value2
        }
    };
    const OnChange = (e) =>{
        const file = e.target.files[0];
    }
    console.log(errors);
    const handleClick = async () => {
        try {
            console.log(bodyFormData);
            const response = await axios.post('http://localhost:3000/admin/product', bodyFormData,
                {
                    headers: {
                        'Content-Type':  "multipart/form-data",
                        'Access-Control-Allow-Origin': 'http://localhost:3000',
                        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userData")).accessToken}`,
                    },
                },
            );
            console.log(response?.data);
        } catch (err) {}
    };
    return (
        <section className="login_section">
            <div className="card">
                <Container>
                    <Wrapper>
                        <Title>
                            <div>МИША БАЗАРНАЯ БАБКА:</div>
                        </Title>
                        <Info>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" placeholder="name" {...register("name", {required: true, maxLength: 80})} />
                                <input type="text" placeholder="price" {...register("price", {required: true, maxLength: 100})} />
                                <input type="text" placeholder="description" {...register("description", {required: true, maxLength: 1000})} />
                                <input type="text" placeholder="amount" {...register("amount", {})} />
                                <input type="file" placeholder="file" onChange={onchange} {...register("file", {})} />

                                <input type="submit" />
                            </form>
                            <button onClick={handleClick}>Создать продукт</button>
                        </Info>
                    </Wrapper>
                </Container>
            </div>
        </section>
    )

}
export default AdminAddProduct