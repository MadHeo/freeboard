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
  const [OnAddress, setOnAddress] = useState(0);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardNumber },
  });

  console.log(data?.fetchBoard?.createdAt.slice(0, 10).replaceAll("-", "."));

  const onClickLocationBtn = () => {
    if (OnAddress === 0) {
      setOnAddress(100);
    } else if (OnAddress === 100) {
      setOnAddress(0);
    }
  };

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
              <ProfileDate>
                {data
                  ? data?.fetchBoard?.createdAt
                      .slice(0, 10)
                      .replaceAll("-", ".")
                  : "...loading"}
              </ProfileDate>
            </ProfileWriterBox>
          </ProfileLeftBox>
          <ProfileRightBox>
            <ProfileLinkBtn>
              <img src="/image/icon_link_yellow.png" />
            </ProfileLinkBtn>

            <ProfileLocationBtn onClick={onClickLocationBtn}>
              <img src="/image/icon_location_yellow.png" />
              <div>
                <ProfileAddressTextBox style={{ opacity: OnAddress }}>
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
              </div>
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
            <BoardYoutubeContent
              src={data ? data?.fetchBoard?.youtubeUrl : "...loading"}
            ></BoardYoutubeContent>
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
