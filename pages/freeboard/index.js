import {
  MyTitle,
  BodyWrapper,
  MainBox,
  SubTitle,
  InputBar,
  DoubleInput,
  InputBox,
  DbInputBox,
  BigInputBox,
  BigInputBar,
  SearchBox,
  AddressBox,
  AddressInputBox,
  AddressInputBar,
  PictureBox,
  PictureButton,
  ButtonBox,
  CompleteButton,
  CompleteButtonBox,
  RadioButton,
  RadioBox,
  HiddenError,
} from "../../../freeboard_frontend/styles/styles";

import { useState } from "react";

export default function Freeboard() {
  //여기는 자바스크립트 쓰는 곳
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPw, setErrorPw] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContent] = useState("");

  function OnChangeName(event) {
    setName(event.target.value);
  }
  function OnChangePw(event) {
    setPw(event.target.value);
  }
  function OnChangeTitle(event) {
    setTitle(event.target.value);
  }
  function OnChangeContent(event) {
    setContent(event.target.value);
  }

  function onClickBtn() {
    if (name === "") {
      setErrorName("필수 입력창 입니다");
    } else {
      setErrorName("");
    }

    if (pw === "") {
      setErrorPw("필수 입력창 입니다");
    } else {
      setErrorPw("");
    }

    if (title === "") {
      setErrorTitle("필수 입력창 입니다");
    } else {
      setErrorTitle("");
    }

    if (content === "") {
      setErrorContent("필수 입력창 입니다");
    } else {
      setErrorContent("");
    }
  }

  return (
    <div>
      <MainBox>
        <div class="title_wrapper">
          <MyTitle>게시물 등록</MyTitle>
        </div>
        <BodyWrapper>
          <DoubleInput>
            <DbInputBox>
              <SubTitle>작성자</SubTitle>
              <InputBar
                placeholder="이름을 입력해주세요"
                onChange={OnChangeName}
              />
              <HiddenError>{errorName}</HiddenError>
            </DbInputBox>
            <DbInputBox>
              <SubTitle>비밀번호</SubTitle>
              <InputBar
                placeholder="비번을 입력해주세요"
                onChange={OnChangePw}
              />
              <HiddenError>{errorPw}</HiddenError>
            </DbInputBox>
          </DoubleInput>
          <InputBox>
            <SubTitle>제목</SubTitle>
            <InputBar
              placeholder="제목을 입력해주세요"
              onChange={OnChangeTitle}
            />
            <HiddenError>{errorTitle}</HiddenError>
          </InputBox>
          <BigInputBox>
            <SubTitle>내용</SubTitle>
            <BigInputBar
              placeholder="내용을 입력해주세요"
              onChange={OnChangeContent}
            />
            <HiddenError>{errorContent}</HiddenError>
          </BigInputBox>
          <AddressBox>
            <SubTitle>주소</SubTitle>
            <AddressInputBox>
              <AddressInputBar placeholder="07250" />
              <SearchBox>우편번호 검색</SearchBox>
            </AddressInputBox>
          </AddressBox>
          <InputBox>
            <InputBar />
          </InputBox>
          <InputBox>
            <InputBar />
          </InputBox>
          <InputBox>
            <SubTitle>유튜브</SubTitle>
            <InputBar placeholder="링크를 입력해주세요" />
          </InputBox>
          <PictureBox>
            <SubTitle>사진 첨부</SubTitle>
            <ButtonBox>
              <PictureButton>Upload</PictureButton>
              <PictureButton>Upload</PictureButton>
              <PictureButton>Upload</PictureButton>
            </ButtonBox>
          </PictureBox>
          <InputBox>
            <SubTitle>메인설정</SubTitle>
            <RadioBox>
              <RadioButton type="radio" /> 유튜브
              <RadioButton type="radio" /> 사진
            </RadioBox>
          </InputBox>
          <CompleteButtonBox>
            <CompleteButton onClick={onClickBtn}>등록하기</CompleteButton>
          </CompleteButtonBox>
        </BodyWrapper>
        <div class="bottom_wrapper"></div>
      </MainBox>
    </div>
  );
}
