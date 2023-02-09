import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 1200px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const VisitBox = styled.div`
  width: 1200px;
  height: 100px;
  display: flex;
  flex-direction: row;
`;

export const NameBox = styled.div`
  width: 20%;
  height: 100px;
  border: 1px solid gray;
  color: white;
  font-size: 25px;
  font-weight: 700;
  background-color: purple;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const DateBox = styled.div`
  width: 20%;
  height: 100px;
  border: 1px solid gray;
  color: white;
  font-size: 5px;
  font-weight: 700;
  background-color: purple;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ContentsBox = styled.div`
  width: 60%;
  height: 100px;
  border: 1px solid gray;
  font-size: 20px;
  font-weight: 700;
  background-color: plum;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 0px 0px 0px 20px;
`;

export const InputBox = styled.div`
  width: 1200px;
  height: 100px;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
`;

export const InputName = styled.input`
  width: 20%;
  height: 100px;
  border: 1px solid gray;
  color: white;
  font-size: 25px;
  font-weight: 700;
  background-color: purple;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 0px 20px;
`;

export const InputContents = styled.input`
  width: 70%;
  height: 100px;
  font-size: 20px;
  font-weight: 700;
  background-color: plum;
  border: 1px solid gray;
  align-items: center;
  padding: 0px 0px 0px 20px;
`;

export const WriteButton = styled.button`
  width: 10%;
  height: 100px;
  font-size: 20px;
  font-weight: 700;
  background-color: blue;
  color: white;
  cursor: pointer;
  :hover {
    background-color: darkblue;
  }

  :active {
    background-color: purple;
  }
`;

export const EditButton = styled.button`
  width: 10%;
  height: 100px;
  font-size: 20px;
  font-weight: 700;
  background-color: blue;
  color: white;
  cursor: pointer;
  :hover {
    background-color: darkblue;
  }

  :active {
    background-color: purple;
  }
`;

export const DeleteButton = styled.button`
  width: 10%;
  height: 100px;
  font-size: 20px;
  font-weight: 700;
  background-color: red;
  color: white;
  cursor: pointer;
  :hover {
    background-color: darkblue;
  }

  :active {
    background-color: purple;
  }
`;
