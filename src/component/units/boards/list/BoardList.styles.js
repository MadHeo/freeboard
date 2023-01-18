import styled from "@emotion/styled";

export const MainBox = styled.div`
  display: flex;
  width: 1920px;
  flex-direction: column;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const TitleRow = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  height: 52px;
  border-bottom: 1px solid #bdbdbd;
  border: 1px solid red;
`;

export const TitleNumber = styled.div`
  width: 114px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TitleName = styled.div`
  width: 716px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TitleWriter = styled.div`
  width: 210px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TitleDate = styled.div`
  width: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
`;

export const ListNumber = styled.div`
  width: 114px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  :hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export const ListName = styled.div`
  width: 716px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  :hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export const ListWriter = styled.div`
  width: 210px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  :hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export const ListDate = styled.div`
  width: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  :hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
