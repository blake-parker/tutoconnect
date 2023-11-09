import {
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import PostSearch from "../PostPage/PostSearch";
import Post from "../PostPage/Post";
import "../CSS/posts.css";
import Navbar from "../NavBar/Navbar";

function Posts({
  postType,
  handleClick,
  handleClick2,
  selectedB1,
  selectedB2,
}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postCollectionRef = collection(db, "posts");
    const postQuery = query(
      postCollectionRef,
      where("postType", "==", postType)
    );

    const unsubscribe = onSnapshot(postQuery, (querySnapshot) => {
      const newPosts = [];
      querySnapshot.forEach((doc) => {
        newPosts.push({ ...doc.data(), id: doc.id });
      });
      setPosts(newPosts);
    });

    return () => {
      // Unsubscribe from the snapshot listener when the component unmounts
      unsubscribe();
    };
  }, [postType]);

  return (
    <>
      <div className="post-page-container">
        <div className="search-bar">
          <PostSearch
            postType={postType}
            hc={handleClick}
            hc2={handleClick2}
            sB1={selectedB1}
            sB2={selectedB2}
          />
        </div>
        <div className="posts">
          {posts.map((post) => {
            return (
              <Post
                title={post.title}
                author={post.author.name}
                text={post.postText}
                id={post.id}
                authorID={post.author.id}
                postType={postType}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Posts;
