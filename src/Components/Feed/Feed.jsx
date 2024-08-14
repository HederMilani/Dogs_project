import React from "react";
import styles from "./Feed.module.css";
import FeedModal from "./FeedModal.jsx";
import FeedPhotos from "./FeedPhotos.jsx";

const Feed = () => {
  return (
    <div>
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};

export default Feed;
