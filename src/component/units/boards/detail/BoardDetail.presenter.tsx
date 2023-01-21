import * as S from "./BoardDetail.styles";

export default function BoardListPresenter(props) {
  return (
    <div>
      <S.Wrapper>
        <S.BoardWrapper>
          <S.BoardHeadWrapper>
            <S.ProfileLeftBox>
              <S.ProfileImage>
                <img src="/image/icon_profile.png" />
              </S.ProfileImage>
              <S.ProfileWriterBox>
                <S.ProfileName>
                  {props.getData
                    ? props.getData?.fetchBoard?.writer
                    : "...loading"}
                </S.ProfileName>
                <S.ProfileDate>
                  {props.getData
                    ? props.getData?.fetchBoard?.createdAt
                        .slice(0, 10)
                        .replaceAll("-", ".")
                    : "...loading"}
                </S.ProfileDate>
              </S.ProfileWriterBox>
            </S.ProfileLeftBox>
            <S.ProfileRightBox>
              <S.ProfileLinkBtn>
                <img src="/image/icon_link_yellow.png" />
              </S.ProfileLinkBtn>

              <S.ProfileLocationBtn onClick={props.onClickLocationBtn}>
                <img src="/image/icon_location_yellow.png" />
                <div>
                  <S.ProfileAddressTextBox style={{ opacity: props.OnAddress }}>
                    <S.ProfileAddressText1>
                      {props.getData
                        ? props.getData?.fetchBoard?.boardAddress?.address
                        : "...loading"}
                    </S.ProfileAddressText1>
                    <S.ProfileAddressText2>
                      {props.getData
                        ? props.getData?.fetchBoard?.boardAddress?.addressDetail
                        : "...loading"}
                    </S.ProfileAddressText2>
                    <S.ProfileAddressTextBoxTail></S.ProfileAddressTextBoxTail>
                  </S.ProfileAddressTextBox>
                </div>
              </S.ProfileLocationBtn>
            </S.ProfileRightBox>
          </S.BoardHeadWrapper>
          <S.DivideLine></S.DivideLine>
          <S.BoardBodyWrapper>
            <S.BoardTitleBox>
              <S.BoardTitleContent>
                {props.getData
                  ? props.getData?.fetchBoard?.title
                  : "...loading"}
              </S.BoardTitleContent>
            </S.BoardTitleBox>
            <S.BoardImageBox>
              <S.BoardImageContent src="/image/img_board_content.png" />
            </S.BoardImageBox>
            <S.BoardContentBox>
              <S.BoardContent>
                {props.getData
                  ? props.getData?.fetchBoard?.contents
                  : "...loading"}
              </S.BoardContent>
            </S.BoardContentBox>
            <S.BoardYoutubeBox>
              <S.BoardYoutubeContent
                src={
                  props.getData
                    ? props.getData?.fetchBoard?.youtubeUrl
                    : "...loading"
                }
              ></S.BoardYoutubeContent>
            </S.BoardYoutubeBox>
          </S.BoardBodyWrapper>
          <S.BoardFooterWrapper>
            <S.FooterBoxLeft>
              <S.FooterContentLikeImage src="/image/icon_thumb_up.png" />
              <S.FooterContentLikeText>
                {props.getData
                  ? props.getData?.fetchBoard?.likeCount
                  : "...loading"}
              </S.FooterContentLikeText>
            </S.FooterBoxLeft>
            <S.FooterBoxRight>
              <S.FooterContentUnLikeImage src="/image/icon_thumb_down.png" />
              <S.FooterContentUnLikeText>
                {props.getData
                  ? props.getData?.fetchBoard?.dislikeCount
                  : "...loading"}
              </S.FooterContentUnLikeText>
            </S.FooterBoxRight>
          </S.BoardFooterWrapper>
        </S.BoardWrapper>
        <S.ButtonWrapper>
          <S.ListButton onClick={props.onClickListBtn}>목록으로</S.ListButton>
          <S.EditButton onClick={props.onClickEditBtn}>수정하기</S.EditButton>
          <S.DeleteButton onClick={props.onClickDeleteBtn}>
            삭제하기
          </S.DeleteButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  );
}
