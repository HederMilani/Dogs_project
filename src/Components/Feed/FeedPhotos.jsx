import React from "react";
import styles from "./FeedPhotos.module.css";
import FeedPhotosItem from "./FeedPhotosItem.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import { PHOTOS_GET } from "../../api.js";
import Error from "../../Helper/Error.jsx";
import Loading from "../../Helper/Loading.jsx";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(response, json);
    }
    fetchPhotos();
  }, [request]);

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
