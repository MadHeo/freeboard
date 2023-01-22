import BoardDetailContainer from "../../../src/component/units/boards/detail/BoardDetail.container";
import BoardCommentPage from "./commentPage/index";
import BoardCommentListPage from "./commentListPage/index";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetailContainer />
      <BoardCommentPage />
      <BoardCommentListPage />
    </>
  );
}
