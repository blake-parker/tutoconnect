import "../CSS/posts.css";
import logo from "../../logo/small_logo.png";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useState } from "react";
import Modal from "../Modal";

function Post({
  title,
  author,
  text,
  id,
  authorID,
  postType,
  userProfilePicture,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deletePost = async (pid) => {
    const postDoc = doc(db, "posts", pid);
    await deleteDoc(postDoc);
    closeModal();
  };
  return (
    <>
      <div className="posts-container">
        <div className="post-img-container">
          <img src={userProfilePicture || logo} alt="placeholder" />
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
                <>
                  <button onClick={openModal}>&#128465;</button>
                  <Modal
                    isOpen={isModalOpen}
                    onConfirm={() => {
                      deletePost(id);
                    }}
                  >
                    <h2>Are you sure you want to delete your post?</h2>
                  </Modal>
                </>
              )}
            </div>
          </div>
          <div className="post-content">
            <p>{text}</p>
            <button onClick={openModal}>message</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;
