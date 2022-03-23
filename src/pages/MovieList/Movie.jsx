import React, { useMemo, useState } from "react";
import { Badge, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useLikes } from "./hooks";

const getRatio = (l, d) => {
  let total = l + d;
  let percentage = total > 0 ? (l * 100) / total : (l * 100) / 1;
  return Math.trunc(percentage);
};

const Movie = ({ info, remove, update }) => {
  const [like, dislike, manageButton] = useLikes(info, update);
  const likeRatio = useMemo(
    () => getRatio(info.likes, info.dislikes),
    [info, like, dislike]
  );
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
                <Button
                  className="action"
                  aria-label="like"
                  title="Like this film"
                  active={like}
                  onClick={() => manageButton(true)}
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                </Button>
                <Button
                  className="action"
                  aria-label="dislike"
                  title="Dislike this film"
                  active={dislike}
                  onClick={() => manageButton(false)}
                >
                  <FontAwesomeIcon icon={faThumbsDown} />
                </Button>
                <Button
                  className="action"
                  aria-label="remove"
                  title="Remove this film"
                  onClick={() => remove((item) => item.id !== info.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="ratio-box"
                  style={{
                    background: `linear-gradient(to right, #44cb65 0%, #44cb65 ${likeRatio}%, 
                      #dc3545 ${likeRatio}%, #dc3545 100%)`,
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
