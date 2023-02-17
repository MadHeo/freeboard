import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useQueryFetchUseditem } from "./queries/useQueryFetchUseditems";

export const useOnClickList = () => {
  const { data, refetch } = useQueryFetchUseditem();
  const router = useRouter();

  //   const onClickPage = (event: any) => () => {
  //     refetch({ page: Number(event.currentTarget.id) });
  //   };

  //   const onClickList = (event: MouseEvent<HTMLSpanElement>): void => {
  //     router.push(event.currentTarget.id);
  //   };

  return {
    // onClickPage,
    // onClickList,
  };
};
