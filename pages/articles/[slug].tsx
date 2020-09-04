import React, { useEffect } from "react";
import { allSlugs, Article, articleFromSlug } from "../../entities/article";
import baseStyles from "./[slug].module.scss";
import darkStyles from "./[slug]--dark.module.scss";
import lightStyles from "./[slug]--light.module.scss";
import { GetStaticProps } from "next";
import { ThemedHeading } from "../../components/heading/heading";
import Markdown from "markdown-to-jsx";
import { format, parseISO } from "date-fns";
import Prism from "prismjs";
import "prismjs/components/prism-typescript.min.js";
import { Footer } from "../../components/footer/footer";
import { createThemedStyles } from "../../utils/styles";
import { ThemeContext } from "../../components/theme-context";
import Head from "next/head";

interface Props {
  article: Article;
}

function ArticlePage({ article }: Props): JSX.Element {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const date = parseISO(article.date);
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const styles = createThemedStyles(theme, baseStyles, {
          lightStyles,
          darkStyles,
        });

        return (
          <>
            <Head>
              <title>{article.title} | Peter Anderson</title>
              {article.description && (
                <>
                  <meta name="description" content={article.description} />
                  <meta
                    property="og:description"
                    content={article.description}
                  />
                </>
              )}
              <meta
                property="og:title"
                content={`Peter Anderson | ${article.title}`}
              />
              <meta property="og:image" content={article.heroImage} />
              <meta property="og:type" content="article" />
            </Head>
            <div className={styles.container}>
              <div className={styles.content}>
                <div className={styles.title}>
                  <ThemedHeading
                    size="h1"
                    style={{
                      lineHeight: "1.25em",
                      margin: 0,
                      fontSize: "2em",
                    }}
                  >
                    {article.title}
                  </ThemedHeading>
                  <span className={styles.articleDate}>
                    {format(date, "d MMMM yyyy")}
                  </span>
                </div>
                {article.heroImage && (
                  <img
                    src={article.heroImage}
                    className={styles.heroImage}
                    alt={article.heroImageAlt}
                  />
                )}
                {article.heroImageReference && (
                  <div className={styles.heroImageReference}>
                    <Markdown>{article.heroImageReference}</Markdown>
                  </div>
                )}
                <div
                  className={styles.articleContent}
                  dangerouslySetInnerHTML={{ __html: article.html }}
                ></div>
              </div>
              <Footer />
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export async function getStaticPaths(): Promise<{
  paths: { params: { slug: string } }[];
  fallback: boolean;
}> {
  const slugs = await allSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug: string = context.params?.slug as string;
  const article = await articleFromSlug(slug);
  if (article === null) {
    throw new Error(`Could not find article with slug '${slug}'`);
  }
  return { props: { article } };
};

export default ArticlePage;
