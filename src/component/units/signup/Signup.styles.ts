import styled from "@emotion/styled";

export const MainBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
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
  border: 0px;
`;

export const CheckInputBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ShortInput = styled.input`
  width: 580px;
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
  border: 0px;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  height: 70px;
  font-size: 30px;
  color: #fdc2ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
`;

export const CheckButton = styled.button`
  width: 190px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: white;
  background-color: #ea6cff;
  border-radius: 10px;

  border: 0px;
  cursor: pointer;
  :hover {
    background-color: #e12cff;
  }
  :active {
    background-color: #dd11ff;
  }
`;

export const Division = styled.div`
  width: 700px;
  height: 1.5px;
  margin: 40px 0px 80px 0px;
  background-color: #f5f5f5;
`;

export const TimeBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 80px;
`;

export const CheckInput = styled.input`
  width: 390px;
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
  border: 0px;
`;

export const TimeText = styled.div`
  width: 190px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #ffffff;
  margin-left: 28px;
`;

export const SignUpButton = styled.button`
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

export const NaverButton = styled.button`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: white;
  background-color: #38d600;
  border-radius: 10px;
  margin-bottom: 40px;
  border: 0px;
  cursor: pointer;

  :active {
    background-color: #2ba500;
  }

  img {
    margin-right: 10px;
  }
`;

export const KakaoButton = styled.button`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #404040;
  background-color: #ffe600;
  border-radius: 10px;
  margin-bottom: 40px;
  border: 0px;
  cursor: pointer;

  :active {
    background-color: #c6b200;
  }

  img {
    margin-right: 10px;
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #404040;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin-bottom: 40px;
  border: 0px;
  cursor: pointer;
  :active {
    background-color: #dbdbdb;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;
