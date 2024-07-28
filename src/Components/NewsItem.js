import newsImage from '../images/newsimg.jpeg'
export const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2" style={{maxWidth:"360px"}}>
  <img src={src?src:newsImage} style={{height:"200px" , width:"340px"}}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"NewsBoard is online news viewing website. This is a demo para shown when our api  is unable to fetch data from sites."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}
