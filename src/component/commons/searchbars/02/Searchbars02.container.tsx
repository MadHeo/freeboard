import { useQuery } from "@apollo/client";
import _ from "lodash";
import { ChangeEvent } from "react";
import { useQueryFetchUseditems } from "../../hooks/queries/useQueryFetchUseditems";
import SearchBars01Presenter from "./Searchbars02.presenter";
import { FETCH_USED_ITEMS } from "./Searchbars02.queries";
import { ISearchbars01Props } from "./Searchbars02.types";

export default function SearchBars02(): JSX.Element {
  const { data, refetch } = useQuery(FETCH_USED_ITEMS);
  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
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
