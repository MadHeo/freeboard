import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./ProductsDetail.Style";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      seller
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export default function BoardDetailBody() {
  const router = useRouter();
  const [OnAddress, setOnAddress] = useState(0);
  const [deleteBoard] = useMutation(DELETE_USED_ITEM);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.boardNumber },
  });

  const onClickListBtn = () => {
    router.push("/products/list");
  };

  const onClickEditBtn = () => {
    router.push(`/boards/${router.query.boardNumber}/editPage`);
  };

  const onClickDeleteBtn = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.boardNumber,
        },
      });
      router.push("/boards/listPage");
    } catch {
      alert("에러입니당");
    }
  };

  const onClickLocationBtn = () => {
    if (OnAddress === 0) {
      setOnAddress(100);
    } else if (OnAddress === 100) {
      setOnAddress(0);
    }
  };

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
                  {data ? data?.fetchUseditem?.seller : "...loading"}
                </S.ProfileName>
                <S.ProfileDate>
                  {data
                    ? data?.fetchUseditem?.createdAt
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

              <S.ProfileLocationBtn onClick={onClickLocationBtn}>
                <img src="/image/icon_location_yellow.png" />
                <div>
                  <S.ProfileAddressTextBox style={{ opacity: OnAddress }}>
                    <S.ProfileAddressText1>
                      {data
                        ? data?.fetchUseditem?.useditemAddress?.address
                        : "...loading"}
                    </S.ProfileAddressText1>
                    <S.ProfileAddressText2>
                      {data
                        ? data?.fetchUseditem?.useditemAddress?.addressDetail
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
                {data ? data?.fetchUseditem?.name : "...loading"}
              </S.BoardTitleContent>
            </S.BoardTitleBox>
            <S.BoardImageBox>
              {data?.fetchUseditem.images
                ?.filter((el) => el)
                .map((el) => (
                  <S.BoardImageContent
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.BoardImageBox>
            <S.BoardContentBox>
              <S.BoardContent>
                {data ? data?.fetchUseditem?.contents : "...loading"}
              </S.BoardContent>
            </S.BoardContentBox>
          </S.BoardBodyWrapper>
          <S.BoardFooterWrapper>
            <S.FooterBoxLeft></S.FooterBoxLeft>
            <S.FooterBoxRight></S.FooterBoxRight>
          </S.BoardFooterWrapper>
        </S.BoardWrapper>
        <S.ButtonWrapper>
          <S.ListButton onClick={onClickListBtn}>목록으로</S.ListButton>
          <S.EditButton onClick={onClickEditBtn}>수정하기</S.EditButton>
          <S.DeleteButton onClick={onClickDeleteBtn}>삭제하기</S.DeleteButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  );
}
