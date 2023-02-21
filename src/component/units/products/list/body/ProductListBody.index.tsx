import { useRouter } from "next/router";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { usePageNationMove } from "../../../../commons/hooks/customs/usePageNationMove";
import { useQueryFetchUseditems } from "../../../../commons/hooks/queries/useQueryFetchUseditems";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./ProductListBody.style";

export default function ProductListBody(props): JSX.Element {
  const { data, refetch, fetchMore } = useQueryFetchUseditems();
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const loadFunc = (): void => {
    if (data === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      // updateQuery: (prev, { fetchMoreResult }) => {
      //   if (fetchMoreResult.fetchUseditems === undefined) {
      //     return {
      //       fetchBoardComments: [...prev.fetchUseditems],
      //     };
      //   }

      //   return {
      //     fetchBoardComments: [
      //       ...prev.fetchUseditems,
      //       ...fetchMoreResult.fetchUseditems,
      //     ],
      //   };
      // },
    });
  };

  return (
    <div>
      <S.MainBox>
        <S.CardsBox style={{ height: "700px", overflow: "auto" }}>
          <S.Scroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true}
            useWindow={false}
          >
            {data?.fetchUseditems.map((el) => (
              <S.ProductCard
                key={el._id}
                onClick={onClickMoveToPage(`/products/${el._id}`)}
              >
                <S.ProductCardImageBox>
                  {el.imagess ? (
                    <img
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      alt=""
                    />
                  ) : (
                    <img src="/image/img_empty4.jpeg" />
                  )}
                </S.ProductCardImageBox>
                <S.ProductCardTextBox>
                  <span>{el.name.slice(0, 50)}</span>
                  <span>{el.price + " 원"}</span>
                  <span>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</span>
                  <span>{el.tags}</span>
                </S.ProductCardTextBox>
              </S.ProductCard>
            ))}
          </S.Scroll>
        </S.CardsBox>
      </S.MainBox>
    </div>
  );
}
