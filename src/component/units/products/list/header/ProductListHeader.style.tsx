import styled from "@emotion/styled";
import { FaPen, FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const SearchBox = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const BoardWriteButton = styled.button`
  width: 171px;
  height: 52px;
  border: 0px;
  border-radius: 10px;
  background-color: #fff098;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 40px;

  :hover {
    box-shadow: 1px 1px 5px 1px black;
  }
  cursor: pointer;

  span {
    margin-left: 11px;
  }
`;

export const IconPencil = styled(FaPen)``;
