import {  TNewsItem } from "../type/type";
const path = "https://newsapi.org/v2/everything?q=art%";
const apiKey = '&searchIn=title&apiKey=767d098e86da4912982b1bb48f2e0e72'

export async function getData(url: string): Promise<any> {
  const res = await fetch(`${path}${url}${apiKey}`)
  if (!res.ok) throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
  return res.json();
}

export default class Newsapi {

  static async getNews1(page: number, pageSize: number, forSearchInput:string=''): Promise<{articles: TNewsItem[], totalResults: number}> {
    const params = `page=${page}&pageSize=${pageSize}`
    return await getData(`${forSearchInput}&${params}`);
  }
}  





// //запрос на новости
  // static async getNews(url: string): Promise<{articles: TNewsItem[], totalResults: number}> {
  //   return await getData(url);
  // }
