import React from "react";
import "./styles.css";

const getRatio = (l, d) => {
  let total = l + d;
  let percentage = total > 0 ? (l * 100) / total : (l * 100) / 1;
  return `${percentage.toFixed(0)}%`;
};

const Movie = ({ id, title, category, likes, dislikes }) => {
  return (
    <div className="container movie" id={id}>
      <div className="row">
        <div className="col">
          <p>image</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container movie-info">
            <div className="row">
              <div className="col">
                <p>{getRatio(likes, dislikes)}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{category}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="title">{title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movie;
