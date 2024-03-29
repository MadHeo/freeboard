import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 맞지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  name: yup
    .string()
    .min(2, "닉네임 최소 2자리 이상입니다")
    .max(10, "닉네임 최대 10자리 입니다.")
    .required("닉네임은 필수 입력입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력입니다."),
  phone: yup
    .string()
    .matches(/^\d{3}\d{3,4}\d{4}$/, "휴대폰 번호 형식에 맞지 않습니다.")
    .required("휴대폰은 필수 입력입니다."),
});
