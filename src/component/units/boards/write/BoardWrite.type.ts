import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IWriteContainerProps {
  IsEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  IsActive: boolean;
}

export interface IBoardResult {
  boardAddress: {
    address: string;
    addressDetail: string;
    zipcode: string;
    __typename: string;
    _id: string;
  };
  contents: string;
  createdAt: string;
  dislikeCount: number;
  likeCount: number;
  title: string;
  writer: string;
  youtubeUrl: string;
}

export interface IBoardWriteUIProps {
  onClickWriteBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEditBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  OnChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  OnChangeZipcode: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, idx: number) => void;
  errorName: string;
  errorPw: string;
  errorTitle: string;
  errorContent: string;
  IsActive: boolean;
  IsEdit: boolean;
  getData?: any; //Pick<IQuery, "fetchBoard">
  zipcode: string;
  showModal: boolean;
  isModalOpen: boolean;
  handleOk: boolean;
  handleCancel: boolean;
  isOpen: boolean;
  address: string;
  fileUrls: string[];
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

export interface IDataFetchBoard {
  boardAddress: {
    address: string;
    addressDetail: string;
    zipcode: string;
    __typename: string;
    _id: string;
  };
  contents: string;
  createdAt: string;
  dislikeCount: number;
  likeCount: number;
  title: string;
  writer: string;
  youtubeUrl: string;
  __typename: string;
  _id: string;
}

export interface IStyleCompleteButton {
  IsActive: boolean;
}
