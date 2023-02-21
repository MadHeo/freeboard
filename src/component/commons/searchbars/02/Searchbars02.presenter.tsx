import * as S from "./Searchbars02.styles";
import { SearchOutlined } from "@ant-design/icons";
import { ISearchbars01UIProps } from "./Searchbars02.types";

export default function SearchBars02Presenter(
  props: ISearchbars01UIProps
): JSX.Element {
  return (
    <S.SearchBox>
      <S.SearchIcon>
        <SearchOutlined></SearchOutlined>
      </S.SearchIcon>
      <S.SearchInput
        type="text"
        onChange={props.onChangeSearch}
      ></S.SearchInput>
    </S.SearchBox>
  );
}
