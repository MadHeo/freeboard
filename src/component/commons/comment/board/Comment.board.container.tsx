import { useMutation, useQuery } from "@apollo/client";
import BoardCommentPresenter from "./Comment.board.presenter";
import { ChangeEvent, useState, MouseEventHandler } from "react";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENTS,
} from "./Comment.board.queries";
import { useRouter } from "next/router";
import { Button, Modal } from "antd";
import { Content } from "antd/es/layout/layout";

export default function BoardCommentContainer(): JSX.Element {
  const [createBoardComments] = useMutation(CREATE_BOARD_COMMENTS);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardNumber,
      page: 1,
    },
  });

  const onClickWriteBtn = async (): Promise<void> => {
    try {
      if (writer && password && contents) {
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
        setRating(0);
      } else {
        alert("모든 칸을 기입해 주세요");
      }
    } catch {
      Modal.error({
        title: "에러",
        content: "에러 입니당",
      });
    }
  };

  const OnChangeWriter = (event: ChangeEvent<HTMLInputElement>) =>
    setWriter(event.target.value);
  const OnChangePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const OnChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setContents(event.target.value);
  const OnChangeRating = (value: number) => setRating(value);

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
        rating={rating}
      />
    </>
  );
}
