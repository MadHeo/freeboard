import { FETCH_BOARD, DELETE_BOARD, FETCH_BOARDS } from "./BoardDetail.queries";
import BoardDetailPresenter from "./BoardDetail.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { imageConfigDefault } from "next/dist/server/image-config";

export default function BoardDetailContainer() {
  const router = useRouter();
  const [OnAddress, setOnAddress] = useState(0);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardNumber },
  });

  const onClickListBtn = () => {
    router.push("/boards/listPage");
  };

  const onClickEditBtn = () => {
    router.push(`/boards/${router.query.boardNumber}/editPage`);
  };

  const onClickDeleteBtn = () => {
    deleteBoard({
      variables: {
        boardId: router.query.boardNumber,
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });

    router.push("/boards/listPage");
  };

  const onClickLocationBtn = () => {
    if (OnAddress === 0) {
      setOnAddress(100);
    } else if (OnAddress === 100) {
      setOnAddress(0);
    }
  };

  return (
    <BoardDetailPresenter
      onClickLocationBtn={onClickLocationBtn}
      getData={data}
      OnAddress={OnAddress}
      onClickListBtn={onClickListBtn}
      onClickEditBtn={onClickEditBtn}
      onClickDeleteBtn={onClickDeleteBtn}
    />
  );
}
