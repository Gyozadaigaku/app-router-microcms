import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  CustomRequestInit,
} from "microcms-js-sdk";

export type Blog = {
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

// Get a list of blog posts
export const getList = async (
  customRequestInit?: CustomRequestInit,
  queries?: MicroCMSQueries
) => {
  const listData = await client.getList<Blog>({
    customRequestInit,
    endpoint: "blogs",
    queries,
  });

  // Add a delay effect to make data retrieval visually noticeable
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};

// Get the details of a specific blog post
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  // Add a delay effect to make data retrieval visually noticeable
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return detailData;
};
