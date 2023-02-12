import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";

export interface ICommentPresenterProps {
  OnChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  OnChangeRating: (event: number) => void;
  onClickWriteBtn: MouseEventHandler<HTMLButtonElement>;
  writer: string;
  password: string;
  rating: number;
  contents: string;
}
