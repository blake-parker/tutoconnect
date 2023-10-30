import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useState, useEffect } from "react";
import PostSearch from "../PostPage/PostSearch";
import Post from "../PostPage/Post";
import "../CSS/posts.css";
import Navbar from "../NavBar/Navbar";

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "studentPosts")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(newData);
      console.log(posts, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <Navbar />
      <div className="post-page-container">
        <div className="search-bar">
          <PostSearch />
        </div>
        <div className="posts">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}
export default Posts;
