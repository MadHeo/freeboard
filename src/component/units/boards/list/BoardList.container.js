import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import BoardListPresenter from "../list/BoardList.presenter";
import { FETCH_BOARDS } from "../list/BoardList.queries";

export default function BoardListContainer() {
  const { data } = useQuery(FETCH_BOARDS);
  const { router } = useRouter();

  const onClickList = () => {};

  return <BoardListPresenter getBoardsData={data} onClickList={onClickList} />;
}
