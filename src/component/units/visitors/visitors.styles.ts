import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 1200px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputBox = styled.div`
  width: 1200px;
  height: 100px;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
`;

export const NameBox = styled.div`
  width: 20%;
  height: 100px;
  border: 1px solid blue;
  color: white;
  font-size: 25px;
  font-weight: 700;
  background-color: purple;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ContentsBox = styled.div`
  width: 80%;
  height: 100px;
  border: 1px solid blue;
  font-size: 20px;
  font-weight: 700;
  background-color: plum;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 0px 0px 0px 20px;
`;
