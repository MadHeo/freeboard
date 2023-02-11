import LoginPresenter from "./Login.presenter";
import { useRouter } from "next/router";

export default function LoginContainer(): JSX.Element {
  const router = useRouter();

  const onClickSignUp = () => {
    router.push("/signup/");
  };

  return (
    <>
      <LoginPresenter onClickSignUp={onClickSignUp}></LoginPresenter>
    </>
  );
}
