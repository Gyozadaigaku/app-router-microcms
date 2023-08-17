import { Suspense } from "react";
import { getList } from "../../libs/microcms";
import { Blog } from "./blog";
import { BlogPromiseProps } from "./blog-props";
import { BlogUse } from "./blog-use";

export const revalidate = 0;

export default async function StaticPage() {
  const data = getList();

  // Get the time the page was generated
  const time = new Date().toLocaleString();

  if (!data) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <h1>{time}</h1>
      <h2>非同期コンポーネント</h2>
      <Suspense fallback={<div>loading...</div>}>
        <Blog />
      </Suspense>
      <hr />
      <h2>PromiseをPropsで渡す場合</h2>
      <Suspense fallback={<div>loading...</div>}>
        <BlogPromiseProps promise={data} />
      </Suspense>
      <hr />
      <h2>React.use()を利用</h2>
      <Suspense fallback={<div>loading...</div>}>
        <BlogUse />
      </Suspense>
    </div>
  );
}
