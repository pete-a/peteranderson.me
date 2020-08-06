import React from "react";
import { ThemedHeading } from "../components/heading/heading";
import baseStyles from "./articles.module.scss";
import darkStyles from "./articles--dark.module.scss";
import lightStyles from "./articles--light.module.scss";
import {
  allSimpleArticles,
  SimpleArticle,
  articleFromSlug,
} from "../entities/article";
import { ThemeContext } from "../components/theme-context";
import { createThemedStyles } from "../utils/styles";
import { ThemedArticleRow } from "../components/article-row/article-row";

interface Props {
  articles: SimpleArticle[];
  latestArticleDescription: string;
}

function ArticlesPage(props: Props): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const styles = createThemedStyles(theme, baseStyles, {
          lightStyles,
          darkStyles,
        });
        return (
          <div className={styles.container}>
            <ThemedHeading size="h2">Articles</ThemedHeading>
            <div className={styles.articlesContainer}>
              <ThemedHeading size="h3">Latest</ThemedHeading>
              <ThemedArticleRow
                article={props.articles[0]}
                key={0}
                latest
                description={props.latestArticleDescription}
              />
              <div className={styles.olderArticlesContainer}>
                <ThemedHeading size="h3">Older</ThemedHeading>
                {props.articles.slice(1).map((article, i) => (
                  <ThemedArticleRow key={i + 1} article={article} />
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export async function getStaticProps(): Promise<{
  props: Pick<Props, "articles" | "latestArticleDescription">;
}> {
  const articles = await allSimpleArticles();
  const latestArticle = await articleFromSlug(articles[0].slug);
  if (latestArticle === null) {
    throw new Error(`Could not find article with slug '${articles[0].slug}'`);
  }
  return {
    props: {
      articles,
      latestArticleDescription: latestArticle.description || "",
    },
  };
}

export default ArticlesPage;
