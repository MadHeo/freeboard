import styled from "@emotion/styled";

export const MainBox = styled.div`
  display: flex;
  width: 1920px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListBox = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const TitleRow = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  height: 52px;
  border-bottom: 1px solid #bdbdbd;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  span:nth-of-type(1) {
    width: 15%;
  }

  span:nth-of-type(2) {
    width: 55%;
  }

  span:nth-of-type(3) {
    width: 15%;
  }

  span:nth-of-type(4) {
    width: 15%;
  }
`;

export const ListRow = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  height: 52px;
  border-bottom: 1px solid #bdbdbd;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  span:nth-of-type(1) {
    width: 15%;
  }

  span:nth-of-type(2) {
    width: 55%;
    :hover {
      text-decoration: underline;
    }
    cursor: pointer;
  }

  span:nth-of-type(3) {
    width: 15%;
  }

  span:nth-of-type(4) {
    width: 15%;
  }
`;

export const FooterWrapper = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
`;

export const BoardWriteButton = styled.button`
  width: 171px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  :hover {
    box-shadow: 1px 1px 5px 1px black;
  }
  cursor: pointer;

  span {
    margin-left: 11px;
  }
`;

export const PageNumberBox = styled.div`
  width: 112px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  font-size: 16px;
  font-weight: 700;

  button {
    background-color: white;
    border: 0px;
    :hover {
      text-decoration: underline;
    }
    cursor: pointer;
  }
`;
