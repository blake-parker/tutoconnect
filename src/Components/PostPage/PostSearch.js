import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import DateFilter from "./DateFilter";

import "../CSS/posts.css";
import "../CSS/posts-search.css";

function PostSearch({ hc, hc2, sB1, sB2 }) {
  const navigate = useNavigate();
  const [isSelectedB1, setIsSelectedB1] = useState(sB1);
  const [isSelectedB2, setIsSelectedB2] = useState(sB2);

  const handleClick = () => {
    setIsSelectedB1(!isSelectedB1);
    if (isSelectedB2) {
      setIsSelectedB2(false);
    }
  };
  const handleClick2 = () => {
    setIsSelectedB2(!isSelectedB2);
    if (isSelectedB1) {
      setIsSelectedB1(false);
    }
  };

  const handleSearch = () => {
    isSelectedB1 ? hc() : hc2();
  };

  const createPostHandleClick = () => {
    navigate("/CreatePost");
  };

  return (
    <div className="post-search-container">
      <div className="searchBar-container2">
        <div className="input-container2">
          <input type="text" id="search2" placeholder="" />
        </div>
      </div>
      <div className="button-container">
        <div className="left-button-container-s">
          <button
            className={isSelectedB1 ? "selected-button" : "normal-button"}
            type="button"
            id="button1-s"
            onClick={handleClick}
          >
            Student
          </button>
          <button
            className={isSelectedB2 ? "selected-button" : "normal-button"}
            type="button"
            id="button2-s"
            onClick={handleClick2}
          >
            Tutor
          </button>
        </div>
        <div className="search-btn">
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="filter-container">
        <div className="filter-text">Filter By:</div>
        <div className="everything-else">
          <div className="rating-filter">
            Rating:
            <div className="stars">
              <StarRating />
            </div>
          </div>
          <div className="date-filter">
            <div id="date-ttl">Date:</div>
            <div id="date-bdy">
              <DateFilter />
            </div>
          </div>
          <div className="sort-by">
            <p>Sort By:</p>
            <div className="status-box">
              <select name="selectedStatus" defaultValue="newest">
                <option value="newest">Newest Posts First</option>
                <option value="oldest">Oldest Posts First</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="aply-fltr-btn">
        <button>Apply Filters</button>
      </div>
    </div>
  );
}

export default PostSearch;
