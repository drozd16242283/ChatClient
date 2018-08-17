import styled from 'styled-components'

const FormHeader = styled.div`
  display: flex;
  background-color: #6fb8dc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
`;

const FormHeaderText = styled.strong`
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  font-size: 1.7em;
  align-self: center;
  width: 100%;
  margin: 0;
  text-align: center;
  font-weight: 500;
`;

export {
  FormHeader,
  FormHeaderText
}