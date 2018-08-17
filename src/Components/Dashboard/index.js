import React from 'react'
import styled from 'styled-components'

import LinkButton from '../layouts/Buttons/LinkButton'


const MainWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MainText = styled.span`
  font-size: 30px;
  font-style: italic;
`;

const Link = styled.a`
  width: 100px;
  margin: 0 auto;
  margin-top: 50px;
`.withComponent(LinkButton);

const Dashboard = () => (
  <MainWrapper>
    <MainText>Ласкаво просимо!</MainText>
    <MainText>Для перегляду чату авторизуйтесь за посиланням:</MainText>
    <Link to='/signin'>Увійти</Link>
  </MainWrapper>
)

export default Dashboard