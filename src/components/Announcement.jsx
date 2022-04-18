import React from "react";
import styled from 'styled-components'
const Container = styled.div`
  height: 30px;
  background-color: #6d1b7b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const Announcement = () => {
    return (
        <Container>Тут можно писать какую-нибудь хрень касаемо работы магазина</Container>
    )

}

export default Announcement;