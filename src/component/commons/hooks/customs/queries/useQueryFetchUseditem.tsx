import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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

export const useQueryFetchUseditem = () => {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { boardId: router.query.boardNumber },
  });

  return {};
};
