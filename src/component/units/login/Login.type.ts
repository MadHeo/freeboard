import { ChangeEvent, MouseEvent } from "react";

export interface ILoginPresenterProps {
  onClickSignUp: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickLogin: (e: MouseEvent<HTMLButtonElement>) => void;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}
