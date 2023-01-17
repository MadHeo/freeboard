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
          <S.ListRow></S.ListRow>
        </S.ListBox>
      </S.MainBox>
    </div>
  );
}
