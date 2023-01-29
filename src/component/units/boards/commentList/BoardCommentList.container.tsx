import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListPresenter from "../commentList/BoardCommentList.presenter";
import { useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import { Button, Modal } from "antd";

export default function BoardCommentListContainer() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardNumber,
    },
  });

  const handleOk = (): void => {
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const onClickDeleteBtn = async (event) => {
    const pw = prompt("비밀번호를 입력해주세요");
    Modal;
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: event.target.id,
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

  const onClickEditBtn = async (event) => {
    const myVariables = {
      boardId: router.query.boardNumber,
    };

    // if (contents) myVariables.contents = contents;
    // if (rating) myVariables.rating = rating;

    const result = await updateBoardComment({
      variables: {
        updateBoardComment: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password: password,
          boardCommentId: event.target.id,
        },
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD_COMMENTS,
      //     variables: {
      //       boardId: router.query.boardNumber,
      //     },
      //   },
      // ],
    });
  };

  return (
    <>
      <BoardCommentListPresenter
        getCommentData={data}
        onClickDeleteBtn={onClickDeleteBtn}
        onClickEditBtn={onClickEditBtn}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isOpen={isOpen}
      />
    </>
  );
}
