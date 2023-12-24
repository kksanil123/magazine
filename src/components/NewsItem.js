import '../App.css'
import image from '../assets/news.jpg'

const NewsItem = ({news}) => {
  return (
    <div className="card bg-dark random text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"360px"}}>
      <img src={news.urlToImage ? news.urlToImage:image} style={{height:'200px'}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <div className="news">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
        </div>
        <a href={news.url} className="btn btn-primary read-more">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem
