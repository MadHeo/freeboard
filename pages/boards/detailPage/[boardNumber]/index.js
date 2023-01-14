import {
  BoardWrapper,
  BoardHeadWrapper,
  ProfileImage,
  ProfileWriterBox,
  ProfileName,
  ProfileDate,
  DivideLine,
  ProfileLinkBtn,
  ProfileLocationBtn,
  ProfileLeftBox,
  ProfileRightBox,
  ProfileAddressTextBox,
  ProfileAddressTextBoxTail,
  ProfileAddressText1,
  ProfileAddressText2,
  BoardBodyWrapper,
  BoardTitleBox,
  BoardTitleContent,
  BoardImageBox,
  BoardImageContent,
  BoardContentBox,
  BoardContent,
  BoardYoutubeBox,
  BoardYoutubeContent,
  BoardFooterWrapper,
  FooterBoxLeft,
  FooterBoxRight,
  FooterContentLikeImage,
  FooterContentLikeText,
  FooterContentUnLikeImage,
  FooterContentUnLikeText,
} from "../../../../styles/styles";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { imageConfigDefault } from "next/dist/server/image-config";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      createdAt
      likeCount
      dislikeCount
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function detailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardNumber },
  });

  console.log(data?.fetchBoard?.createdAt);

  return (
    <div>
      <BoardWrapper>
        <BoardHeadWrapper>
          <ProfileLeftBox>
            <ProfileImage>
              <img src="/image/icon_profile.png" />
            </ProfileImage>
            <ProfileWriterBox>
              <ProfileName>
                {data ? data?.fetchBoard?.writer : "...loading"}
              </ProfileName>
              {/* <ProfileDate>{date?.fetchBoard.createdAt}</ProfileDate> */}
            </ProfileWriterBox>
          </ProfileLeftBox>
          <ProfileRightBox>
            <ProfileLinkBtn>
              <img src="/image/icon_link_yellow.png" />
            </ProfileLinkBtn>
            <ProfileLocationBtn>
              <img src="/image/icon_location_yellow.png" />
              <ProfileAddressTextBox>
                <ProfileAddressText1>
                  {data
                    ? data?.fetchBoard?.boardAddress?.address
                    : "...loading"}
                </ProfileAddressText1>
                <ProfileAddressText2>
                  {data
                    ? data?.fetchBoard?.boardAddress?.addressDetail
                    : "...loading"}
                </ProfileAddressText2>
                <ProfileAddressTextBoxTail></ProfileAddressTextBoxTail>
              </ProfileAddressTextBox>
            </ProfileLocationBtn>
          </ProfileRightBox>
        </BoardHeadWrapper>
        <DivideLine></DivideLine>
        <BoardBodyWrapper>
          <BoardTitleBox>
            <BoardTitleContent>
              {data ? data?.fetchBoard?.title : "...loading"}
            </BoardTitleContent>
          </BoardTitleBox>
          <BoardImageBox>
            <BoardImageContent src="/image/img_board_content.png" />
          </BoardImageBox>
          <BoardContentBox>
            <BoardContent>
              {data ? data?.fetchBoard?.contents : "...loading"}
            </BoardContent>
          </BoardContentBox>
          <BoardYoutubeBox>
            <BoardYoutubeContent src="https://www.youtube.com/embed/CLeZyIID9Bo"></BoardYoutubeContent>
          </BoardYoutubeBox>
        </BoardBodyWrapper>
        <BoardFooterWrapper>
          <FooterBoxLeft>
            <FooterContentLikeImage src="/image/icon_thumb_up.png" />
            <FooterContentLikeText>
              {data ? data?.fetchBoard?.likeCount : "...loading"}
            </FooterContentLikeText>
          </FooterBoxLeft>
          <FooterBoxRight>
            <FooterContentUnLikeImage src="/image/icon_thumb_down.png" />
            <FooterContentUnLikeText>
              {data ? data?.fetchBoard?.dislikeCount : "...loading"}
            </FooterContentUnLikeText>
          </FooterBoxRight>
        </BoardFooterWrapper>
      </BoardWrapper>
    </div>
  );
}
