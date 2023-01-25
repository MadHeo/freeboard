import * as S from "./BoardCommentList.styles";

export default function BoardCommentListPresenter(props) {
  return (
    <S.Box>
      <S.MainBox>
        {props.getCommentData?.fetchBoardComments.map((el) => (
          <S.CommentBox key={el._id}>
            <S.CommentProfileBox>
              <img src="/image/icon_profile.png" />
            </S.CommentProfileBox>
            <S.CommentContentBox>
              <S.WriterBox>
                <S.Writer>{el.writer}</S.Writer>
                <S.Rating src="/image/icon_star.png" />
                <S.Rating src="/image/icon_star.png" />
                <S.Rating src="/image/icon_star.png" />
                <S.Rating src="/image/icon_star.png" />
                <S.Rating src="/image/icon_star.png" />
              </S.WriterBox>
              <S.Content>{el.contents}</S.Content>
              <S.Date>{el.createdAt.slice(0, 10)}</S.Date>
            </S.CommentContentBox>
            <S.CommentHandleBox>
              <S.ChangeButton
                id={el._id}
                onClick={props.onClickEditBtn}
              ></S.ChangeButton>
              <S.DeleteButton
                id={el._id}
                onClick={props.onClickDeleteBtn}
              ></S.DeleteButton>
            </S.CommentHandleBox>
          </S.CommentBox>
        ))}
      </S.MainBox>
    </S.Box>
  );
}
