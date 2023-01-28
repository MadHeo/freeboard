import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import BoardDetailPresenter from "./BoardDetail.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { imageConfigDefault } from "next/dist/server/image-config";

export default function BoardDetailContainer() {
  const router = useRouter();
  const [OnAddress, setOnAddress] = useState(0);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

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

  const onClickLikeButton = async () => {
    await likeBoard({
      variables: {
        boardId: router.query.boardNumber,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardNumber,
            likeCount: like,
          },
        },
      ],
    });
  };

  const onClickUnLikeButton = async () => {
    await dislikeBoard({
      variables: {
        boardId: router.query.boardNumber,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardNumber,
            dislikeCount: disLike,
          },
        },
      ],
    });
  };

  return (
    <BoardDetailPresenter
      onClickLocationBtn={onClickLocationBtn}
      getData={data}
      OnAddress={OnAddress}
      onClickListBtn={onClickListBtn}
      onClickEditBtn={onClickEditBtn}
      onClickDeleteBtn={onClickDeleteBtn}
      onClickLikeButton={onClickLikeButton}
      onClickUnLikeButton={onClickUnLikeButton}
      like={like}
      disLike={disLike}
    />
  );
}
