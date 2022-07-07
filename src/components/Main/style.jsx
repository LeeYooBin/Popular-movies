import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #1D1C3B;
  color: #FFF;
  font-family: 'Prompt', sans-serif;
  width: 100%;
  min-height: 100vh;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Movies = styled.section`
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 70%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const heartStyle = {
  color: 'red',
  cursor: 'pointer',
  'font-size': '0.85em'
}