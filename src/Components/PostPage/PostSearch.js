import { useState } from "react";

import "../CSS/posts.css";
import "../CSS/posts-search.css";

function PostSearch({ postType, hc, hc2 }) {
  const [isSelectedB1, setIsSelectedB1] = useState(false);
  const [isSelectedB2, setIsSelectedB2] = useState(false);

  const handleClick = () => {
    setIsSelectedB1(!isSelectedB1);
    hc();
    if (isSelectedB2) {
      setIsSelectedB2(false);
    }
  };
  const handleClick2 = () => {
    hc2();
    setIsSelectedB2(!isSelectedB2);
    if (isSelectedB1) {
      setIsSelectedB1(false);
    }
  };
  return (
    <div className="post-search-container">
      PostSearch
      <div className="searchBar-container2">
        <div className="input-container2">
          <input type="text" id="search2" placeholder="" />
        </div>
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
      </div>
    </div>
  );
}
export default PostSearch;
