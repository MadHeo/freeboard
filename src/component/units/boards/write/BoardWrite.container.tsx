import { useState, ChangeEvent, SetStateAction } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";
import BoardWritePresenter from "./BoardWrite.presenter";
import {
  IWriteContainerProps,
  ImyVariables,
  IBoardWriteUIProps,
  IBoardResult,
} from "./BoardWrite.type";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";

export default function BoardWriteContainer(props: IWriteContainerProps) {
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtube, setYoutube] = useState("");
  const [likeCount, setLikeCount] = useState();
  const [dislikeCount, setDisLikeCount] = useState();
  const [date, setDate] = useState();
  const [errorName, setErrorName] = useState("");
  const [errorPw, setErrorPw] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContents] = useState("");
  const [IsActive, setIsActive] = useState(false);
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardNumber },
  });

  const onClickEditBtn = async (): Promise<void> => {
    const myVariables: IUpdateBoardInput = {};
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;
    if (youtube) myVariables.youtubeUrl = youtube;

    try {
      if (typeof router.query.boardId !== "string") {
        return;
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
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickWriteBtn = async (): Promise<void> => {
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
        const boardResult = await createBoard({
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
            },
          },
        });
        router.push(`/boards/${boardResult.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    }
  };

  function OnChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    event.target.value && pw && title && contents
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangePw(event: ChangeEvent<HTMLInputElement>) {
    setPw(event.target.value);
    name && event.target.value && title && contents
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    console.log(typeof event);

    name && pw && event.target.value && contents
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    name && pw && title && event.target.value
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeZipcode(event: ChangeEvent<HTMLInputElement>) {
    setZipcode(event.target.value);
  }
  function OnChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }
  function OnChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }
  function OnChangeYoutube(event: ChangeEvent<HTMLInputElement>) {
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
