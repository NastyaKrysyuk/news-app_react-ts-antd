import { TNewsItem } from "../type/type";

const path = "https://newsapi.org/v2/everything";
const key = 'e1f6d61fb3224655b09882e1f3fc11b4';

type TRes={
articles:TNewsItem[],
status:string,
totalResults:number
}
export async function getData(url: string): Promise<TRes> {
  const res = await fetch(`${path}${url}apiKey=${key}`);
  if (!res.ok) new Error(`Could not fetch ${url}` + `, received ${res.status}`)
  return res.json();
}

//по дефолту: Request URL: https://newsapi.org/v2/everything?q=art%painter&NFT&sortBy=publishedAt&apiKey=e1f6d61fb3224655b09882e1f3fc11b4

export default class Newsapi {
  //запрос на новости
  static async getNews(url: string, sortBy: string = 'publishedAt'): Promise<TRes> {
    return await getData(`${url}sortBy=${sortBy}&`);
  }
}


