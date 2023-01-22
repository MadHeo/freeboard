import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListPresenter from "../commentList/BoardCommentList.presenter";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { useRouter } from "next/router";

export default function BoardCommentListContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardNumber,
      page: 1,
    },
  });

  return (
    <>
      <BoardCommentListPresenter getCommentData={data} />
    </>
  );
}
