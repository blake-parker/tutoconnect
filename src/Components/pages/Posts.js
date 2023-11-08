import { getDocs, collection, query, where } from "firebase/firestore";
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

  const postCollectionRef = collection(db, "posts");
  const postQuery = query(postCollectionRef, where("postType", "==", postType));

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postQuery);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [postQuery]);

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
