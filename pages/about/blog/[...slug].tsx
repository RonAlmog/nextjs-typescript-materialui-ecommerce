import React from "react";
import { useRouter } from "next/router";
import { userAgent } from "next/server";

type Props = {};

const PostPage = (props: Props) => {
  const router = useRouter();
  console.log(router.query);

  return <div>post</div>;
};

export default PostPage;
