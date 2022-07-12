import {  TNewsItem } from "../type/type";
const path = "https://newsapi.org/v2/everything";
const key='e1f6d61fb3224655b09882e1f3fc11b4';

export async function getData(url: string): Promise<any> {
  const res = await fetch(`${path}${url}apiKey=${key}`)
  if (!res.ok) new Error(`Could not fetch ${url}` + `, received ${res.status}`)
  return res.json();
}


export default class Newsapi {
  //запрос на новости
  static async getNews(url: string, sortBy:string='publishedAt'): Promise<TNewsItem[]> {
    return await getData(`${url}&${sortBy}`);
  }

  // static async getNews1(page?: number, pageSize?: number): Promise<TNewsItem[]> {
  //   const params = page && pageSize ? `&page=${page}&pageSize=${pageSize}` : ''
  //   return await getData(`?q=art%20painter&NFT${params}&apiKey=e1f6d61fb3224655b09882e1f3fc11b4`);
  // }
}