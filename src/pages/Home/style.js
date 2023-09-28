import styled from "styled-components";

export const Content = styled.div`
  padding: 2rem;
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #17162e;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 3.6rem;
  color: #ffffff;
`;

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  color: #ffffff;
`;

export const CheckButton = styled.button`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #ffffff;
`;

export const MoviesWrapper = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
`;