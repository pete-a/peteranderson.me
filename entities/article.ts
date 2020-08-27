export type Article = {
  title: string;
  html: string;
  slug: string;
  date: string;
  updatedAt: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageReference: string | null;
  description: string | null;
  tags: string[] | null;
};

export type SimpleArticle = Pick<
  Article,
  "title" | "slug" | "date" | "heroImage" | "updatedAt"
>;

type ArticleMetadata = {
  title: string;
  heroImage: string;
  heroImageReference: string;
  heroImageAlt: string;
  description?: string;
  tags?: string[];
};

export async function allSlugs(): Promise<string[]> {
  const articles = await allSimpleArticles();
  return articles.map((article) => article.slug);
}

export async function allSimpleArticles(): Promise<SimpleArticle[]> {
  const url = `${process.env["CMS_API_URL"]}/content/posts?key=${process.env["CMS_API_CONTENT_KEY"]}&fields=title,slug,published_at,feature_image,updated_at`;

  const data = await fetch(url).then((resp) => resp.json());

  return data.posts.map((post) => ({
    title: post.title,
    slug: post.slug,
    date: post["published_at"],
    updatedAt: post["updated_at"],
    heroImage: (post["feature_image"] || "").replace(
      process.env["CMS_IMAGE_BASE_URL"],
      "https://cdn.peteranderson.me"
    ),
  }));
}

export async function articleFromSlug(slug: string): Promise<Article | null> {
  const url = `${process.env["CMS_API_URL"]}/content/posts/slug/${slug}?key=${process.env["CMS_API_CONTENT_KEY"]}`;

  const data = await fetch(url).then((resp) => resp.json());
  const articleData = data.posts[0];
  const article: Article = {
    title: articleData.title,
    tags: [], // TODO
    slug: articleData.slug,
    html: (articleData.html || "").replace(
      new RegExp(process.env["CMS_IMAGE_BASE_URL"] || "", "g"),
      "https://cdn.peteranderson.me"
    ),
    date: articleData["published_at"],
    updatedAt: articleData["updated_at"],
    heroImage: (articleData["feature_image"] || "").replace(
      new RegExp(process.env["CMS_IMAGE_BASE_URL"] || "", "g"),
      "https://cdn.peteranderson.me"
    ),
    heroImageAlt: "", // TODO,
    description: articleData.excerpt,
    heroImageReference: "", // TODO
  };
  return article;
}
