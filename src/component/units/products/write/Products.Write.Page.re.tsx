import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import Uploads01 from "../../../commons/uploads/Uploads01.container";
import * as S from "./Products.Write.Style";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import DaumPostcodeEmbed from "react-daum-postcode";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import { useForm } from "react-hook-form";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      images
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $useditemId: ID!
    $updateUseditemInput: UpdateUseditemInput!
  ) {
    updateUseditem(
      useditemId: $useditemId
      updateUseditemInput: $updateUseditemInput
    ) {
      _id
      name
      remarks
      contents
      price
      tags
    }
  }
`;

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      tags
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductsWritePage(props: any): JSX.Element {
  const { register, handleSubmit, formState } = useForm();

  const [name, setName] = useState("");
  const [seller, setSeller] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState(["", "", ""]);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [images, setImages] = useState();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [errorName, setErrorName] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorSeller, setErrorSeller] = useState("");
  const [errorRemarks, setErrorRemarks] = useState("");
  const [errorContents, setErrorContents] = useState("");
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [IsActive, setIsActive] = useState(false);

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, { variables: { useditemId: router.query.productId } });

  const onClickWriteBtn = async (): Promise<void> => {
    if (name === "") {
      setErrorName("필수 입력창 입니다");
    } else {
      setErrorName(" ");
    }
    if (price === 0) {
      setErrorPrice("필수 입력창 입니다");
    } else {
      setErrorPrice(" ");
    }
    if (remarks === "") {
      setErrorRemarks("필수 입력창 입니다");
    } else {
      setErrorRemarks(" ");
    }
    if (contents === "") {
      setErrorContents("필수 입력창 입니다");
    } else {
      setErrorContents(" ");
    }
    if (name && price && remarks && contents) {
      try {
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              name,
              remarks,
              contents,
              price,
              tags: ["좋은상품", "재밌는상품", "멋진상품"],
              useditemAddress: {
                address,
                addressDetail,
                lat,
                lng,
              },
              images: [...fileUrls],
            },
          },
        });
        router.push(`/products/${result.data?.createUseditem._id}`);
        alert("게시글 등록이 완료 되었습니다.");
      } catch (error) {
        if (error instanceof Error) {
          alert("Error" + error);
        }
      }
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // useEffect(() => {
  //   const images = props.data?.fetchBoard.images;
  //   if (images !== undefined && images !== null) setFileUrls([...images]);
  // }, [props.data]);

  function OnChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    event.target.value && seller && remarks && contents && price
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeRemarks(event: ChangeEvent<HTMLInputElement>) {
    setRemarks(event.target.value);
    name && seller && event.target.value && contents && price
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    name && seller && remarks && event.target.value && price
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangePrice(event: ChangeEvent<HTMLInputElement>) {
    setPrice(Number(event.target.value));
    name && seller && remarks && contents && event.target.value
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeTags(event: ChangeEvent<HTMLInputElement>) {
    setTags([event.target.value, event.target.value, event.target.value]);
  }

  const onClickEditBtn = async (): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    const updateUseditemInput = {};
    if (name !== "") updateUseditemInput.name = name;
    if (contents !== "") updateUseditemInput.contents = contents;
    if (remarks !== "") updateUseditemInput.remarks = remarks;
    if (price !== 0) updateUseditemInput.price = price;
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    try {
      if (typeof router.query.productId !== "string") {
        alert("게시글 ID를 불러오지 못했습니다");
        return;
      }
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: updateUseditemInput,
          useditemId: router.query.productId,
        },
      });
      router.push(`/products/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert("Error" + error);
      }
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=	2f43c27b0cbe07e0672a3348e214e0b5&libraries=services,clusterer,drawing";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 1, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();

        const marker = new window.kakao.maps.Marker(); // 클릭한 위치를 표시할 마커입니다
        const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

        // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);

        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            searchDetailAddrFromCoords(
              mouseEvent.latLng,
              function (result, status) {
                if (status === kakao.maps.services.Status.OK) {
                  let detailAddr = !!result[0].road_address
                    ? "<div>도로명주소 : " +
                      result[0].road_address.address_name +
                      "</div>"
                    : "";
                  detailAddr +=
                    "<div>지번 주소 : " +
                    result[0].address.address_name +
                    "</div>";

                  let content =
                    '<div class="bAddr">' +
                    '<span class="title">법정동 주소정보</span>' +
                    detailAddr +
                    "</div>";

                  // 마커를 클릭한 위치에 표시합니다
                  marker.setPosition(mouseEvent.latLng);
                  marker.setMap(map);

                  // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                  infowindow.setContent(content);
                  setAddress(result[0].address.address_name);
                  setLng(mouseEvent.latLng.Ma);
                  setLat(mouseEvent.latLng.La);
                  infowindow.open(map, marker);
                }
              }
            );
          }
        );

        // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, "idle", function () {
          searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        });

        function searchAddrFromCoords(coords, callback) {
          // 좌표로 행정동 주소 정보를 요청합니다
          geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
        }

        function searchDetailAddrFromCoords(coords, callback) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        // // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        function displayCenterInfo(result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            let infoDiv = document.getElementById("centerAddr");
            if (!infoDiv) {
              return;
            }
            for (let i = 0; i < result.length; i++) {
              if (result[i].region_type === "H") {
                infoDiv.innerHTML = result[i].address_name;
                break;
              }
            }
          }
        }
      });
    };
  }, []);

  return (
    <div>
      <S.MainBox>
        <div className="title_wrapper">
          <S.MyTitle>
            {props.isEdit ? "😈 게시글 수정 👿" : "😈 게시물 등록 👿"}
          </S.MyTitle>
        </div>

        <S.BodyWrapper>
          <S.InputBox>
            <S.SubTitle>상품명</S.SubTitle>
            <S.InputBar
              onChange={OnChangeName}
              placeholder="상품명을 입력해주세요"
              defaultValue={props.isEdit ? data?.fetchUseditem.name : ""}
            />
            <S.HiddenError>{errorName}</S.HiddenError>
          </S.InputBox>
          <S.InputBox>
            <S.SubTitle>간략 설명</S.SubTitle>
            <S.InputBar
              onChange={OnChangeRemarks}
              placeholder="간략 설명을 입력해주세요"
              defaultValue={props.isEdit ? data?.fetchUseditem.remarks : ""}
            />
            <S.HiddenError>{errorRemarks}</S.HiddenError>
          </S.InputBox>
          <S.TextareaBox>
            <S.SubTitle>내용</S.SubTitle>
            <S.TextareaContent
              placeholder="내용을 입력해주세요"
              onChange={OnChangeContent}
              defaultValue={props.isEdit ? data?.fetchUseditem.contents : ""}
            />
            <S.HiddenError>{props.errorContent}</S.HiddenError>
          </S.TextareaBox>
          <S.InputBox>
            <S.SubTitle>판매 가격</S.SubTitle>
            <S.InputBar
              onChange={OnChangePrice}
              placeholder="판매 가격을 입력해주세요"
              defaultValue={props.isEdit ? data?.fetchUseditem.price : 0}
            />
            <S.HiddenError>{errorRemarks}</S.HiddenError>
          </S.InputBox>
          <S.InputBox>
            <S.SubTitle>태그 입력</S.SubTitle>
            <S.InputBar
              onChange={OnChangeTags}
              placeholder="#태그 #태그 #태그"
              defaultValue={props.isEdit ? data?.fetchUseditem.tags : [""]}
            />
          </S.InputBox>
          <S.AddressBox>
            <S.SubTitle>거래 위치</S.SubTitle>
            <S.MapBox>
              <S.MapContents id="map"></S.MapContents>
            </S.MapBox>
          </S.AddressBox>
          <S.InputBarEmpty
            value={
              props.isEdit
                ? data?.fetchUseditem.useditemAddress?.address
                : address
            }
          ></S.InputBarEmpty>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.PictureBox>
            {props.isEdit
              ? data?.fetchUseditem?.images?.map((el, index) => (
                  <Uploads01
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={onChangeFileUrls}
                  ></Uploads01>
                ))
              : fileUrls.map((el: any, index: any) => (
                  <Uploads01
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={onChangeFileUrls}
                  ></Uploads01>
                ))}
          </S.PictureBox>
          <S.CompleteButtonBox>
            <S.CompleteButton
              onClick={props.isEdit ? onClickEditBtn : onClickWriteBtn}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </S.CompleteButton>
          </S.CompleteButtonBox>
        </S.BodyWrapper>
        <div className="bottom_wrapper"></div>
      </S.MainBox>
    </div>
  );
}
