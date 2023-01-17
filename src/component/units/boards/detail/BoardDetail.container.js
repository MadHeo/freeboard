import { FETCH_BOARD } from "../detail/BoardDetail.queries";
import BoardDetailPresenter from "../detail/BoardDetail.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { imageConfigDefault } from "next/dist/server/image-config";

export default function BoardDetailContainer() {
  const router = useRouter();
  const [OnAddress, setOnAddress] = useState(0);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardNumber },
  });

  const onClickListBtn = () => {
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
    />
  );
}
