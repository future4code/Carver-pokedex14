import styled from "styled-components";

export const Card = styled.div`
  width: 60%;
  height: flex;
  display: flex;
  flex-direction: column;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 0 1em gray;
  text-align: center;
  @media (min-width: 768px) {
    width: 29%;
  }
  @media (min-width: 1000px) {
    width: 21.5%;
  }

  img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
  }
`;

export const Buttons = styled.div`
  text-align: center;
  width: 100%;
  height: flex;
  flex-direction: row;

  button {
    height: 30px;
    margin: 10px 0;
  }
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
