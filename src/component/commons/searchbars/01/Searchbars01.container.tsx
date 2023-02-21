import { useQuery } from "@apollo/client";
import _ from "lodash";
import { ChangeEvent } from "react";
import SearchBars01Presenter from "./Searchbars01.presenter";
import { ISearchbars01Props } from "./Searchbars01.types";

export default function SearchBars01(props: ISearchbars01Props): JSX.Element {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <SearchBars01Presenter
        onChangeSearch={onChangeSearch}
      ></SearchBars01Presenter>
    </>
  );
}
