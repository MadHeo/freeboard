import { ChangeEvent, MouseEvent } from "react";

export interface ICommentProps {
  onClickCommentsBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  OnChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
}
