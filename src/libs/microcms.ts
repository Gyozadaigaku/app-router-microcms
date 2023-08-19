import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  CustomRequestInit,
} from "microcms-js-sdk";

export type Article = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// Get a list of articles posts
export const getArticles = async (
  customRequestInit?: CustomRequestInit,
  queries?: MicroCMSQueries
) => {
  const listData = await client.getList<Article>({
    customRequestInit,
    endpoint: "articles",
    queries,
  });

  // Add a delay effect to make data retrieval visually noticeable
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};

// Get the details of a specific article post
export const getArticle = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
    queries,
  });

  // Add a delay effect to make data retrieval visually noticeable
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return detailData;
};
