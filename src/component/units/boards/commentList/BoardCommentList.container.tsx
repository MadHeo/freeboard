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

export default function BoardCommentListContainer(props) {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [MyIdx, setMyIdx] = useState(-1);
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardNumber,
    },
  });

  const loadFunc = () => {
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

  const onClickDeleteBtn = async (event) => {
    const pw = prompt("비밀번호를 입력해주세요");
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

  const onChangeContents = (event) => {
    setContents(event.currentTarget.value);
  };

  const onClickEditBtn = (event) => {
    setMyIdx(event.currentTarget.id);
    console.log(typeof event.currentTarget.id);
    console.log(String(event.currentTarget.id));
  };

  const onClickEditCancel = (event) => {
    setMyIdx(event.currentTarget.id);
  };

  const onClickEditComplete = async (event) => {
    if (contents === "") {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (password === "") {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }
    const pw = prompt("비밀번호를 입력해주세요");
    const updateBoardCommentInput = {};
    if (contents !== "") updateBoardCommentInput.contents = contents;
    if (rating !== props.el?.rating) updateBoardCommentInput.rating = star;

    await updateBoardComment({
      variables: {
        updateBoardComment: {
          updateBoardCommentInput: {
            contents: contents,
            rating: rating,
          },
          boardCommentId: event.currentTarget.id,
          password: pw,
        },
      },
    });
    setPassword("");
    setContents("");
  };

  return (
    <>
      <BoardCommentListPresenter
        getCommentData={data}
        onClickDeleteBtn={onClickDeleteBtn}
        onClickEditBtn={onClickEditBtn}
        onClickEditComplete={onClickEditComplete}
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
