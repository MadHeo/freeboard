import LoginPresenter from "./Login.presenter";
import { useRouter } from "next/router";
import { LOGIN_USER } from "./Login.queries";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function LoginContainer(): JSX.Element {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: { email, password },
      });

      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        alert("토큰을 받아오지 못했습니다");
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      router.push("/boards/listPage");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickSignUp = () => {
    router.push("/signup/");
  };

  return (
    <>
      <LoginPresenter
        onClickSignUp={onClickSignUp}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
      ></LoginPresenter>
    </>
  );
}
