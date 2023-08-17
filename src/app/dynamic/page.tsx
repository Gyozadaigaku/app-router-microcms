import Link from "next/link";
import { getList } from "../../libs/microcms";

// Do not use caching
export const revalidate = 60;

export default async function StaticPage() {
  const { contents } = await getList();

  // Get the time the page was generated
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <h1>{time}</h1>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/dynamic/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}