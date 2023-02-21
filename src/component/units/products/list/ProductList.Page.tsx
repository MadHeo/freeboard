import styled from "@emotion/styled";
import SearchBars02 from "../../../commons/searchbars/02/Searchbars02.container";
import ProductListBody from "./body/ProductListBody.index";
import ProductListHeader from "./header/ProductListHeader.index";

const MainBox = styled.div`
  display: flex;
  width: 1920px;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export default function ProductListPage() {
  return (
    <MainBox>
      <ProductListHeader>
        <SearchBars02></SearchBars02>
      </ProductListHeader>
      <ProductListBody />
    </MainBox>
  );
}

// import { gql, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
// import { useQueryFetchUseditems } from "../../../commons/hooks/queries/useQueryFetchUseditems";
// import { usePageNationMove } from "../../../commons/hooks/customs/usePageNationMove";
// import SearchBars01 from "../../../commons/searchbars/01/Searchbars01.container";
// import * as S from "./Products.List.Style";

// export default function ProductsListPage(props): JSX.Element {
//   const { data, refetch } = useQueryFetchUseditems();
//   const router = useRouter();
//   const { startPage, onClickPrevPage, onClickNextPage } = usePageNationMove();

//   const onClickList = (event: MouseEvent<HTMLSpanElement>): void => {
//     router.push(event.target.id);
//   };

//   const onClickWrite = () => {
//     router.push("/products/write");
//   };

//   const onClickPage = (event: any) => {
//     refetch({ page: Number(event.currentTarget.id) });
//   };

//   return (
//     <div>
//       <S.MainBox>
//         <S.ListBox>
//           <SearchBars01
//             refetch={props.refetch}
//             refetchBoardsCount={props.refetchBoardsCount}
//           ></SearchBars01>
//           <S.TitleRow>
//             <span>작성자</span>
//             <span>내용</span>
//             <span>비고</span>
//             <span>날짜</span>
//           </S.TitleRow>
//           {data?.fetchUseditems.map((el) => (
//             <S.ListRow key={el._id}>
//               <span>{el.seller?.name}</span>
//               <span id={el._id} onClick={onClickList}>
//                 {el.contents.slice(0, 50)}
//               </span>
//               <span>{el.remarks.slice(0, 10)}</span>
//               <span>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</span>
//             </S.ListRow>
//           ))}
//         </S.ListBox>
//         <S.FooterWrapper>
//           <S.IconPrevArrow onClick={onClickPrevPage} />
//           <S.PageNumberBox>
//             {new Array(10).fill(1).map(
//               (_, idx) =>
//                 idx + startPage && (
//                   <button
//                     onClick={onClickPage}
//                     key={idx + startPage}
//                     id={String(idx + startPage)}
//                   >
//                     {idx + startPage}
//                   </button>
//                 )
//             )}
//           </S.PageNumberBox>
//           <S.IconNextArrow onClick={onClickNextPage} />
//           <S.BoardWriteButton onClick={onClickWrite}>
//             <S.IconPencil />
//             <span>물품 등록하기</span>
//           </S.BoardWriteButton>
//         </S.FooterWrapper>
//       </S.MainBox>
//     </div>
//   );
// }
