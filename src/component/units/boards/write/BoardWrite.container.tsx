import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";
import BoardWritePresenter from "./BoardWrite.presenter";

export default function BoardWriteContainer(props: any) {
  //여기는 자바스크립트 쓰는 곳
  const [registerBoard] = useMutation(CREATE_BOARD);
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState();
  const [address, setAddress] = useState();
  const [addressDetail, setAddressDetail] = useState();
  const [youtube, setYoutube] = useState();
  const [likeCount, setLikeCount] = useState();
  const [dislikeCount, setDisLikeCount] = useState();
  const [date, setDate] = useState();
  const [errorName, setErrorName] = useState("");
  const [errorPw, setErrorPw] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContents] = useState("");
  const [IsActive, setIsActive] = useState(false);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardNumber },
  });

  const onClickEditBtn = async () => {
    const myVariables = { boardId: router.query.boardNumber };
    if (name) myVariables.writer = name;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;
    if (youtube) myVariables.youtubeUrl = youtube;

    interface myVariables {
      boardId: string;
      writer: string;
      title: string;
      contents: string;
      youtube: string;
    }

    const result = await updateBoard({
      variables: {
        updateBoardInput: {
          title: title,
          contents: contents,
          youtubeUrl: youtube,
        },
        boardId: router.query.boardNumber,
        password: pw,
      },
    });
    router.push(`/boards/${result.data.updateBoard._id}`);
  };

  const onClickWriteBtn = async () => {
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

    if (contents === "") {
      setErrorContents("필수 입력창 입니다");
    } else {
      setErrorContents(" ");
    }

    if (name && pw && title && contents) {
      alert("게시글 등록이 완료 되었습니다 짝짝짝");
      try {
        const boardResult = await registerBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: pw,
              title: title,
              contents: contents,
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

  interface event {
    boardId: string;
    writer: string;
    title: string;
    contents: string;
    youtube: string;
  }

  function OnChangeName(event: any) {
    setName(event.target.value);
    event.target.value && pw && title && contents
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangePw(event: any) {
    setPw(event.target.value);
    name && event.target.value && title && contents
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeTitle(event: any) {
    setTitle(event.target.value);
    console.log(typeof event);

    name && pw && event.target.value && contents
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeContent(event: any) {
    setContents(event.target.value);
    name && pw && title && event.target.value
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeZipcode(event: any) {
    setZipcode(event.target.value);
  }
  function OnChangeAddress(event: any) {
    setAddress(event.target.value);
  }
  function OnChangeAddressDetail(event: any) {
    setAddressDetail(event.target.value);
  }
  function OnChangeYoutube(event: any) {
    setYoutube(event.target.value);
  }

  return (
    <BoardWritePresenter
      onClickWriteBtn={onClickWriteBtn}
      onClickEditBtn={onClickEditBtn}
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
      IsEdit={props.IsEdit}
      getData={data}
    />
  );
}
