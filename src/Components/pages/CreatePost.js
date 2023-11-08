import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import "../pagesCSS/createPost.css";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postType, setPostType] = useState("student");

  const postCollectionRef = collection(db, "posts");

  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      timestamp: serverTimestamp(),
      postType,
    });
    alert("Your post has been created successfully!");
    navigate("/");
  };

  const handlePostTypeChange = (e) => {
    setPostType(e.target.value);
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </div>
        <label>
          I am a...
          <select
            name="selectedStatus"
            defaultValue="student"
            onChange={handlePostTypeChange}
          >
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>
        </label>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}
export default CreatePost;
