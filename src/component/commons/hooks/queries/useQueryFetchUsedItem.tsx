import { gql, useQuery } from "@apollo/client";
import {
  IQueryFetchBoardArgs,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const useQueryFetchUseditem = (variables: IQueryFetchUseditemArgs) => {
  const query = useQuery(FETCH_USED_ITEM, { variables });

  return query;
};
