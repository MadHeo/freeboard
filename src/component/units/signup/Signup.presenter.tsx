import * as S from "../signup/Signup.styles";
import { ISignUpPresenterProps } from "./Signup.type";

export default function SignUpPresenter(props) {
  return (
    <div>
      <S.MainBox>
        <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
          <S.SubBox>
            <S.TitleText>회원가입</S.TitleText>
            <S.CheckInputBox>
              <S.ShortInput
                type="text"
                placeholder="이메일 계정"
                {...props.registerEmail}
              ></S.ShortInput>
              <S.CheckButton>중복 체크</S.CheckButton>
            </S.CheckInputBox>
            <S.ErrorMessage>
              {props.formState.errors.email?.message}
            </S.ErrorMessage>
            <S.InputBox
              type="text"
              placeholder="닉네임"
              {...props.registerName}
            ></S.InputBox>
            <S.ErrorMessage>
              {props.formState.errors.name?.message}
            </S.ErrorMessage>
            <S.InputBox
              type="password"
              placeholder="비밀번호"
              {...props.registerPassword}
            ></S.InputBox>
            <S.ErrorMessage>
              {props.formState.errors.password?.message}
            </S.ErrorMessage>
            <S.InputBox
              type="password"
              placeholder="비밀번호 재확인"
              {...props.registerPassword}
            ></S.InputBox>
            <S.ErrorMessage>
              {props.formState.errors.password?.message}
            </S.ErrorMessage>
            <S.Division></S.Division>
            <S.CheckInputBox>
              <S.ShortInput
                type="text"
                placeholder="휴대폰 인증"
                {...props.registerPhone}
              ></S.ShortInput>
              <S.CheckButton>인증 발송</S.CheckButton>
            </S.CheckInputBox>
            <S.ErrorMessage>
              {props.formState.errors.phone?.message}
            </S.ErrorMessage>
            <S.TimeBox>
              <S.CheckInput
                type="text"
                placeholder="인증번호 입력"
              ></S.CheckInput>
              <S.TimeText>03:00</S.TimeText>
            </S.TimeBox>
            <S.Division></S.Division>
            <S.SignUpButton>회원가입</S.SignUpButton>

            <S.NaverButton>
              <img src="/image/ic_naver.png" />
              네이버 계정으로 가입
            </S.NaverButton>
            <S.KakaoButton>
              <img src="/image/ic_kakao.png" />
              카카오 계정으로 가입
            </S.KakaoButton>
            <S.GoogleButton>
              <img src="/image/ic_google.png" />
              구글 계정으로 가입
            </S.GoogleButton>
          </S.SubBox>
        </form>
      </S.MainBox>
    </div>
  );
}
