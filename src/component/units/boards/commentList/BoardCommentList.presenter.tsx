import { Modal } from "antd";
import * as S from "./BoardCommentList.styles";

export default function BoardCommentListPresenter(props) {
  return (
    <>
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
                  <S.RatingBox>
                    <S.Rating value={el.rating}></S.Rating>
                  </S.RatingBox>
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
      {props.isOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}></Modal>
      )}
    </>
  );
}
