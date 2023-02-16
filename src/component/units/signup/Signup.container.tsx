import SignUpPresenter from "./Signup.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../commons/vaildation/validation";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./Signup.queries";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import { ISignUpData } from "./Signup.type";

export default function SignUpContainer(): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickSignUp = async (data: ISignUpData) => {
    const result = await createUser({
      variables: {
        createUserInput: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });
    router.push("/login/");
    alert("회원가입이 완료 되었습니다.");
  };

  return (
    <>
      <SignUpPresenter
        onClickSignUp={onClickSignUp}
        handleSubmit={handleSubmit}
        registerEmail={{ ...register("email") }}
        registerName={{ ...register("name") }}
        registerPassword={{ ...register("password") }}
        registerPhone={{ ...register("phone") }}
        formState={formState}
      ></SignUpPresenter>
    </>
  );
}
