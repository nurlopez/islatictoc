class ArticleItem {
  constructor(
    readonly title: string,
    readonly creator: string,
    readonly pubDate: string,
    readonly link: string,
    readonly contentSnippet?: string
  ) {}
}

export default ArticleItem;
