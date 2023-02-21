import styled from "@emotion/styled";
import { FaPen, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroller";

export const MainBox = styled.div`
  display: flex;
  width: 1920px;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const ListBox = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: center;
`;

export const Scroll = styled(InfiniteScroll)`
  display: flex;
  width: 1200px;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid red;
`;

export const CardsBox = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ProductCard = styled.article`
  width: calc(20% - 2%);
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
`;

export const ProductCardImageBox = styled.article`
  width: 100%;
  height: 60%;
  border-radius: 10px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ProductCardTextBox = styled.article`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 20px;
  background-color: #a197ff;

  span:nth-child(1) {
    font-size: 18px;
    font-weight: 900;
  }
  span:nth-child(2) {
    color: #222222;
  }
  span:nth-child(3) {
    color: #4f4f4f;
  }
  span:nth-child(4) {
    color: #4f4f4f;
  }
`;

export const TitleRow = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  height: 52px;
  border-radius: 10px;
  background-color: #9c6dff;

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
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  background-color: #e6daff;
  margin-top: 10px;

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

export const PageNumberBox = styled.div`
  width: 400px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #9745ff;
  font-size: 16px;
  font-weight: 700;

  button {
    border: 0px;
    background-color: #9745ff;
    color: white;
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
