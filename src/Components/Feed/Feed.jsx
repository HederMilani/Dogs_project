import React from "react";
import styles from "./Feed.module.css";
import FeedModal from "./FeedModal.jsx";
import FeedPhotos from "./FeedPhotos.jsx";
import PropTypes from "prop-types";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [infinite, setInfinite] = React.useState(true);
  const [pages, setPages] = React.useState([1]);

  React.useEffect(() => {
    let wait = false;
    function infinityScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          console.log("Carregar mais fotos", infinite);
          wait = true;
          setPages((pages) => [...pages, pages.length + 1]);
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("scroll", infinityScroll);
    window.addEventListener("wheel", infinityScroll);
    return () => {
      window.removeEventListener("scroll", infinityScroll);
      window.removeEventListener("wheel", infinityScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
