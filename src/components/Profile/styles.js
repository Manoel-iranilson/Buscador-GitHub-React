import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Photo = styled.img`
  border-radius: 50%;
  width: 35vh;
`;

export const userInfor = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const userdate = styled.div`
  display: flex;
  align-items: center;
`;

export const status = styled.div`
  display: flex;
  margin-top: -10px;
  div {
    margin: 8px;
    text-align: center;
    align-items: center;
  }
`;
