import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="mx-2 my-1 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: "0%", zIndex: 1 }}>
          {source}
        </span>
        <img className="card-img-top" src={imageUrl} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a href={newsUrl} className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
