import * as S from "../login/Login.styles";
import { ILoginPresenterProps } from "./Login.type";

export default function LoginPresenter(props: ILoginPresenterProps) {
  return (
    <div>
      <S.MainBox>
        <S.SubBox>
          <S.TitleText>로그인</S.TitleText>
          <S.InputBox
            type="email"
            placeholder="이메일 계정"
            onChange={props.onChangeEmail}
          ></S.InputBox>
          <S.InputBox
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></S.InputBox>
          <S.LoginButton onClick={props.onClickLogin}>로그인</S.LoginButton>
          <S.SignUpButton onClick={props.onClickSignUp}>
            회원가입
          </S.SignUpButton>
        </S.SubBox>
      </S.MainBox>
    </div>
  );
}
