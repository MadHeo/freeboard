import styled from "@emotion/styled";

export const MainBox = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageBox = styled.div`
  display: flex;
  width: 1000px;
  flex-direction: row;
  justify-content: space-between;

  img {
    display: flex;
    width: 450px;
    height: 350px;
    flex-direction: column;
  }
`;

export const MyButton = styled.button`
  display: flex;
  width: 1000px;
  height: 40px;
  flex-direction: column;
  border: 2px solid lightgreen;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  margin-bottom: 20px;
  cursor: pointer;
`;
