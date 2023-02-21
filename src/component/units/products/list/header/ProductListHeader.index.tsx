import { useRouter } from "next/router";
import { useQueryFetchUseditems } from "../../../../commons/hooks/queries/useQueryFetchUseditems";
import * as S from "./ProductListHeader.style";
import { IProductListHeaderProps } from "./ProductListHeader.types";

export default function ProductListHeader(props: IProductListHeaderProps) {
  const router = useRouter();

  const onClickWrite = () => {
    router.push("/products/write");
  };

  return (
    <>
      <S.SearchBox>
        <S.BoardWriteButton onClick={onClickWrite}>
          <S.IconPencil />
          <span>물품 등록하기</span>
        </S.BoardWriteButton>
        <div>{props.children}</div>
      </S.SearchBox>
    </>
  );
}
