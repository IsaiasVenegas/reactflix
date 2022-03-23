import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Badge } from "reactstrap";

const getRatio = (l, d) => {
  let total = l + d;
  let percentage = total > 0 ? (l * 100) / total : (l * 100) / 1;
  return percentage.toFixed(0);
};

const Movie = ({ info, remove }) => {
  const likeRatio = useMemo(() => getRatio(info.likes, info.dislikes), [info]);
  return (
    <div className="container movie">
      <div className="row">
        <div className="col">
          <p className="img">{info.title}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container movie-info">
            <div className="row">
              <div className="col">
                <button
                  className="btn"
                  aria-label="like"
                  title="Like this film"
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <button
                  className="btn"
                  aria-label="dislike"
                  title="Dislike this film"
                >
                  <FontAwesomeIcon icon={faThumbsDown} />
                </button>
                <button
                  className="btn"
                  aria-label="remove"
                  title="Remove this film"
                  onClick={() => remove((item) => item.id !== info.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="ratio-box"
                  style={{
                    background: `-webkit-linear-gradient(left, #00ff00 ${likeRatio}%, #ff0000 ${
                      100 - likeRatio
                    }%)`,
                  }}
                ></div>
                <p>{likeRatio}%</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Badge key={info.id} color="danger">
                  {info.category}
                </Badge>
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
