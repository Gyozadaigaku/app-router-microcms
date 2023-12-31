import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { generateArticleMetadata, getArticleDraft } from "@/libs/microcms";
import { ArticleDetail } from "@/components/ArticleDetail";

type Props = {
  params: { articleId: string };
  searchParams: { draftKey: string | string[] };
};

export async function generateMetadata({
  params: { articleId },
  searchParams: { draftKey },
}: Props) {
  return await generateArticleMetadata(articleId, draftKey);
}

export default async function ArticlePage({
  params: { articleId },
  searchParams: { draftKey },
}: Props) {
  if (typeof draftKey !== "string" || draftKey === "") {
    redirect(`/articles/${articleId}`);
  }

  const article = await getArticleDraft(articleId, { draftKey });
  if (!article) {
    notFound();
  }
  return (
    <main>
      <ArticleDetail article={article} />
      {draftKey && (
        <Link href={`/articles/${articleId}`}>プレビューを終了</Link>
      )}
    </main>
  );
}
