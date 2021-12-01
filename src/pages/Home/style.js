import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  text-align: center;
  padding: 30px;
  border-radius: 5px;
  border: 2px solid #818181;

  h2 {
    margin: 10px;
  }
  h3 {
    margin-top: 10px;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
