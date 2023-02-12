import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListPresenterProps {
  loadFunc: () => void;
  getCommentData: Pick<IQuery, "fetchBoardComments">;
  MyIdx: number | string;
  onClickEditBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (event: number) => void;
  onClickEditComplete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEditCancel: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}
