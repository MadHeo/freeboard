import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListPresenter from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardListContainer() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickList = (event) => {
    router.push(event.target.id);
  };

  const onClickWrite = () => {
    router.push("/boards/writePage");
  };

  return (
    <BoardListPresenter
      getBoardsData={data}
      onClickList={onClickList}
      onClickWrite={onClickWrite}
    />
  );
}
