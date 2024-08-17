import React from "react";
import styles from "./PhotoComments.module.css";
import { UserContext } from "../../UserContext.jsx";
import PhotoCommentsForm from "./PhotoCommentsForm.jsx";

const PhotoComments = ({ id, comments }) => {
  const { login } = React.useContext(UserContext);
  const [commentsList, setCommentsList] = React.useState(() => comments);
  return (
    <div>
      <ul style={styles.comments}>
        {commentsList.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} setCommentsList={setCommentsList} />}
    </div>
  );
};

export default PhotoComments;
