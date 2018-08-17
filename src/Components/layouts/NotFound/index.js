import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'


const NotFoundWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 30%;
  transform: translateY(-50%);
`;

const NotFound = ({ location }) => (
  <NotFoundWrapper>
    <h1 style={{ alignSelf: 'center' }}>404</h1>
    <div>Sorry, page <strong>{location.pathname}</strong> was not found!</div>
  </NotFoundWrapper>
)


export default withRouter(NotFound)