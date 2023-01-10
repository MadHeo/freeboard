import styled from "@emotion/styled";

export const MainBox = styled.div`
  display: flex;
  width: 1200px;
  border: 1px solid black;
  flex-direction: column;
  box-shadow: 2px 2px 10px black;
`;

export const MyTitle = styled.div`
  color: black;
  font-weight: 900;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
`;

export const SubTitle = styled.div`
  color: black;
  font-weight: 900;
  font-size: 16px;
  text-align: left;
`;

export const DoubleInput = styled.div`
  display: flex;
  width: 996px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  margin: 80px 101px 100px 101px;
`;

export const DbInputBox = styled.div`
  display: flex;
  width: 48%;
  height: 92px;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0px 0px 0px;
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  height: 92px;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0px 0px 0px;
`;

export const InputBar = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  height: 52px;
`;

export const BigInputBox = styled.div`
  display: flex;
  width: 100%;
  height: 520px;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0px 0px 0px;
`;

export const BigInputBar = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  height: 480px;
`;

export const AddressBox = styled.div`
  display: flex;
  width: 100%;
  height: 92px;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0px 0px 0px;
`;

export const AddressInputBox = styled.div`
  display: flex;
  height: 92px;
  flex-direction: row;
  margin: 16px 16px 16px 0px;
`;

export const AddressInputBar = styled.input`
  height: 52px;
  width: 77px;
`;

export const SearchBox = styled.button`
  background-color: black;
  color: white;
  width: 124px;
  height: 60px;
  margin-left: 16px;
`;

export const PictureBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px 0px 0px;
`;

export const RadioBox = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 159px;
`;

export const RadioButton = styled.input`
  width: 20px;
  height: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PictureButton = styled.button`
  background-color: gray;
  color: black;
  width: 78px;
  height: 78px;
  margin: 16px 24px 0px 0px;
  text-align: center;
`;

export const CompleteButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 52px;
  margin: 40px 0px 0px 0px;
`;

export const CompleteButton = styled.button`
  background-color: orange;
  color: black;
  width: 179px;
  border: 0px;
  cursor: pointer;
`;

export const HiddenError = styled.span`
  color: red;
  font-size: 16px;
`;
