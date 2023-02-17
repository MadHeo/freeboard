import { useState } from "react";
import { useQueryFetchUseditems } from "./queries/useQueryFetchUseditems";

export const usePageNationMove = () => {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQueryFetchUseditems();

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return {
    startPage,
    onClickPrevPage,
    onClickNextPage,
  };
};
