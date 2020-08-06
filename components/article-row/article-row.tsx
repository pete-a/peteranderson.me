import React from "react";
import { SimpleArticle } from "../../entities/article";
import { ThemeContext } from "../theme-context";
import { Heading } from "../heading/heading";
import { Theme } from "../theme";
import Link from "next/link";
import { thumbnailImageUrl } from "../../entities/article-helpers";
import baseStyles from "./article-row.module.scss";
import lightStyles from "./article-row--light.module.scss";
import darkStyles from "./article-row--dark.module.scss";
import { createThemedStyles } from "../../utils/styles";
import Markdown from "markdown-to-jsx";

interface Props {
  article: SimpleArticle;
  description?: string;
  theme: Theme;
  latest?: boolean;
}

export function ArticleRow({
  theme,
  article,
  latest,
  description,
}: Props): JSX.Element {
  const styles = createThemedStyles(theme, baseStyles, {
    lightStyles,
    darkStyles,
  });

  const imageCellStyle = {
    backgroundImage: `url(${thumbnailImageUrl(article.heroImage)})`,
    width: latest ? "128px" : "64px",
    height: latest ? "128px" : "64px",
  };
  return (
    <Link href={`/articles/${article.slug}`}>
      <a className={styles.linkWrapper} title={article.title}>
        <div className={`${styles.row} ${latest ? styles.latest : ""}`}>
          <div className={styles.imageCell} style={imageCellStyle}></div>
          <div className={styles.textCell}>
            <div>
              <Heading size="h4" theme={theme}>
                {article.title}
              </Heading>
            </div>
            {latest && (
              <p className={styles.description}>
                <Markdown>{description}</Markdown>
              </p>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}

export function ThemedArticleRow(props: Omit<Props, "theme">): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => <ArticleRow theme={theme} {...props} />}
    </ThemeContext.Consumer>
  );
}
