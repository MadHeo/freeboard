import styled from "@emotion/styled";
import { Router, useRouter } from "next/router";
const HeaderBox = styled.div`
  height: 152px;
  width: 1920px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 360px 0px 360px;
`;

const LogoBox = styled.div`
  img {
    cursor: pointer;
    height: 70px;
  }
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`;

const LoginButton = styled.button`
  width: 92px;
  height: 44px;
  margin-right: 10px;
  background-color: #e5e5e5;
  border-radius: 10px;
  color: #1b1b1b;
  border: 0px;
  cursor: pointer;
  :active {
    background-color: #ca95ff;
  }
`;
const SignUpButton = styled.button`
  width: 92px;
  height: 44px;
  background-color: #8811ff;
  border-radius: 10px;
  border: 0px;
  color: white;
  cursor: pointer;
  :active {
    background-color: #ca95ff;
  }
`;

export default function Header() {
  const router = useRouter();

  const onClickHome = () => {
    router.push("/boards/listPage");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignUp = () => {
    router.push("/signup");
  };

  return (
    <>
      <HeaderBox>
        <LogoBox>
          <img
            src="/image/img_codecamp_logo.png"
            alt=""
            onClick={onClickHome}
          />
        </LogoBox>
        <LoginBox>
          <LoginButton onClick={onClickLogin}>로그인</LoginButton>
          <SignUpButton onClick={onClickSignUp}>회원가입</SignUpButton>
        </LoginBox>
      </HeaderBox>
    </>
  );
}
