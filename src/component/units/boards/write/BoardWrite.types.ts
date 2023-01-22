import exp from "constants";
import { ChangeEvent, ChangeEventHandler, MouseEvent } from "react";
import BaseRouter from "next/router";
import { ParsedUrlQuery } from "querystring";

export interface IPropsWriteContainer {
  IsEdit: boolean;
  data?: any;
}

export interface IBoardWriteUIProps {
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  data?: any;
}

export interface IPropsWritePresenter {
  IsEdit: boolean;
  getData: any;
  OnChangeName: string;
}

export interface ImyVariables {
  boardId: string | string[] | undefined;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}
