import { Article } from "../../libs/microcms";

export async function ArticlePromiseProps({
  promise,
}: {
  promise: Promise<{ contents: Article[] }>;
}) {
  const { contents } = await promise;

  return (
    <ul>
      {contents.map((item) => {
        return (
          <li key={item.id}>
            <h1>{item.title}</h1>
          </li>
        );
      })}
    </ul>
  );
}
