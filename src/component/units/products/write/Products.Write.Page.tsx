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
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
      seller
    }
  }
`;

export default function ProductsWritePage(props: any): JSX.Element {
  const [name, setName] = useState("");
  const [seller, setSeller] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState(["", "", ""]);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
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

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

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

  function OnChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }
  function OnChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleOk = (): void => {
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  const handleComplete = (data: any) => {
    setIsModalOpen(false);
    setAddress(data.address);
  };

  const onClickEditBtn = async (): Promise<void> => {
    // const currentFiles = JSON.stringify(fileUrls);
    // const defaultFiles = JSON.stringify(data?.fetchUseditem.images);
    // const isChangedFiles = currentFiles !== defaultFiles;
    // const updateBoardInput: IUpdateBoardInput = {};
    // if (name !== "") updateBoardInput.title = title;
    // if (contents !== "") updateBoardInput.contents = contents;
    // if (youtube !== "") updateBoardInput.youtubeUrl = youtube;
    // if (zipcode !== "" || address !== "" || addressDetail !== "") {
    //   updateBoardInput.boardAddress = {};
    //   if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
    //   if (address !== "") updateBoardInput.boardAddress.address = address;
    //   if (addressDetail !== "")
    //     updateBoardInput.boardAddress.addressDetail = addressDetail;
    // }
    // if (isChangedFiles) updateBoardInput.images = fileUrls;
    // try {
    //   if (typeof router.query.boardNumber !== "string") {
    //     return;
    //     alert("게시글 ID를 불러오지 못했습니다");
    //   }
    //   const result = await updateUseditem({
    //     variables: {
    //       updateBoardInput,
    //       boardId: router.query.boardNumber,
    //       password: pw,
    //     },
    //   });
    //   router.push(`/boards/${result.data?.updateBoard._id}`);
    // } catch (error) {
    //   if (error instanceof Error) {
    //     alert("Error" + error);
    //   }
    // }
  };

  return (
    <div>
      <S.MainBox>
        <div className="title_wrapper">
          <S.MyTitle>
            {props.IsEdit ? "😈 게시글 수정 👿" : "😈 게시물 등록 👿"}
          </S.MyTitle>
        </div>
        <S.BodyWrapper>
          <S.InputBox>
            <S.SubTitle>상품명</S.SubTitle>
            <S.InputBar
              onChange={OnChangeName}
              placeholder="상품명을 입력해주세요"
              defaultValue={props.IsEdit ? data?.fetchUseditem.name : ""}
            />
            <S.HiddenError>{errorName}</S.HiddenError>
          </S.InputBox>
          <S.InputBox>
            <S.SubTitle>간략 설명</S.SubTitle>
            <S.InputBar
              onChange={OnChangeRemarks}
              placeholder="간략 설명을 입력해주세요"
              defaultValue={props.IsEdit ? data?.fetchUseditem.remarks : ""}
            />
            <S.HiddenError>{errorRemarks}</S.HiddenError>
          </S.InputBox>
          <S.TextareaBox>
            <S.SubTitle>내용</S.SubTitle>
            <S.TextareaContent
              placeholder="내용을 입력해주세요"
              onChange={OnChangeContent}
              defaultValue={props.IsEdit ? data?.fetchUseditem.contents : ""}
            />
            <S.HiddenError>{props.errorContent}</S.HiddenError>
          </S.TextareaBox>
          <S.InputBox>
            <S.SubTitle>판매 가격</S.SubTitle>
            <S.InputBar
              onChange={OnChangePrice}
              placeholder="판매 가격을 입력해주세요"
              // defaultValue={props.IsEdit ? data?.fetchUseditem.price : 0}
            />
            <S.HiddenError>{errorRemarks}</S.HiddenError>
          </S.InputBox>
          <S.InputBox>
            <S.SubTitle>태그 입력</S.SubTitle>
            <S.InputBar
              onChange={OnChangeTags}
              placeholder="#태그 #태그 #태그"
              defaultValue={props.IsEdit ? data?.fetchUseditem.tags : [""]}
            />
          </S.InputBox>
          <S.AddressBox>
            <S.SubTitle>거래 위치</S.SubTitle>
            <S.AddressInputBox>
              <S.AddressButton onClick={showModal}>
                우편번호 검색
              </S.AddressButton>
              <S.AddressModal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <DaumPostcodeEmbed
                  onComplete={handleComplete}
                ></DaumPostcodeEmbed>
              </S.AddressModal>
            </S.AddressInputBox>
          </S.AddressBox>
          <S.MapBox>
            <S.MapContents></S.MapContents>
          </S.MapBox>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.PictureBox>
            {fileUrls.map((el: any, index: any) => (
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
              onClick={props.IsEdit ? onClickEditBtn : onClickWriteBtn}
            >
              {props.IsEdit ? "수정" : "등록"}하기
            </S.CompleteButton>
          </S.CompleteButtonBox>
        </S.BodyWrapper>
        <div className="bottom_wrapper"></div>
      </S.MainBox>
    </div>
  );
}
