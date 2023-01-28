import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListPresenter from "../commentList/BoardCommentList.presenter";
import { useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { useRouter } from "next/router";

export default function BoardCommentListContainer() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [password, setPassword] = useState("");

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardNumber,
    },
  });

  const onClickDeleteBtn = async (event) => {
    const pw = prompt("비밀번호를 입력해주세요");
    console.log(router);
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
  };

  const onClickEditBtn = async (event) => {};

  return (
    <>
      <BoardCommentListPresenter
        getCommentData={data}
        onClickDeleteBtn={onClickDeleteBtn}
        onClickEditBtn={onClickEditBtn}
      />
    </>
  );
}
