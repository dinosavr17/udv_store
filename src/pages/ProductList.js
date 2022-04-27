import styled from "styled-components";
import Products from "../components/Products";
import { mobile } from "../responsive";
import {useLocation} from "react-router-dom";
import {useState} from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Фильтры:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>Цвет</Option>
                        <Option>Белый</Option>
                        <Option>Чёрный</Option>
                        <Option>Фиолетовый</Option>
                        <Option>Серый</Option>
                        <Option>Зелёный</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>Размер</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>Универсальный</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Сортировать:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Новые</Option>
                        <Option value="asc">По возрастанию</Option>
                        <Option value="desc">По убыванию</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
        </Container>
    );
};

export default ProductList;