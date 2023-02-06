import { removeArgumentsFromDocument } from "@apollo/client/utilities";
import * as S from "./visitors.styles";

export default function VisitorsPresenter(props) {
  return (
    <>
      <S.MainBox>
        <S.InputBox>
          <S.InputName
            onChange={props.onChangeName}
            placeholder={"이름"}
          ></S.InputName>
          <S.InputContents
            onChange={props.onChangeContents}
            placeholder={"방명록을 작성해주세요"}
          ></S.InputContents>
          <S.WriteButton onClick={props.onClickWrite}>작성하기</S.WriteButton>
        </S.InputBox>
        {props.dataVisit.map((el, idx) => (
          <>
            <S.VisitBox key={idx}>
              <S.NameBox>{el.name}</S.NameBox>
              <S.ContentsBox>{el.contents}</S.ContentsBox>
            </S.VisitBox>
          </>
        ))}

        {/* // {new Array(10).fill(1).map((el, idx) => (
        //   <>
        //     <S.VisitBox key={idx}>
        //       <S.NameBox>{el.name}</S.NameBox>
        //       <S.ContentsBox>{el.contents}</S.ContentsBox>
        //     </S.VisitBox>
        //   </>
        // ))} */}
      </S.MainBox>
    </>
  );
}
