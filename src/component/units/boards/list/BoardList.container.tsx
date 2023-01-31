import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListPresenter from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { MouseEvent, useState } from "react";

export default function BoardListContainer(): JSX.Element {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT);
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);

  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount ?? 10) / 10;

  const onClickList = (event: MouseEvent<HTMLSpanElement>): void => {
    router.push(event.target.id);
  };

  const onClickWrite = () => {
    router.push("/boards/writePage");
  };

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.currentTarget.id) });
    setNowPage(Number(event.currentTarget.id));
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <BoardListPresenter
      getBoardsData={data}
      onClickList={onClickList}
      onClickWrite={onClickWrite}
      startPage={startPage}
      lastPage={lastPage}
      nowPage={nowPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
