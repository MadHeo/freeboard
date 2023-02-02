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
  background-color: #e3b0ff;
  border-radius: 10px;
  color: #1b1b1b;
  border: 0px;
  cursor: pointer;
`;
const SignUpButton = styled.button`
  width: 92px;
  height: 44px;
  background-color: #9200e0;
  border-radius: 10px;
  border: 0px;
  color: white;
  cursor: pointer;
`;

export default function Header() {
  const router = useRouter();

  const onClickHome = () => {
    router.push("/boards/listPage");
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
          <LoginButton>로그인</LoginButton>
          <SignUpButton>회원가입</SignUpButton>
        </LoginBox>
      </HeaderBox>
    </>
  );
}
