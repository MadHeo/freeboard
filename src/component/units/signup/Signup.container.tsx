import SignUpPresenter from "./Signup.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../commons/vaildation/validation";

export default function SignUpContainer(): JSX.Element {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = () => {};

  return (
    <>
      <SignUpPresenter
        onClickSignUp={onClickSignUp}
        handleSubmit={handleSubmit}
        register={register}
      ></SignUpPresenter>
    </>
  );
}
