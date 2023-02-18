import { useState } from "react";
import ProductsWritePage from "../../../../src/component/units/products/write/Products.Write.Page";

export default function ProductsEdit() {
  const [isEdit, setIsEdit] = useState(true);
  return (
    <>
      <ProductsWritePage isEdit={isEdit} />
    </>
  );
}
