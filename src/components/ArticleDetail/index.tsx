import { Article } from "@/libs/microcms";
import parse from "html-react-parser";

interface ArticleDetailProps {
  article: Article;
}

export const ArticleDetail = async ({ article }: ArticleDetailProps) => {
  // Get the time the page was generated.
  return (
    <div>
      <h1>{article.title}</h1>
      {/* TODO: Use `html-react-parser` instead of `dangerouslySetInnerHTML` in the future */}
      {article.content.map((item, index) => (
        <div key={index}>
          {item.richEditor && (
            <div dangerouslySetInnerHTML={{ __html: item.richEditor }} />
          )}
          {item.html && <div dangerouslySetInnerHTML={{ __html: item.html }} />}
        </div>
      ))}
    </div>
  );
};
