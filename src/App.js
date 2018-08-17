import React, { Component } from 'react'
import styled from 'styled-components'

import TopNavContainer from './Components/layouts/TopNav/Container'
import Routes from './Components/Routes'


const RootWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto 50px;
`;

const App = () => (
  <RootWrapper>
    <TopNavContainer />

    <Routes />
  </RootWrapper>
)


export default App