import { ReactNode } from "react"

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

export type TRoute = {
    path: string,
    element?: ReactNode
    children?:  TRoute[]
    name: string //опционально
    index?: boolean
    userRole: ''|
}