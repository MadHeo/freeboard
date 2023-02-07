import styled from "@emotion/styled";
import { FaPen, FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px 0px 40px 0px;
`;

export const BoardWriteButton = styled.button`
  width: 171px;
  height: 52px;
  border: 0px;
  border-radius: 10px;
  background-color: #ff922d;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  :hover {
    box-shadow: 1px 1px 5px 1px black;
  }
  cursor: pointer;

  span {
    margin-left: 11px;
  }
`;

export const PageNumberBox = styled.div`
  width: 400px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #ffca42;
  font-size: 16px;
  font-weight: 700;

  button {
    border: 0px;
    background-color: #ffc52f;
    :hover {
      text-decoration: underline;
    }
    cursor: pointer;
  }
`;

export const IconPrevArrow = styled(FaAngleLeft)`
  cursor: pointer;
`;
export const IconNextArrow = styled(FaAngleRight)`
  cursor: pointer;
`;
export const IconPencil = styled(FaPen)``;
