/*import newsImage from '../images/newsimg.jpeg'
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
}*/


/*import newsImage1 from '../images/newsimg1.webp';
import newsImage2 from '../images/newsimg2.jpeg';
import newsImage3 from '../images/newsimg3.jpeg';
import newsImage4 from '../images/newsimg4.jpeg';

const randomImage = () => {
  const images = [newsImage1, newsImage2, newsImage3, newsImage4];
  return images[Math.floor(Math.random() * images.length)];
};

export const NewsItem = ({title, description, src, url}) => {
  const displayImage = src || randomImage();
  
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2" style={{maxWidth: "360px"}}>
      <img src={displayImage} style={{height: "200px", width: "340px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "NewsBoard is an online news viewing website. This is a demo para shown when our API is unable to fetch data from sites."}
        </p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};*/

// src/Components/NewsItem.jsx
import React from 'react';
import newsImage1 from '../images/newsimg1.webp';
import newsImage2 from '../images/newsimg2.jpeg';
import newsImage3 from '../images/newsimg3.jpeg';
import newsImage4 from '../images/newsimg4.jpeg';

const randomImage = () => {
  const images = [newsImage1, newsImage2, newsImage3, newsImage4];
  return images[Math.floor(Math.random() * images.length)];
};

export const NewsItem = ({ title, description, src, url }) => {
  const displayImage = src || randomImage();

  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
      <div className="card bg-dark text-light h-100" style={{ maxWidth: "100%" }}>
        <img src={displayImage} className="card-img-top" alt="News" style={{ height: "200px", objectFit: "cover" }}/>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description ? description.slice(0, 90) : "NewsBoard is an online news viewing website. This is a demo paragraph shown when our API is unable to fetch data from sites."}
          </p>
          <a href={url} className="btn btn-primary mt-auto">Read More</a>
        </div>
      </div>
    </div>
  );
};

