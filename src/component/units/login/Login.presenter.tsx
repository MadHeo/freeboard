import * as S from "../login/Login.styles";
import { ILoginPresenterProps } from "./Login.type";

export default function LoginPresenter(props: ILoginPresenterProps) {
  return (
    <div>
      <S.MainBox>
        <S.SubBox>
          <S.TitleText>로그인</S.TitleText>
          <S.InputBox type="email" placeholder="이메일 계정"></S.InputBox>
          <S.InputBox type="password" placeholder="비밀번호"></S.InputBox>
          <S.LoginButton>로그인</S.LoginButton>
          <S.SignUpButton onClick={props.onClickSignUp}>
            회원가입
          </S.SignUpButton>
        </S.SubBox>
      </S.MainBox>
    </div>
  );
}
