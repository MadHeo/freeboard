import * as S from "./BoardList.styles";
import { FaPen, FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function BoardListPresenter(props) {
  return (
    <div>
      <S.MainBox>
        <S.ListBox>
          <S.TitleRow>
            <span>번호</span>
            <span>제목</span>
            <span>작성자</span>
            <span>날짜</span>
          </S.TitleRow>
          {props.getBoardsData?.fetchBoards.map((el) => (
            <S.ListRow key={el._id}>
              <span>{el._id.slice(20, 24)}</span>
              <span id={el._id} onClick={props.onClickList}>
                {el.title}
              </span>
              <span>{el.writer}</span>
              <span>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</span>
            </S.ListRow>
          ))}
        </S.ListBox>
        <S.FooterWrapper>
          <S.PageNumberBox>
            <FaAngleLeft />
            <button>1</button>
            <button>2</button>
            <FaAngleRight />
          </S.PageNumberBox>
          <S.BoardWriteButton onClick={props.onClickWrite}>
            <FaPen />
            <span>게시물 등록하기</span>
          </S.BoardWriteButton>
        </S.FooterWrapper>
      </S.MainBox>
    </div>
  );
}
