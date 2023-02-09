import { IStyleCompleteButton } from "./BoardWrite.type";
import styled from "@emotion/styled";
import { Button, Modal } from "antd";

//공통영역
export const MainBox = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  background-color: #e6daff;
  border-radius: 10px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  margin: 80px 102px 100px 102px;
`;

//write board 영역
export const MyTitle = styled.div`
  color: black;
  font-weight: 700;
  font-size: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
`;

export const SubTitle = styled.div`
  color: black;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  margin-bottom: 16px;
`;

export const DoubleInput = styled.div`
  display: flex;
  width: 996px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DbInputBox = styled.div`
  display: flex;
  width: 48.5%;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0px 0px 0px;
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  flex-direction: column;
  margin: 15px 0px 0px 0px;
`;

export const InputBar = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  height: 52px;
  border: 1px solid rgba(189, 189, 189, 1);
  padding-left: 16px;
  border-radius: 10px;
`;

export const InputBarEmpty = styled.input`
  font-size: 16px;
  height: 52px;
  border: 1px solid rgba(189, 189, 189, 1);
  padding-left: 16px;
  margin-bottom: 30px;
  border-radius: 10px;
`;

export const BigInputBox = styled.div`
  width: 100%;
  height: 520px;
  margin: 15px 0px 0px 0px;
`;

export const BigInputBar = styled.textarea`
  width: 996px;
  height: 480px;
  font-size: 16px;
  text-align: left;
  resize: none;
  padding: 14px 0px 0px 16px;
  border: 1px solid rgba(189, 189, 189, 1);
  border-radius: 10px;
`;

export const AddressBox = styled.div`
  display: flex;
  width: 100%;
  height: 92px;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0px 16px 0px;
`;

export const AddressInputBox = styled.div`
  display: flex;
  height: 92px;
  flex-direction: row;
`;

export const AddressInputBar = styled.input`
  height: 52px;
  width: 77px;
  border: 1px solid rgba(189, 189, 189, 1);
  font-size: 16px;
  text-align: center;
  border-radius: 10px;
`;

export const AddressButton = styled(Button)`
  background-color: gray;
  color: white;
  width: 124px;
  height: 52px;
  margin-left: 16px;
  font-size: 16px;
  :hover {
    background-color: #9c6dff;
  }
`;

export const AddressModal = styled(Modal)`
  color: white;
  width: 124px;
  height: 52px;
  margin-left: 16px;
  font-size: 16px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PictureBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;

export const PictureButton = styled.button`
  background-color: #eeeeee;
  color: black;
  width: 78px;
  height: 78px;
  margin: 0px 24px 0px 0px;
  text-align: center;
  border: 0px;
`;

export const PictureText = styled.span`
  font-size: 12px;
  font-weight: 500;
  display: block;
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
  accent-color: #ffd600;
`;

export const CompleteButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 52px;
  margin: 40px 0px 0px 0px;
`;

export const CompleteButton = styled.button`
  background-color: ${(props: IStyleCompleteButton) =>
    props.IsActive ? "gray" : "gray"};
  color: ${(props) => (props.IsActive ? "white" : "white")};
  width: 179px;
  border: 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  :hover {
    background-color: #9c6dff;
  }
`;

export const HiddenError = styled.div`
  color: red;
  font-size: 16px;
  height: 25px;
`;
