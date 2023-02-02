import * as S from "./BoardCommentList.styles";
import * as B from "../list/BoardList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { Button, Modal } from "antd";

export default function BoardCommentListPresenter(props) {
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
           
                <B.MainBox>
        <B.TitleBox>
          <span>
            <img src="/image/icon_review.png" />
          </span>
          <span>댓글</span>
        </TitleBox>
        <B.InfoInputBox>
          <B.WriterInputBox
            placeholder="작성자"
            onChange={props.OnChangeWriter}
            value={props.writer}
          ></WriterInputBox>
          <B.PasswordInputBox
            placeholder="비밀번호"
            onChange={props.OnChangePassword}
            value={props.password}
          ></.PasswordInputBox>
          <B.RatingBox>
            <B.RatingStar
              onChange={props.OnChangeRating}
              value={props.rating}
            ></B.RatingStar>
          </B.RatingBox>
        </.InfoInputBox>
        <B.WriteBox>
          <B.WriteContent
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.OnChangeContents}
            value={props.contents}
          ></B.WriteContent>
          <B.WriteCounter>
            <span>0</span>
            <span>/</span>
            <span>100</span>
            <B.EnterButton onClick={props.onClickWriteBtn}>
              등록하기
            </B.EnterButton>
          </B.WriteCounter>
        </B.WriteBox>
      </B.MainBox>
                  
                
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


{/* <S.EditBox>
                    <S.EditInput
                      onChange={props.onChangeContents}
                      type="text"
                      key={el._id}
                    ></S.EditInput>
                    <S.EditButton onClick={props.onClickEditComplete}>
                      수정하기
                    </S.EditButton>
                    <S.CancelButton onClick={props.onClickEditCancel}>
                      취소하기
                    </S.CancelButton>
                  </S.EditBox> */}