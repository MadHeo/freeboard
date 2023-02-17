import styled from "@emotion/styled";
import React from "react";
import ReactPlayer from "react-player/lazy";

export const Wrapper = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainBox = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  margin: 80px 102px 100px 102px;
  background-color: #e6daff;
`;

export const BoardWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 102px 80px 102px;
  background-color: white;
`;

export const BoardHeadWrapper = styled.div`
  width: 996px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 80px 102px 20px 102px;
`;

export const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  margin-right: 16.67px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProfileWriterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ProfileName = styled.div`
  color: black;
  font-size: 24px;
  font-weight: 500;
`;
export const ProfileDate = styled.div`
  color: rgba(130, 130, 130, 1);
  font-size: 16px;
  font-weight: 400;
`;
export const ProfileLeftBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProfileRightBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileLinkBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: 0px;
  background-color: white;
`;

export const ProfileLocationBtn = styled.button`
  height: 32px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0px;
  position: relative;
  background-color: white;
`;

export const ProfileAddressTextBox = styled.div`
  width: 376px;
  height: 64px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  position: absolute;
  bottom: 42px;
  right: 16px;
  background-color: #4f4f4f;
  padding: 8px 16px 8px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: end;
  /* visibility: visible; */
`;

export const ProfileAddressText1 = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

export const ProfileAddressText2 = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

export const ProfileAddressTextBoxTail = styled.span`
  position: absolute;
  bottom: -8px;
  right: 0px;
  border-top: 8px solid #4f4f4f;
  border-right: 12px solid #4f4f4f;
  border-bottom: 8px solid rgb(0, 0, 0, 0);
  border-left: 12px solid rgb(0, 0, 0, 0);
`;

export const DivideLine = styled.div`
  width: 996px;
  border: 1px solid rgba(189, 189, 189, 1);
  margin: 0px 102px;
`;

export const BoardBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 996px;
  margin: 80px 102px 162px 102px;
`;

export const BoardTitleBox = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  align-self: flex-start;
`;

export const BoardTitleContent = styled.p``;

export const BoardImageBox = styled.div`
  margin-bottom: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const BoardImageContent = styled.img`
  width: 600px;
  height: 350px;
  margin-bottom: 30px;
`;

export const BoardContentBox = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 120px;
  align-self: flex-start;
`;

export const BoardContent = styled.span`
  text-align: left;
`;

export const BoardYoutubeBox = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BoardYoutubeContent = styled(ReactPlayer)`
  width: 100%;
  height: 100%;
`;

export const BoardFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 51px;
  margin: 0px 102px 80px 102px;
`;

export const FooterBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FooterBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LikeButton = styled.button`
  color: #ffd600;
  width: 24px;
  height: 24px;
  background-image: url("/image/icon_thumb_up.png");
  background-color: white;
  border: 0px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  color: #ffd600;
  font-size: 18px;
  font-weight: 400;
`;

export const UnLikeButton = styled.button`
  color: #ffd600;
  width: 24px;
  height: 24px;
  background-image: url("/image/icon_thumb_down.png");
  background-color: white;
  border: 0px;
  cursor: pointer;
`;

export const UnLikeCount = styled.div`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
`;

export const ButtonWrapper = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const ListButton = styled.button`
  width: 179px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  background-color: #ff5c00;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

export const EditButton = styled.button`
  width: 179px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  background-color: #ff5c00;
  border-radius: 5px;
  margin-left: 24px;
  cursor: pointer;
  color: white;
`;

export const DeleteButton = styled.button`
  width: 179px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  margin-left: 24px;
  background-color: #646464;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;
