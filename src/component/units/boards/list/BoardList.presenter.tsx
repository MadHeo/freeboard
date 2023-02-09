import * as S from "./BoardList.styles";
import { SearchOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

export default function BoardListPresenter(props) {
  return (
    <div>
      <S.MainBox>
        <S.SearchBox>
          <S.SearchIcon>
            <SearchOutlined></SearchOutlined>
          </S.SearchIcon>
          <S.SearchInput
            type="text"
            onChange={props.onChangeSearch}
          ></S.SearchInput>
        </S.SearchBox>
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
                {el.title.slice(0, 50)}
              </span>
              <span>{el.writer.slice(0, 10)}</span>
              <span>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</span>
            </S.ListRow>
          ))}
        </S.ListBox>
        <S.FooterWrapper>
          <S.IconPrevArrow onClick={props.onClickPrevPage} />
          <S.PageNumberBox>
            {new Array(10).fill(1).map(
              (_, idx) =>
                idx + props.startPage <= props.lastPage && (
                  <button
                    onClick={props.onClickPage}
                    key={idx + props.startPage}
                    id={String(idx + props.startPage)}
                  >
                    {idx + props.startPage}
                  </button>
                )
            )}
          </S.PageNumberBox>
          <S.IconNextArrow onClick={props.onClickNextPage} />
          <S.BoardWriteButton onClick={props.onClickWrite}>
            <S.IconPencil />
            <span>게시물 등록하기</span>
          </S.BoardWriteButton>
        </S.FooterWrapper>
      </S.MainBox>
    </div>
  );
}
