import {
  MyTitle,
  MainBox,
  BodyWrapper,
  SubTitle,
  InputBar,
  DoubleInput,
  InputBox,
  DbInputBox,
  BigInputBox,
  BigInputBar,
  SearchBox,
  AddressBox,
  AddressInputBox,
  AddressInputBar,
  PictureBox,
  PictureButton,
  ButtonBox,
  CompleteButton,
  CompleteButtonBox,
  RadioButton,
  RadioBox,
  HiddenError,
  InputBarEmpty,
  PictureText,
  TextDiv,
} from "../write/BoardWrite.styles";

export default function BoardWritePresenter(props) {
  return (
    <div>
      <MainBox>
        <div class="title_wrapper">
          <MyTitle>게시물 등록</MyTitle>
        </div>
        <BodyWrapper>
          <DoubleInput>
            <DbInputBox>
              <SubTitle>작성자</SubTitle>
              <InputBar
                placeholder="이름을 입력해주세요"
                onChange={props.OnChangeName}
              />
              <HiddenError>{props.errorName}</HiddenError>
            </DbInputBox>
            <DbInputBox>
              <SubTitle>비밀번호</SubTitle>
              <InputBar
                placeholder="비번을 입력해주세요"
                onChange={props.OnChangePw}
              />
              <HiddenError>{props.errorPw}</HiddenError>
            </DbInputBox>
          </DoubleInput>
          <InputBox>
            <SubTitle>제목</SubTitle>
            <InputBar
              placeholder="제목을 입력해주세요"
              onChange={props.OnChangeTitle}
            />
            <HiddenError>{props.errorTitle}</HiddenError>
          </InputBox>
          <BigInputBox>
            <SubTitle>내용</SubTitle>
            <BigInputBar
              placeholder="내용을 입력해주세요"
              onChange={props.OnChangeContent}
            />
            <HiddenError>{props.errorContent}</HiddenError>
          </BigInputBox>
          <AddressBox>
            <SubTitle>주소</SubTitle>
            <AddressInputBox>
              <AddressInputBar
                placeholder="07250"
                onChange={props.OnChangeZipcode}
              />
              <SearchBox>우편번호 검색</SearchBox>
            </AddressInputBox>
          </AddressBox>
          <InputBarEmpty onChange={props.OnChangeAddress} />
          <InputBarEmpty onChange={props.OnChangeAddressDetail} />
          <InputBox>
            <SubTitle>유튜브</SubTitle>
            <InputBar
              placeholder="링크를 입력해주세요"
              onChange={props.OnChangeYoutube}
            />
          </InputBox>
          <PictureBox>
            <SubTitle>사진 첨부</SubTitle>
            <ButtonBox>
              <PictureButton>
                <PictureText>+</PictureText>
                <PictureText>Upload</PictureText>
              </PictureButton>
              <PictureButton>
                <PictureText>+</PictureText>
                <PictureText>Upload</PictureText>
              </PictureButton>
              <PictureButton>
                <PictureText>+</PictureText>
                <PictureText>Upload</PictureText>
              </PictureButton>
            </ButtonBox>
          </PictureBox>
          <InputBox>
            <SubTitle>메인설정</SubTitle>
            <RadioBox>
              <RadioButton type="radio" name="select" /> 유튜브
              <RadioButton type="radio" name="select" /> 사진
            </RadioBox>
          </InputBox>
          <CompleteButtonBox>
            <CompleteButton
              onClick={props.OnClickButton}
              IsActive={props.IsActive}
            >
              등록하기
            </CompleteButton>
          </CompleteButtonBox>
        </BodyWrapper>
        <div class="bottom_wrapper"></div>
      </MainBox>
    </div>
  );
}
