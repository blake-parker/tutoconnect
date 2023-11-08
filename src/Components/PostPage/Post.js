import "../CSS/posts.css";
import logo from "../../logo/small_logo.png";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";

function Post({ title, author, text, id, authorID, postType }) {
  const deletePost = async (pid) => {
    const postDoc = doc(db, "posts", pid);
    await deleteDoc(postDoc);
  };

  return (
    <>
      <div className="posts-container">
        <div className="post-img-container">
          <img src={logo} alt="placeholder" />
          <p>{author}</p>
        </div>
        <div className="post-content-container">
          <div className="post-header">
            <h1>{title}</h1>
            <p>
              rating
              <br />
              view ratings
            </p>
            <div className="delete-post">
              {authorID === auth.currentUser.uid && (
                <button
                  onClick={() => {
                    deletePost(id);
                  }}
                >
                  &#128465;
                </button>
              )}
            </div>
          </div>
          <div className="post-content">
            <p>{text}</p>
            <button>message</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;
