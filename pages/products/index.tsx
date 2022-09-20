import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

const ProductsHomePage = (props: Props) => {
  //   const router = useRouter();
  //   console.log(router.pathname);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>
          <Link href="/products/1">Airplane</Link>
        </li>
        <li>
          <Link href="/products/2">Train</Link>
        </li>
        <li>
          <Link href="/products/3">Traktor</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductsHomePage;
