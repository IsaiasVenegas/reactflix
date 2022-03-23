import { useState, useEffect } from "react";

/**
 * Manage like and dislike buttons
 */
const useLikes = (movie, update) => {
  const [like, toggleLike] = useState(false);
  const [dislike, toggleDislike] = useState(false);

  // Manage like and dislike buttons
  const manageButtons = (likeButton) => {
    if (likeButton) {
      let newState = !like;
      toggleLike(newState);
      update(movie, true, newState);
    } else {
      let newState = !dislike;
      toggleDislike(newState);
      update(movie, false, newState);
    }
  };

  return [like, dislike, manageButtons];
};

export default useLikes;
