import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useState, useEffect } from "react";

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
      <div></div>
    </>
  );
}
export default Posts;
