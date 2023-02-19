import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./ProductsDetail.Style";
import Head from "next/head";

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
      seller {
        _id
        email
        name
      }
      useditemAddress {
        _id
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

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductDetailBody() {
  const router = useRouter();
  const [OnAddress, setOnAddress] = useState(0);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

  const onClickListBtn = () => {
    router.push("/products/list");
  };

  // const onClickEditBtn = () => {
  //   router.push(`/boards/${router.query.boardNumber}/editPage`);
  // };

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

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=2f43c27b0cbe07e0672a3348e214e0b5";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          // center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        // const map = new window.kakao.maps.Map(container, options);
      });
    };
  }, []);

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
                가격 : {data ? data?.fetchUseditem?.price : "...loading"}원
              </S.PriceText>
            </S.TextBox>
            <S.TextBox>
              <S.RemarksText>
                설명 : {data ? data?.fetchUseditem?.remarks : "...loading"}
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
              <div id="map" style={{ width: "500px", height: "400px;" }}></div>
            </S.MapBox>
          </S.BoardBodyWrapper>
          <S.BoardFooterWrapper>
            <S.FooterBoxLeft></S.FooterBoxLeft>
            <S.FooterBoxRight></S.FooterBoxRight>
          </S.BoardFooterWrapper>
        </S.BoardWrapper>
        <S.ButtonWrapper>
          <S.ListButton onClick={onClickListBtn}>목록으로</S.ListButton>
          {/* <S.EditButton onClick={onClickEditBtn}>수정하기</S.EditButton> */}
          <S.DeleteButton onClick={onClickDeleteBtn}>삭제하기</S.DeleteButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  );
}
