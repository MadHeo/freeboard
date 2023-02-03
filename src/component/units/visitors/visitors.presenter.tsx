import * as S from "./visitors.styles";

export default function VisitorsPresenter(props) {
  return (
    <>
      <S.MainBox>
        <button onClick={props.onClickSubmit}>등록</button>
        <button onClick={props.onClickFetchData}>데이터 조회</button>
        {new Array(10).fill(1).map((el, idx) => (
          <>
            <S.InputBox key={idx}>
              <S.NameBox>{el.name}</S.NameBox>
              <S.ContentsBox>내용입니다</S.ContentsBox>
            </S.InputBox>
          </>
        ))}
      </S.MainBox>
    </>
  );
}
