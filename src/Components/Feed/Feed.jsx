import React from "react";
import styles from "./Feed.module.css";
import FeedModal from "./FeedModal.jsx";
import FeedPhotos from "./FeedPhotos.jsx";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
