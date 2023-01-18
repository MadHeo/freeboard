import * as S from "../list/BoardList.styles";

export default function BoardListPresenter(props) {
  return (
    <div>
      <S.MainBox>
        <S.ListBox>
          <S.TitleRow>
            <S.TitleNumber>번호</S.TitleNumber>
            <S.TitleWriter>제목</S.TitleWriter>
            <S.TitleWriter>작성자</S.TitleWriter>
            <S.TitleDate>날짜</S.TitleDate>
          </S.TitleRow>
          {props.getBoardsData?.fetchBoards.map((el) => (
            <S.ListRow>
              <S.ListNumber onClick={props.onClickList}>
                {el._id.slice(20, 24)}
              </S.ListNumber>
              <S.ListName>{el.title}</S.ListName>
              <S.ListWriter>{el.writer}</S.ListWriter>
              <S.ListDate>
                {el.createdAt.slice(0, 10).replaceAll("-", ".")}
              </S.ListDate>
            </S.ListRow>
          ))}
        </S.ListBox>
      </S.MainBox>
    </div>
  );
}
