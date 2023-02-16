import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import Uploads01 from "../../../commons/uploads/Uploads01.container";
import * as S from "./Products.Write.Style";

export default function ProductsWritePage(props): JSX.Element {
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtube, setYoutube] = useState("");
  const [likeCount, setLikeCount] = useState();
  const [dislikeCount, setDisLikeCount] = useState();
  const [date, setDate] = useState();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [errorName, setErrorName] = useState("");
  const [errorPw, setErrorPw] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContents] = useState("");
  const [IsActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const handleComplete = (data: any) => {
    setIsModalOpen(false);
    setAddress(data.address);
    setZipcode(data.zonecode);
  };

  const onClickEditBtn = async (): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtube !== "") updateBoardInput.youtubeUrl = youtube;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      if (typeof router.query.boardNumber !== "string") {
        return;
        alert("게시글 ID를 불러오지 못했습니다");
      }
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          boardId: router.query.boardNumber,
          password: pw,
        },
      });
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert("Error" + error);
      }
    }
  };

  const onClickWriteBtn = async (): Promise<void> => {
    if (name === "") {
      setErrorName("필수 입력창 입니다");
    } else {
      setErrorName(" ");
    }

    if (pw === "") {
      setErrorPw("필수 입력창 입니다");
    } else {
      setErrorPw(" ");
    }

    if (title === "") {
      setErrorTitle("필수 입력창 입니다");
    } else {
      setErrorTitle(" ");
    }

    if (contents === "") {
      setErrorContents("필수 입력창 입니다");
    } else {
      setErrorContents(" ");
    }

    if (name && pw && title && contents) {
      try {
        const boardResult = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: pw,
              title: title,
              contents: contents,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
              youtubeUrl: youtube,
              images: [...fileUrls],
            },
          },
        });
        router.push(`/boards/${boardResult.data?.createBoard._id}`);
        alert("게시글 등록이 완료 되었습니다.");
      } catch (error) {
        if (error instanceof Error) {
          alert("Error" + error);
        }
      }
    }
  };

  function OnChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    event.target.value && pw && title && contents
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangePw(event: ChangeEvent<HTMLInputElement>) {
    setPw(event.target.value);
    name && event.target.value && title && contents
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);

    name && pw && event.target.value && contents
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    name && pw && title && event.target.value
      ? setIsActive(true)
      : setIsActive(false);
  }
  function OnChangeZipcode(event: ChangeEvent<HTMLInputElement>) {
    setZipcode(event.target.value);
  }
  function OnChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }
  function OnChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }
  function OnChangeYoutube(event: ChangeEvent<HTMLInputElement>) {
    setYoutube(event.target.value);
  }

  return (
    <div>
      <S.MainBox>
        <div className="title_wrapper">
          <S.MyTitle>
            {props.IsEdit ? "😈 게시물 수정 👿" : "😈 게시물 등록 👿"}
          </S.MyTitle>
        </div>
        <S.BodyWrapper>
          <S.DoubleInput>
            <S.DbInputBox>
              <S.SubTitle>작성자</S.SubTitle>
              <S.InputBar
                placeholder={
                  props.IsEdit
                    ? props.getData?.fetchBoard.writer
                    : "이름을 입력해주세요"
                }
                onChange={OnChangeName}
                readOnly={prop.IsEdit}
              />
              <S.HiddenError>{errorName}</S.HiddenError>
            </S.DbInputBox>
            <S.DbInputBox>
              <S.SubTitle>비밀번호</S.SubTitle>
              <S.InputBar
                placeholder="비번을 입력해주세요"
                onChange={props.OnChangePw}
              ></S.InputBar>
              <S.HiddenError>{props.errorPw}</S.HiddenError>
            </S.DbInputBox>
          </S.DoubleInput>
          <S.InputBox>
            <S.SubTitle>제목</S.SubTitle>
            <S.InputBar
              placeholder="제목을 입력해주세요"
              onChange={props.OnChangeTitle}
              defaultValue={props.getData?.fetchBoard.title}
            />
            <S.HiddenError>{props.errorTitle}</S.HiddenError>
          </S.InputBox>
          <S.BigInputBox>
            <S.SubTitle>내용</S.SubTitle>
            <S.BigInputBar
              placeholder="내용을 입력해주세요"
              onChange={props.OnChangeContent}
              defaultValue={props.getData?.fetchBoard.contents}
            />
            <S.HiddenError>{props.errorContent}</S.HiddenError>
          </S.BigInputBox>
          <S.AddressBox>
            <S.SubTitle>주소</S.SubTitle>
            <S.AddressInputBox>
              <S.AddressInputBar
                placeholder="07250"
                onChange={props.OnChangeZipcode}
                readOnly={props.IsEdit}
                value={props.zipcode}
              />
              <S.AddressButton onClick={props.showModal}>
                우편번호 검색
              </S.AddressButton>
              <S.AddressModal
                open={props.isModalOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <DaumPostcodeEmbed
                  onComplete={props.handleComplete}
                ></DaumPostcodeEmbed>
              </S.AddressModal>
            </S.AddressInputBox>
          </S.AddressBox>
          <S.InputBarEmpty
            onChange={props.OnChangeAddress}
            defaultValue={props.getData?.fetchBoard.boardAddress.address}
            readOnly={props.IsEdit}
            value={props.address}
          />
          <S.InputBarEmpty
            onChange={props.OnChangeAddressDetail}
            defaultValue={props.getData?.fetchBoard.boardAddress.addressDetail}
            readOnly={props.IsEdit}
          />
          <S.InputBox>
            <S.SubTitle>유튜브</S.SubTitle>
            <S.InputBar
              placeholder="링크를 입력해주세요"
              onChange={props.OnChangeYoutube}
              defaultValue={props.getData?.fetchBoard.youtubeUrl}
            />
          </S.InputBox>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.PictureBox>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              ></Uploads01>
            ))}
          </S.PictureBox>
          <S.InputBox>
            <S.SubTitle>메인설정</S.SubTitle>
            <S.RadioBox>
              <S.RadioButton type="radio" name="select" /> 유튜브
              <S.RadioButton type="radio" name="select" /> 사진
            </S.RadioBox>
          </S.InputBox>
          <S.CompleteButtonBox>
            <S.CompleteButton
              onClick={
                props.IsEdit ? props.onClickEditBtn : props.onClickWriteBtn
              }
              IsActive={props.IsEdit ? true : props.IsActive}
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
