import { useState } from "react";
import Navbar from "../NavBar/Navbar";
import "../pagesCSS/search.css";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import Posts from "./Posts";

function Search() {
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState("");
  const [isSelectedB1, setIsSelectedB1] = useState(false);
  const handleClick = () => {
    setIsSelectedB1(!isSelectedB1);
    console.log(sortBy);
    setSortBy("student");
    if (isSelectedB2) {
      setIsSelectedB2(false);
    }
  };

  const [isSelectedB2, setIsSelectedB2] = useState(false);
  const handleClick2 = () => {
    setSortBy("tutor");
    setIsSelectedB2(!isSelectedB2);
    if (isSelectedB1) {
      setIsSelectedB1(false);
    }
  };

  const createPostHandleClick = () => {
    navigate("/CreatePost");
  };

  const [search, setSearch] = useState("");
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const goHandleClick = async (e) => {
    e.preventDefault();
    setGoClicked(true);
  };

  const goFalse = () => {
    setGoClicked(false);
  };

  const [goClicked, setGoClicked] = useState(false);

  return (
    <>
      {!goClicked ? (
        <div className="search">
          <h1>I'm looking for a...</h1>
          <form>
            <div className="input-container">
              <input
                type="text"
                id="search"
                placeholder=""
                onChange={handleInputChange}
              />
            </div>
            <div className="button-container">
              <div className="left-button-container">
                <button
                  className={isSelectedB1 ? "selected-button" : "normal-button"}
                  type="button"
                  id="button1"
                  onClick={handleClick}
                >
                  Student
                </button>
                <button
                  className={isSelectedB2 ? "selected-button" : "normal-button"}
                  type="button"
                  id="button2"
                  onClick={handleClick2}
                >
                  Tutor
                </button>
              </div>
              <button className="other-button" id="go" onClick={goHandleClick}>
                Go
              </button>
            </div>
          </form>
          <button
            className="other-button"
            id="create-post"
            onClick={createPostHandleClick}
          >
            Create Post
          </button>
        </div>
      ) : (
        <Posts
          postType={sortBy}
          handleClick={handleClick}
          handleClick2={handleClick2}
          selectedB1={isSelectedB1}
          selectedB2={isSelectedB2}
        />
      )}
    </>
  );
}

export default Search;
