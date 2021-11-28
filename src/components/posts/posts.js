import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "../post/post";

import styles from "./posts.module.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:3001/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [posts]);

  return (
    <section className={styles.container}>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <Post post={post} />;
        })
      ) : (
        <span>No posts yet</span>
      )}
    </section>
  );
};

export default Posts;
