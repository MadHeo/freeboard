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
  InputBarEmpty,
  PictureText,
  TextDiv,
} from "../../../styles/styles";

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { StoreWriter } from "@apollo/client/cache/inmemory/writeToStore";
import { useRouter } from "next/router";

const createBoardAPI = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
      youtubeUrl
      images
    }
  }
`;

export default function Freeboard() {
  //여기는 자바스크립트 쓰는 곳
  const [registerBoard] = useMutation(createBoardAPI);
  const [name, setName] = useState();
  const [pw, setPw] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [zipcode, setZipcode] = useState();
  const [address, setAddress] = useState();
  const [addressDetail, setAddressDetail] = useState();
  const [youtube, setYoutube] = useState();
  const [likeCount, setLikeCount] = useState();
  const [dislikeCount, setDisLikeCount] = useState();
  const [date, setDate] = useState();
  const [errorName, setErrorName] = useState(" ");
  const [errorPw, setErrorPw] = useState(" ");
  const [errorTitle, setErrorTitle] = useState(" ");
  const [errorContent, setErrorContent] = useState(" ");
  const router = useRouter();

  //Input에 이벤트 받는 영역
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
  function OnChangeZipcode(event) {
    setZipcode(event.target.value);
  }
  function OnChangeAddress(event) {
    setAddress(event.target.value);
  }
  function OnChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }
  function OnChangeYoutube(event) {
    setYoutube(event.target.value);
  }

  const onClickBtn = async () => {
    //API 영역

    //에러메세지 조건문 영역
    if (name === "") {
      setErrorName("필수 입력창 입니다");
    } else {
      setErrorName(" ");
    }

    if (pw === "") {
      setErrorPw("필수 입력창 입니다");
    } else {
      setErrorPw(" ");
    }

    if (title === "") {
      setErrorTitle("필수 입력창 입니다");
    } else {
      setErrorTitle(" ");
    }

    if (content === "") {
      setErrorContent("필수 입력창 입니다");
    } else {
      setErrorContent(" ");
    }

    if (name && pw && title && content) {
      alert("게시글 등록이 완료 되었습니다 짝짝짝");
      try {
        const boardResult = await registerBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: pw,
              title: title,
              contents: content,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
              youtubeUrl: youtube,
              createdAt: date,
              likeCount: likeCount,
              dislikeCount: dislikeCount,
            },
          },
        });

        console.log(boardResult.data);
        router.push(`/boards/detailPage/${boardResult.data.createBoard._id}`);
      } catch (error) {
        alert("Error");
      }
    }
  };
  //HTML 영역
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
              <AddressInputBar placeholder="07250" onChange={OnChangeZipcode} />
              <SearchBox>우편번호 검색</SearchBox>
            </AddressInputBox>
          </AddressBox>
          <InputBarEmpty onChange={OnChangeAddress} />
          <InputBarEmpty onChange={OnChangeAddressDetail} />
          <InputBox>
            <SubTitle>유튜브</SubTitle>
            <InputBar
              placeholder="링크를 입력해주세요"
              onChange={OnChangeYoutube}
            />
          </InputBox>
          <PictureBox>
            <SubTitle>사진 첨부</SubTitle>
            <ButtonBox>
              <PictureButton>
                <PictureText>+</PictureText>
                <PictureText>Upload</PictureText>
              </PictureButton>
              <PictureButton>
                <PictureText>+</PictureText>
                <PictureText>Upload</PictureText>
              </PictureButton>
              <PictureButton>
                <PictureText>+</PictureText>
                <PictureText>Upload</PictureText>
              </PictureButton>
            </ButtonBox>
          </PictureBox>
          <InputBox>
            <SubTitle>메인설정</SubTitle>
            <RadioBox>
              <RadioButton type="radio" name="select" /> 유튜브
              <RadioButton type="radio" name="select" /> 사진
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
