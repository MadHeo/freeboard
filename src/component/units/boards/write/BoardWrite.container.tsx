import React from "react";
import { useState, ChangeEvent, SetStateAction, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";
import BoardWritePresenter from "./BoardWrite.presenter";
import { Button, Modal } from "antd";

import {
  IWriteContainerProps,
  ImyVariables,
  IBoardWriteUIProps,
  IBoardResult,
  IDataFetchBoard,
} from "./BoardWrite.type";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";

export default function BoardWriteContainer(
  props: IWriteContainerProps
): JSX.Element {
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
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [errorName, setErrorName] = useState("");
  const [errorPw, setErrorPw] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContents] = useState("");
  const [IsActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleOk = (): void => {
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  const handleComplete = (data: any) => {
    setIsModalOpen(false);
    setAddress(data.address);
    setZipcode(data.zonecode);
  };

  const onClickEditBtn = async (): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtube !== "") updateBoardInput.youtubeUrl = youtube;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      if (typeof router.query.boardNumber !== "string") {
        return;
        alert("게시글 ID를 불러오지 못했습니다");
      }
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          boardId: router.query.boardNumber,
          password: pw,
        },
      });
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          title: "에러",
          content: "에러입니당",
        });
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
              images: [...fileUrls],
            },
          },
        });
        router.push(`/boards/${boardResult.data?.createBoard._id}`);
        Modal.success({
          title: "등록 완료",
          content: "게시글이 등록 되었습니다 ^^",
        });
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            title: "에러",
            content: "에러입니당",
          });
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
    <>
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
        onChangeFileUrls={onChangeFileUrls}
        errorName={errorName}
        errorPw={errorPw}
        errorTitle={errorTitle}
        errorContent={errorContent}
        IsActive={IsActive}
        IsEdit={props.IsEdit}
        getData={data}
        showModal={showModal}
        isModalOpen={isModalOpen}
        handleComplete={handleComplete}
        zipcode={zipcode}
        address={address}
        handleOk={handleOk}
        handleCancel={handleCancel}
        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls}
      />
    </>
  );
}
