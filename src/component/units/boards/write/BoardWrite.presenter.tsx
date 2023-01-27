import * as S from "./BoardWrite.styles";
import { IPropsWritePresenter, IBoardWriteUIProps } from "./BoardWrite.type";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Button, Modal } from "antd";
import React from "react";
import ReactPlayer from "react-player";

export default function BoardWritePresenter(props: IBoardWriteUIProps) {
  return (
    <div>
      <S.MainBox>
        <div className="title_wrapper">
          <S.MyTitle>게시물 등록</S.MyTitle>
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
                onChange={props.OnChangeName}
                readOnly={props.IsEdit}
              />
              <S.HiddenError>{props.errorName}</S.HiddenError>
            </S.DbInputBox>
            <S.DbInputBox>
              <S.SubTitle>비밀번호</S.SubTitle>
              <S.InputBar
                placeholder="비번을 입력해주세요"
                onChange={props.OnChangePw}
              />
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
              <S.AddressModal open={props.isModalOpen}>
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
          <S.PictureBox>
            <S.SubTitle>사진 첨부</S.SubTitle>
            <S.ButtonBox>
              <S.PictureButton>
                <S.PictureText>+</S.PictureText>
                <S.PictureText>Upload</S.PictureText>
              </S.PictureButton>
              <S.PictureButton>
                <S.PictureText>+</S.PictureText>
                <S.PictureText>Upload</S.PictureText>
              </S.PictureButton>
              <S.PictureButton>
                <S.PictureText>+</S.PictureText>
                <S.PictureText>Upload</S.PictureText>
              </S.PictureButton>
            </S.ButtonBox>
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
