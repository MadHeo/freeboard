import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD } from "../write/BoardWrite.queries";
import BoardWritePresenter from "../write/BoardWrite.presenter";

export default function BoardWriteContainer() {
  //여기는 자바스크립트 쓰는 곳
  const [registerBoard] = useMutation(CREATE_BOARD);
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
  const [IsActive, setIsActive] = useState(false);
  const router = useRouter();

  //Input에 이벤트 받는 영역
  function OnChangeName(event) {
    setName(event.target.value);
    event.target.value && pw && title && content
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangePw(event) {
    setPw(event.target.value);
    name && event.target.value && title && content
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeTitle(event) {
    setTitle(event.target.value);
    name && pw && event.target.value && content
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeContent(event) {
    setContent(event.target.value);
    name && pw && title && event.target.value
      ? setIsActive(true)
      : setIsActive(false);
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
        router.push(`/boards/${boardResult.data.createBoard._id}`);
      } catch (error) {
        alert("Error");
      }
    }
  };

  return (
    <BoardWritePresenter
      OnClickButton={onClickBtn}
      OnChangeName={OnChangeName}
      OnChangePw={OnChangePw}
      OnChangeTitle={OnChangeTitle}
      OnChangeContent={OnChangeContent}
      OnChangeZipcode={OnChangeZipcode}
      OnChangeAddress={OnChangeAddress}
      OnChangeAddressDetail={OnChangeAddressDetail}
      OnChangeYoutube={OnChangeYoutube}
      errorName={errorName}
      errorPw={errorPw}
      errorTitle={errorTitle}
      errorContent={errorContent}
      IsActive={IsActive}
    />
  );
}
