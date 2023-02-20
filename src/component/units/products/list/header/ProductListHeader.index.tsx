import * as S from "./ProductListHeader.style";
import { IProductListHeaderProps } from "./ProductListHeader.types";

export default function ProductListHeader(props: IProductListHeaderProps) {
  return <S.SearchBox>{props.children}</S.SearchBox>;
}
