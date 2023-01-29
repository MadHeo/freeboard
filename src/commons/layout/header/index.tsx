import styled from "@emotion/styled";

export default function Header() {
  const HeaderBox = styled.div`
    height: 152px;
    width: 1920px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 360px 0px 360px;
  `;

  const LogoBox = styled.div``;

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
    color: black;
    background-color: white;
    border: 0px;
    cursor: pointer;
  `;
  const SignUpButton = styled.button`
    width: 92px;
    height: 44px;
    background-color: #ffd600;
    border-radius: 10px;
    border: 0px;
    cursor: pointer;
  `;

  return (
    <>
      <HeaderBox>
        <LogoBox>
          <img src="/image/img_codecamp_logo.png" alt="" />
        </LogoBox>
        <LoginBox>
          <LoginButton>로그인</LoginButton>
          <SignUpButton>회원가입</SignUpButton>
        </LoginBox>
      </HeaderBox>
    </>
  );
}
