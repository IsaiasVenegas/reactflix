import { useState, useEffect } from "react";

/**
 * Manage like and dislike buttons
 */
const useLikes = (movie) => {
  const [like, toggleLike] = useState(false);
  const [dislike, toggleDislike] = useState(false);

  // Increase/decrease a like/dislike count of a movie clicking on its button
  const manageLike = (likeButton) => {
    if (likeButton) {
      let newState = !like;
      toggleLike(newState);
      newState ? (movie.likes += 1) : (movie.likes -= 1); // setAction
    } else {
      let newState = !dislike;
      toggleDislike(newState);
      newState ? (movie.dislikes += 1) : (movie.dislikes -= 1); // setAction
    }
  };

  return [like, dislike, manageLike];
};

export default useLikes;
