import React, { useState } from "react";
import axios from "axios";

import EditPost from "./editPost";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faEdit } from "@fortawesome/free-solid-svg-icons";

import styles from "./post.module.scss";

const Post = (props) => {
  const [editMode, setEditMode] = useState(false);

  const onDelete = () => {
    axios
      .post("/https://localhost:3001/posts/delete", { id: props.id })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <article className={styles.post}>
      {editMode ? (
        <EditPost cancelEdit={() => setEditMode(false)} post={props} />
      ) : (
        <>
          <div className={styles.header}>
            <h5 className={styles.username}>{props.user}</h5>
            <div className={styles.header__right}>
              <div className={styles.icon_delete} onClick={() => onDelete}>
                <FontAwesomeIcon icon={faWindowClose} className={styles.icon} />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEdit}
                  className={styles.icon}
                  onClick={() => setEditMode(true)}
                />
              </div>
            </div>
          </div>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </>
      )}
    </article>
  );
};

export default Post;
