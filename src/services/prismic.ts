import { createClient, HttpRequestLike } from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

export function getPrismicClient(req?: HttpRequestLike) {
  const prismic = createClient(process.env.PRISMIC_ENDPOINT!, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  enableAutoPreviews({
    client: prismic,
    // previewData: config.previewData,
    req,
  });

  return prismic;
}
