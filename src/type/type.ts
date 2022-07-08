
export type Source={
  id?: any;
  name: string;
}

export type TNewsItem={
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}