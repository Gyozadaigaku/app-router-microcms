import { Suspense } from "react";
import { getArticles } from "../../libs/microcms";
import { Article } from "./article";
import { ArticlePromiseProps } from "./article-props";
import { ArticleUse } from "./article-use";

export default async function StaticPage() {
  const data = getArticles({ next: { revalidate: 0 } });

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
        <Article />
      </Suspense>
      <hr />
      <h2>PromiseをPropsで渡す場合</h2>
      <Suspense fallback={<div>loading...</div>}>
        <ArticlePromiseProps promise={data} />
      </Suspense>
      <hr />
      <h2>React.use()を利用</h2>
      <Suspense fallback={<div>loading...</div>}>
        <ArticleUse />
      </Suspense>
    </div>
  );
}
