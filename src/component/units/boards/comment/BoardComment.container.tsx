import { useMutation, useQuery } from "@apollo/client";
import BoardCommentPresenter from "./BoardComment.presenter";
import { useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENTS,
} from "./BoardComment.queries";
import { useRouter } from "next/router";

export default function BoardCommentContainer() {
  const [createBoardComments] = useMutation(CREATE_BOARD_COMMENTS);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState();
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardNumber,
      page: 1,
    },
  });

  const onClickWriteBtn = async () => {
    const result = await createBoardComments({
      variables: {
        boardId: router.query.boardNumber,
        createBoardCommentInput: {
          writer: writer,
          password: password,
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
    setWriter("");
    setPassword("");
    setContents("");
    console.log(rating);
  };

  const onClickEditBtn = async (event) => {
    const myVariables = {
      boardId: router.query.boardNumber,
    };

    if (contents) myVariables.contents = contents;
    if (rating) myVariables.rating = rating;

    const result = await updateBoardComment({
      variables: {
        updateBoardComment: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password,
          boardCommentId: event.target.id,
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
  };

  function OnChangeWriter(event) {
    setWriter(event.target.value);
  }
  function OnChangePassword(event) {
    setPassword(event.target.value);
  }
  function OnChangeContents(event) {
    setContents(event.target.value);
  }
  const OnChangeRating = (value) => {
    setRating(value);
  };

  return (
    <>
      <BoardCommentPresenter
        onClickWriteBtn={onClickWriteBtn}
        OnChangeWriter={OnChangeWriter}
        OnChangePassword={OnChangePassword}
        OnChangeContents={OnChangeContents}
        OnChangeRating={OnChangeRating}
        writer={writer}
        password={password}
        contents={contents}
      />
    </>
  );
}
