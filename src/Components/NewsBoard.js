
/*
import { useEffect, useState } from "react"
import { NewsItem } from "./NewsItem";

 

export const NewsBoard = ({category}) => {
   
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2190a78ec0f2442ab0d682de46e9b472`
    fetch(url)
    .then(response=>response.json())
    .then(data=>setArticles(data.articles))
  },[category])



  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage}
             url={news.url}
        />
      })}
    </div>
  )
}
*/
// src/Components/NewsBoard.jsx
import React, { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2190a78ec0f2442ab0d682de46e9b472`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center my-4">Latest <span className="badge bg-danger">News</span></h2>
      <div className="row">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};
