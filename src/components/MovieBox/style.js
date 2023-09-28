import styled from "styled-components";

export const Content = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 3rem 4rem;
  background-color: 1d1c3b;
  box-shadow: 32.8387px 24.5482px 79px 
    rgba(0, 0, 0, 0.15), 23.8851px 17.855px 53.2479px 
    rgba(0, 0, 0, 0.121406), 16.6246px 12.4276px 34.4391px 
    rgba(0, 0, 0, 0.10125), 10.9035px 8.15079px 21.3701px 
    rgba(0, 0, 0, 0.0867188), 6.56775px 4.90965px 12.8375px 
    rgba(0, 0, 0, 0.075), 3.46346px 2.58907px 7.6377px 
    rgba(0, 0, 0, 0.0632813), 1.4367px 1.07399px 4.56719px 
    rgba(0, 0, 0, 0.04875), 0.333519px 0.249318px 2.42246px 
    rgba(0, 0, 0, 0.0285938);

  // :hover {
  //   transform: scale(1.05);
  // }
`;

export const Image = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

export const Info = styled.div`
  width: auto
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const Rating = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: .5rem;
`;

export const Favorite = styled.button`
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: 1.8rem;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  text-align: justify;
  color: #ffffff;
`;