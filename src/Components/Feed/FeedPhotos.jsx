import React from "react";
import styles from "./FeedPhotos.module.css";
import FeedPhotosItem from "./FeedPhotosItem.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import { PHOTOS_GET } from "../../api.js";
import Error from "../../Helper/Error.jsx";
import Loading from "../../Helper/Loading.jsx";

const FeedPhotos = ({ setInfinite, setModalPhoto, user, page }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const total = 6;
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`animeLeft ${styles.feed}`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  }
  return null;
};

export default FeedPhotos;
