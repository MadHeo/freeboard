import * as S from "./BoardComment.styles";
import React from "react";
import { Rate } from "antd";

export default function BoardCommentPresenter(props) {
  return (
    <S.Box>
      <S.MainBox>
        <S.TitleBox>
          <span>
            <img src="/image/icon_review.png" />
          </span>
          <span>댓글</span>
        </S.TitleBox>
        <S.InfoInputBox>
          <S.WriterInputBox
            placeholder="작성자"
            onChange={props.OnChangeWriter}
            value={props.writer}
          ></S.WriterInputBox>
          <S.PasswordInputBox
            placeholder="비밀번호"
            onChange={props.OnChangePassword}
            value={props.password}
          ></S.PasswordInputBox>
          <S.RatingBox placeholder="점수 5.0" onChange={props.OnChangeRating}>
            {/* <Rate></Rate> */}
          </S.RatingBox>
        </S.InfoInputBox>
        <S.WriteBox>
          <S.WriteContent
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.OnChangeContents}
            value={props.contents}
          ></S.WriteContent>
          <S.WriteCounter>
            <span>0</span>
            <span>/</span>
            <span>100</span>
            <S.EnterButton onClick={props.onClickCommentsBtn}>
              등록하기
            </S.EnterButton>
          </S.WriteCounter>
        </S.WriteBox>
      </S.MainBox>
    </S.Box>
  );
}
