import * as S from "./BoardCommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { Button, Modal } from "antd";
import * as LS from "../comment/BoardComment.styles";
import { IBoardCommentListPresenterProps } from "./BoardCommentList.type";

export default function BoardCommentListPresenter(
  props: IBoardCommentListPresenterProps
) {
  return (
    <>
      <S.Box>
        <S.MainBox style={{ height: "500px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadFunc}
            hasMore={true}
            useWindow={false}
          >
            {props.getCommentData?.fetchBoardComments.map((el, idx) =>
              el._id !== props.MyIdx ? (
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
              ) : (
                <S.MainBox>
                  <LS.InfoInputBox>
                    <LS.WriterInputBox
                      placeholder={el.writer ? el.writer : ""}
                      readOnly={true}
                    ></LS.WriterInputBox>
                    <LS.PasswordInputBox
                      placeholder="비밀번호"
                      onChange={props.onChangePassword}
                    ></LS.PasswordInputBox>
                    <S.RatingBox>
                      <LS.RatingStar
                        onChange={props.onChangeRating}
                        defaultValue={el.rating}
                      ></LS.RatingStar>
                    </S.RatingBox>
                  </LS.InfoInputBox>
                  <LS.WriteBox>
                    <LS.WriteContent
                      onChange={props.onChangeContents}
                      defaultValue={el.contents}
                    ></LS.WriteContent>
                    <LS.WriteCounter>
                      <span>0</span>
                      <span>/</span>
                      <span>100</span>
                      <LS.EnterButton
                        id={el._id}
                        onClick={props.onClickEditComplete}
                      >
                        등록하기
                      </LS.EnterButton>
                      <S.CancelButton onClick={props.onClickEditCancel}>
                        취소하기
                      </S.CancelButton>
                    </LS.WriteCounter>
                  </LS.WriteBox>
                </S.MainBox>
              )
            )}
          </InfiniteScroll>
        </S.MainBox>
      </S.Box>
      {props.isOpen && (
        <Modal
          title="비밀번호 입력"
          open={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <input type="password"></input>
        </Modal>
      )}
    </>
  );
}
