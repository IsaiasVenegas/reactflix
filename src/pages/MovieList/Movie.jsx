import React from "react";
import "./styles.css";

const getRatio = (l, d) => {
  let total = l + d;
  let percentage = total > 0 ? (l * 100) / total : (l * 100) / 1;
  return `${percentage.toFixed(0)}%`;
};

const Movie = ({ info, remove }) => {
  return (
    <div className="container movie">
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
                <button
                  type="button"
                  onClick={() => remove((item) => item.id !== info.id)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{getRatio(info.likes, info.dislikes)}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{info.category}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="title">{info.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movie;
