import { Article } from "@/libs/microcms";
import parse from "html-react-parser";

interface ArticleDetailProps {
  article: Article;
}

export const ArticleDetail = async ({ article }: ArticleDetailProps) => {
  // Get the time the page was generated.
  const time = new Date().toLocaleString();
  return (
    <div>
      <h1>{article.title}</h1>
      <h2>{time}</h2>
      <div>{parse(article.content)}</div>
    </div>
  );
};
