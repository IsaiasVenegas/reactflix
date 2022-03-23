import { useState, useEffect } from "react";

/**
 * Manage like and dislike buttons
 */
const useLikes = (movie, update) => {
  const [like, toggleLike] = useState(false);
  const [dislike, toggleDislike] = useState(false);

  // Manage like and dislike buttons
  // Toggle dislike button if like is true and viceversa
  const manageButtons = (likeButton) => {
    if (likeButton) {
      let newState = !like;
      toggleLike(newState);
      update(movie, true, newState);
      if (newState && dislike) {
        toggleDislike(false);
        update(movie, false, false);
      }
    } else {
      let newState = !dislike;
      toggleDislike(newState);
      update(movie, false, newState);
      if (newState && like) {
        toggleLike(false);
        update(movie, true, false);
      }
    }
  };

  return [like, dislike, manageButtons];
};

export default useLikes;
