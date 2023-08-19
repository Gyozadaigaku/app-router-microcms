import { getArticles } from "../../libs/microcms";

export async function Article() {
  const { contents } = await getArticles();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

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
