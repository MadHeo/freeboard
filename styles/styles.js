import styled from "@emotion/styled";

//공통영역
export const MainBox = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  box-shadow: 0px 4px 20px black;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  margin: 80px 102px 100px 102px;
`;

//write board 영역
export const MyTitle = styled.div`
  color: black;
  font-weight: 700;
  font-size: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
`;

export const SubTitle = styled.div`
  color: black;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  margin-bottom: 16px;
`;

export const DoubleInput = styled.div`
  display: flex;
  width: 996px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DbInputBox = styled.div`
  display: flex;
  width: 48.5%;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0px 0px 0px;
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  flex-direction: column;
  margin: 15px 0px 0px 0px;
`;

export const InputBar = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  height: 52px;
  border: 1px solid rgba(189, 189, 189, 1);
  padding-left: 16px;
`;

export const InputBarEmpty = styled.input`
  font-size: 16px;
  height: 52px;
  border: 1px solid rgba(189, 189, 189, 1);
  padding-left: 16px;
  margin-bottom: 30px;
`;

export const BigInputBox = styled.div`
  width: 100%;
  height: 520px;
  margin: 15px 0px 0px 0px;
`;

export const BigInputBar = styled.textarea`
  width: 996px;
  height: 480px;
  font-size: 16px;
  text-align: left;
  resize: none;
  padding: 14px 0px 0px 16px;
  border: 1px solid rgba(189, 189, 189, 1);
`;

export const AddressBox = styled.div`
  display: flex;
  width: 100%;
  height: 92px;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0px 16px 0px;
`;

export const AddressInputBox = styled.div`
  display: flex;
  height: 92px;
  flex-direction: row;
`;

export const AddressInputBar = styled.input`
  height: 52px;
  width: 77px;
  border: 1px solid rgba(189, 189, 189, 1);
  font-size: 16px;
  text-align: center;
`;

export const SearchBox = styled.button`
  background-color: black;
  color: white;
  width: 124px;
  height: 52px;
  margin-left: 16px;
  font-size: 16px;
`;

export const PictureBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const RadioBox = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 159px;
`;

export const RadioButton = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #ffd600;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PictureButton = styled.button`
  background-color: rgba(189, 189, 189, 1);
  color: black;
  width: 78px;
  height: 78px;
  margin: 0px 24px 0px 0px;
  text-align: center;
  border: 0px;
`;

export const PictureText = styled.span`
  font-size: 12px;
  font-weight: 500;
  display: block;
`;

export const CompleteButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 52px;
  margin: 40px 0px 0px 0px;
`;

export const CompleteButton = styled.button`
  background-color: rgba(255, 214, 0, 1);
  color: black;
  width: 179px;
  border: 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;

export const HiddenError = styled.div`
  color: red;
  font-size: 16px;
  height: 25px;
`;

//Detail boards 영역
export const BoardWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 20px 0px black;
  margin: 80px 102px 20px 102px;
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
`;

export const ProfileLocationBtn = styled.button`
  /* width: 32px; */
  height: 32px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0px;
  position: relative;
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
  /* position: relative;
  display: inline-block; */
`;

export const BoardImageContent = styled.img`
  /* display: block; */
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
  width: 486px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BoardYoutubeContent = styled.iframe`
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

export const FooterContentLikeImage = styled.img`
  color: #ffd600;
`;

export const FooterContentLikeText = styled.div`
  color: #ffd600;
  font-size: 18px;
  font-weight: 400;
`;

export const FooterContentUnLikeImage = styled.img`
  color: #828282;
`;

export const FooterContentUnLikeText = styled.div`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
`;
