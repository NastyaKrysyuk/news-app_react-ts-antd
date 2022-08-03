import { ReactNode } from "react"

export type TNewsItem={
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export type TRoute = {
    path: string;
    element?: ReactNode;
    children?:  TRoute[];
    name: string;
}