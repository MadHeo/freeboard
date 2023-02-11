import styled from "@emotion/styled";

export const SearchBox = styled.div`
  width: 300px;
  height: 35px;
  border: 1px gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e6daff;
  align-self: flex-end;
  border-radius: 10px;
  margin-bottom: 40px;
`;
export const SearchIcon = styled.span`
  width: 40px;
  height: 100%;
  background-color: #e6daff;
  font-size: 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const SearchInput = styled.input`
  width: 260px;
  border: 0px;
  height: 90%;
  background-color: #e6daff;
  font-size: 20px;
  color: #292929;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  width: 80px;
  border: 0px;
  height: 100%;
  background-color: #e6daff;
  font-size: 20px;
  color: #292929;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: white;
  }
`;
