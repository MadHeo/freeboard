import styled from "@emotion/styled";

export const MainBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  background-color: #9745ff;
`;

export const SubBox = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #9745ff;
`;

export const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
  margin-bottom: 100px;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  color: #838383;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 0px 50px;
  margin-bottom: 40px;
  border: 0px;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: white;
  background-color: #ea6cff;
  border-radius: 10px;
  margin-bottom: 40px;
  border: 0px;
  cursor: pointer;
  :hover {
    background-color: #e12cff;
  }
  :active {
    background-color: #dd11ff;
  }
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: black;
  background-color: #f5b9ff;
  border-radius: 10px;
  border: 0px;
  cursor: pointer;

  :hover {
    background-color: #ed82ff;
  }
  :active {
    background-color: #e755ff;
  }
`;
