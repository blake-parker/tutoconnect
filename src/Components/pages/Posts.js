import {
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebase";
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
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [query3, setQuery3] = useState("");

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
                userProfilePicture={post.author.pic}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Posts;
