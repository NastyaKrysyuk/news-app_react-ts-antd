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
}