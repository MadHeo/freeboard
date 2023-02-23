import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./ProductsDetail.Style";
import { BsHeart, BsHeartFill } from "react-icons/Bs";
import { useGetKakaoMap } from "../../../../commons/hooks/customs/useGetKakaoMap";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      images
      tags
      seller {
        _id
        email
        name
      }
      useditemAddress {
        _id
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export default function ProductDetailBody() {
  const { kakaomap } = useGetKakaoMap();
  const router = useRouter();
  const [OnAddress, setOnAddress] = useState(0);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const [isWish, setIsWish] = useState(false);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

  const onClickListBtn = () => {
    router.push("/products/list");
  };

  const onClickEditBtn = () => {
    router.push(`/products/${router.query.productId}/edit`);
  };

  const onClickDeleteBtn = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.productId,
        },
      });
      router.push("/products/list");
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

  const onClickWishBtn = async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: router.query.productId,
        },
      });
      setIsWish(true);
    } catch {
      alert("에러입니당");
    }
  };

  kakaomap();

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
                  {data ? data?.fetchUseditem?.seller.name : "...loading"}
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
              <S.ProfileWishBtn onClick={onClickWishBtn}>
                {isWish ? <BsHeartFill /> : <BsHeart />}
              </S.ProfileWishBtn>
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

                    <S.ProfileAddressTextBoxTail></S.ProfileAddressTextBoxTail>
                  </S.ProfileAddressTextBox>
                </div>
              </S.ProfileLocationBtn>
            </S.ProfileRightBox>
          </S.BoardHeadWrapper>
          <S.DivideLine></S.DivideLine>
          <S.BoardBodyWrapper>
            <S.SLiderBox>
              {data?.fetchUseditem.images
                ?.filter((el) => el)
                .map((el) => (
                  <>
                    <S.BoardImageBox>
                      <S.BoardImageContent
                        key={el}
                        src={`https://storage.googleapis.com/${el}`}
                      />
                    </S.BoardImageBox>
                  </>
                ))}
            </S.SLiderBox>
            <S.TextBox>
              <S.NameText>
                {data ? data?.fetchUseditem?.name : "...loading"}
              </S.NameText>
            </S.TextBox>
            <S.TextBox>
              <S.PriceText>
                가격 :
                <span>
                  {data ? data?.fetchUseditem?.price : "...loading"}원
                </span>
              </S.PriceText>
            </S.TextBox>
            <S.TextBox>
              <S.RemarksText>
                제품 특징 :
                <span>
                  {data ? data?.fetchUseditem?.remarks : "...loading"}
                </span>
              </S.RemarksText>
            </S.TextBox>
            <S.TextBox>
              <S.ContentsText>상세설명</S.ContentsText>
            </S.TextBox>
            <S.BoardContentBox>
              <S.BoardContent>
                {data ? data?.fetchUseditem?.contents : "...loading"}
              </S.BoardContent>
            </S.BoardContentBox>
            <S.MapBox>
              <div id="map" style={{ width: "700px", height: "300px" }}></div>
            </S.MapBox>
          </S.BoardBodyWrapper>
          <S.BoardFooterWrapper>
            {data?.fetchUseditem?.tags.map((el) => (
              <S.FooterTag>#{el}</S.FooterTag>
            ))}
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
