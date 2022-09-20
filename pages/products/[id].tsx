import React from "react";
import { useRouter } from "next/router";

type Props = {};

const ProductPage = (props: Props) => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return <div>your product is {router.query.id}</div>;
};

export default ProductPage;
