import { Article } from "@/libs/microcms";
import parse from "html-react-parser";
import "./index.css";

type ArticleDetailProps = {
  article: Article;
};

export const ArticleDetail = async ({ article }: ArticleDetailProps) => {
  return (
    <>
      {/* TODO: Use `html-react-parser` instead of `dangerouslySetInnerHTML` in the future */}
      <h1
        className="title"
        dangerouslySetInnerHTML={{ __html: article.title }}
      />
      {article.content.map((item, index) => (
        <div key={index}>
          {item.richEditor && (
            <div dangerouslySetInnerHTML={{ __html: item.richEditor }} />
          )}
          {item.html && <div dangerouslySetInnerHTML={{ __html: item.html }} />}
        </div>
      ))}
    </>
  );
};
