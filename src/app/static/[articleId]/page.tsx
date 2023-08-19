import { notFound } from "next/navigation";
import {
  generateArticleMetadata,
  getArticle,
  getArticles,
} from "../../../libs/microcms";
import { ArticleDetail } from "@/components/ArticleDetail";

type Props = {
  params: { articleId: string };
};

export async function generateStaticParams() {
  const { contents } = await getArticles();

  const paths = contents.map((article) => {
    return {
      articleId: article.id,
    };
  });

  return [...paths];
}

export async function generateMetadata({ params: { articleId } }: Props) {
  return await generateArticleMetadata(articleId);
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
