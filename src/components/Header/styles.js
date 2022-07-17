import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
  }

  button {
    border-width: 0;
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 16px;
    font-weight: bold;
    font-size: 14px;
    color: white;
    &:hover {
      background-color: #2c5290;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
