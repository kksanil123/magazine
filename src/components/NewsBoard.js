import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = () => {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        const key = 'd67ee908f1874f8a8da1e695a3170a3f'
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles))
    },[])
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        <div className="magazine">
          {articles.map((news,i)=>{
            return <NewsItem news={news} key={i}/>
        })}
        </div>
    </div>
  )
}

export default NewsBoard