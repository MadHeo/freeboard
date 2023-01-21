import styled from "@emotion/styled";

export const Box = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainBox = styled.div`
  width: 1200px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TitleBox = styled.div`
  height: 27px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px 0px 40px 0px;

  span :nth-child(1) {
    margin-right: 12px;
    display: block;
  }
`;

export const InfoInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 500;
  color: #828282;
  margin-bottom: 20px;
`;

export const WriterInputBox = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  padding-left: 20px;
`;
export const PasswordInputBox = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 20px;
`;

export const RatingBox = styled.input`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  border: 1px solid #bdbdbd;
  margin-left: 20px;
  padding-left: 20px;
`;

export const WriteBox = styled.div`
  width: 1200px;
  height: 160px;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  margin-bottom: 40px;
`;

export const WriteContent = styled.textarea`
  width: 1200px;
  height: 108px;
  padding: 20px 0px 0px 20px;
  resize: none;
  display: block;
  border: 0px;
`;

export const WriteCounter = styled.div`
  height: 52px;
  padding: 0px 0px 0px 20px;
  position: relative;
  border-top: 1px solid #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EnterButton = styled.button`
  width: 91px;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  color: white;
  background-color: black;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const CommentBox = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const CommentProfileBox = styled.div`
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 12px;
`;

export const CommentContentBox = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
`;

export const CommentHandleBox = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
`;

export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;
  margin-bottom: 4px;
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 500;
  margin-right: 18px;
`;

export const Rating = styled.img`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
`;

export const Content = styled.div`
  height: 48px;
  font-size: 16px;
  font-weight: 400;
`;

export const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
`;
