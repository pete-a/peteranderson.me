import React from "react";
import { allSimpleArticles } from "../entities/article";
import { GetServerSidePropsContext } from "next";

type UrlWithDate = {
  url: string;
  date: string | null;
};

interface Props {
  urlsWithDate: UrlWithDate[];
}

function createSitemap(urlsWithDate: UrlWithDate[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlsWithDate
      .map((data) => {
        return `
        <url>
            <loc>${data.url}</loc>
            ${data.date ? `<lastmod>${data.date}</lastmod>` : ""}
        </url>`;
      })
      .join("\n")}
</urlset>
`;
}

function SiteMap(): JSX.Element {
  return <></>;
}

export async function getServerSideProps({
  res,
}: GetServerSidePropsContext<Record<string, string>>): Promise<{
  props: Props;
}> {
  const articles = await allSimpleArticles();
  const articleUrlsWithDate: UrlWithDate[] = articles.map((article) => ({
    url: `https://peteranderson.me/articles/${article.slug}`,
    date: article.updatedAt,
  }));

  const pageUrls: UrlWithDate[] = [
    { url: "https://peteranderson.me", date: null },
    { url: "https://peteranderson.me/technology", date: null },
    { url: "https://peteranderson.me/articles", date: articles[0].updatedAt },
    { url: "https://peteranderson.me/contact-me", date: null },
  ];

  const urls = pageUrls.concat(articleUrlsWithDate);

  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap(urls));
  res.end();
  return {
    props: {
      urlsWithDate: urls,
    },
  };
}

export default SiteMap;
