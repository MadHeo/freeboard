import { useMutation, useQuery } from "@apollo/client";
import BoardCommentPresenter from "./BoardComment.presenter";
import { useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENTS,
} from "./BoardComment.queries";

export default function BoardCommentContainer() {
  const { data } = useQuery(FETCH_BOARD_COMMENTS);
  const [createBoardComments] = useMutation(CREATE_BOARD_COMMENTS);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState();

  const onClickCommentsBtn = async () => {
    if (writer && password && rating && contents) {
      await createBoardComments({
        variables: {
          boardId: "63cb6d1c12e1f50028229a56",
          createBoardComments: {
            writer,
            password,
            contents,
            rating,
          },
        },
      });
    }
  };

  function OnChangeWriter(event: any) {
    setWriter(event.target.value);
  }
  function OnChangePassword(event: any) {
    setPassword(event.target.value);
  }
  function OnChangeContents(event: any) {
    setContents(event.target.value);
  }
  function OnChangeRating(event: any) {
    setRating(Number(event.target.value));
  }

  return (
    <>
      <BoardCommentPresenter
        data={data}
        onClickCommentsBtn={onClickCommentsBtn}
        OnChangeWriter={OnChangeWriter}
        OnChangePassword={OnChangePassword}
        OnChangeContents={OnChangeContents}
        OnChangeRating={OnChangeRating}
      />
    </>
  );
}
