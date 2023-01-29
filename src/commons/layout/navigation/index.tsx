import styled from "@emotion/styled";

export default function Navigation() {
  const MainBox = styled.div`
    width: 1920px;
    height: 64px;
    background-color: #ffd600;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const ButtonBox = styled.div`
    width: 1920px;
    height: 64px;
    background-color: #ffd600;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
      color: white;
      margin: 0px 40px 0px 40px;
    }
  `;

  const Button = styled.button`
    font-size: 18px;
    font-weight: 500;
    color: #ab9000;
    border: 0px;
    background: none;
    cursor: pointer;

    :hover {
      font-weight: 700;
      color: black;
    }
  `;

  return (
    <>
      <MainBox>
        <ButtonBox>
          <Button>자유게시판</Button>
          <span>|</span>
          <Button>중고마켓</Button>
          <span>|</span>
          <Button>마이페이지</Button>
        </ButtonBox>
      </MainBox>
    </>
  );
}