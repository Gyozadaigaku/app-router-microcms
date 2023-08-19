import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getArticle, getArticles } from "../../../libs/microcms";

export async function generateStaticParams() {
  const { contents } = await getArticles();

  const paths = contents.map((post) => {
    return {
      articleId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { articleId },
}: {
  params: { articleId: string };
}) {
  const post = await getArticle(articleId);

  // Get the time the page was generated.
  const time = new Date().toLocaleString();

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{time}</h2>
      <div>{parse(post.content)}</div>
    </div>
  );
}
