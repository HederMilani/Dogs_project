import React from "react";
import styles from "./PhotoComments.module.css";
import { UserContext } from "../../UserContext.jsx";
import PhotoCommentsForm from "./PhotoCommentsForm.jsx";

const PhotoComments = ({ id, comments, single }) => {
  const { login } = React.useContext(UserContext);
  const [commentsList, setCommentsList] = React.useState(() => comments);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [commentsList]);

  return (
    <div>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ""}`}
      >
        {commentsList.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          id={id}
          setCommentsList={setCommentsList}
          single={single}
        />
      )}
    </div>
  );
};

export default PhotoComments;
