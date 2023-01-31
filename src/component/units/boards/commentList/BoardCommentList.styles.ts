import styled from "@emotion/styled";
import React, { useState } from "react";
import { Rate } from "antd";

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
  justify-content: space-between;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
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

export const RatingBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
`;

export const Rating = styled(Rate)``;

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

export const ChangeButton = styled.button`
  background-image: url("/image/icon_penclie.png");
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 0px;
  background-color: white;
  margin-right: 5px;
`;

export const DeleteButton = styled.button`
  background-image: url("/image/icon_XButton.png");
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 0px;
  background-color: white;
`;

export const EditBox = styled.div`
  height: 130px;
  width: 1200px;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px 0px 20px 0px;
`;

export const EditInput = styled.input`
  height: 100%;
  width: 1200px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  padding: 20px 0px 0px 20px;
`;

export const EditButton = styled.button`
  width: 91px;
  height: 100%;
  color: black;
  background-color: yellow;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #bdbdbd;
  cursor: pointer;
`;
