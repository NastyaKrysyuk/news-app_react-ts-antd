import {  TNewsItem } from "../type/type";
const path = "https://newsapi.org/v2/everything";

export async function getData(url: string): Promise<any> {
  const res = await fetch(`${path}${url}`)
  if (!res.ok) new Error(`Could not fetch ${url}` + `, received ${res.status}`)
  return res.json();
}


export default class Newsapi {
  //запрос на новости
  static async getNews(url: string): Promise<TNewsItem[]> {
    return await getData(url);
  }

  static async getNews1(page?: number, pageSize?: number): Promise<TNewsItem[]> {
    const params = page && pageSize ? `&page=${page}&pageSize=${pageSize}` : ''
    return await getData(`?q=art%20painter&NFT${params}&apiKey=e1f6d61fb3224655b09882e1f3fc11b4`);
  }
}