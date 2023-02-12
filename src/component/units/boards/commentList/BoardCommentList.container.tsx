import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListPresenter from "../commentList/BoardCommentList.presenter";
import { ChangeEvent, ChangeEventHandler, useState, MouseEvent } from "react";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import { Button, Modal } from "antd";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentListContainer() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  const [password, setPassword] = useState("");
  const [commentId, setCommentId] = useState();
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const [UpContents, setUpContents] = useState("");
  const [UpRating, setUpRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [MyIdx, setMyIdx] = useState(-1);
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardNumber,
    },
  });

  const loadFunc = (): void => {
    if (data === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const handleOk = (): void => {
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const onClickDeleteBtn = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const pw = prompt("비밀번호를 입력해주세요");
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: event.currentTarget.id,
          password: pw,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardNumber,
            },
          },
        ],
      });
    } catch {
      Modal.error({
        title: "에러",
        content: "비밀번호를 확인해 주세요",
      });
    }
  };

  const onClickEditComplete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    // const updateBoardCommentInput = {};
    // if (UpRating) updateBoardCommentInput.rating = UpRating;
    // if (UpContents) updateBoardCommentInput.contents = UpContents;
    await updateBoardComment({
      variables: {
        boardCommentId: event.currentTarget.id,
        password: password,
        // updateBoardCommentInput: updateBoardCommentInput,
        updateBoardCommentInput: {
          contents: contents,
          rating: rating,
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query.boardNumber,
          },
        },
      ],
    });
    setMyIdx(-1);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onChangeRating = (event: number) => {
    setRating(event);
  };

  const onClickEditBtn = (event: any): void => {
    setMyIdx(event.currentTarget.id);
  };

  const onClickEditCancel = (event: any) => {
    setMyIdx(event.currentTarget.id);
  };

  return (
    <>
      <BoardCommentListPresenter
        getCommentData={data}
        onClickDeleteBtn={onClickDeleteBtn}
        onClickEditBtn={onClickEditBtn}
        onClickEditComplete={onClickEditComplete}
        onChangePassword={onChangePassword}
        onChangeRating={onChangeRating}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isOpen={isOpen}
        loadFunc={loadFunc}
        MyIdx={MyIdx}
        onChangeContents={onChangeContents}
        onClickEditCancel={onClickEditCancel}
      />
    </>
  );
}
