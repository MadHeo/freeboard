import styled from "@emotion/styled";

export const Box = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainBox = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
