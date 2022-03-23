import { useState, useEffect } from "react";

/**
 * Manage like and dislike buttons
 */
const useLikes = () => {
  const [like, toggleLike] = useState(false);
  const [dislike, toggleDislike] = useState(false);

  // Increase/decrease a like/dislike count of a movie clicking on its button
  const manageLike = (likeButton) => {
    if (likeButton) {
      let newState = !like;
      toggleLike(newState);
      // setAction
    } else {
      let newState = !dislike;
      toggleDislike(newState);
      // setAction
    }
  };

  return [like, dislike, manageLike];
};

export default useLikes;
