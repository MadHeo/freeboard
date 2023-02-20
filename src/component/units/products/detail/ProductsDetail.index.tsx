import ProductCommentListContainer from "../../../commons/commetList/product/CommentList.product.container";
import ProductDetailBody from "./body/ProductsDetail.Body";
import ProductsDetailComments from "./footer/ProductsDetail.Comments";

export default function ProductsDetailPage() {
  return (
    <>
      <ProductDetailBody></ProductDetailBody>
      <ProductsDetailComments></ProductsDetailComments>
    </>
  );
}
