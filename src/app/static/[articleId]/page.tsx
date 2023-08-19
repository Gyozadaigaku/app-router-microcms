import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getArticle, getArticles } from "../../../libs/microcms";
import { ArticleDetail } from "@/components/ArticleDetail";

export async function generateStaticParams() {
  const { contents } = await getArticles();

  const paths = contents.map((article) => {
    return {
      articleId: article.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { articleId },
}: {
  params: { articleId: string };
}) {
  const article = await getArticle(articleId);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
