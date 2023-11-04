import { useState } from "react";

import "../CSS/posts.css";
import "../CSS/posts-search.css";

function PostSearch({ hc, hc2, sB1, sB2 }) {
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
  return (
    <div className="post-search-container">
      PostSearch
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
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="filter-container">
        <div className="filter-text">Filter By:</div>
        <div className="rating-filter">
          Rating
          <div className="stars"></div>
        </div>
        <div className="date-filter">
          Date: <br />
          <input type="checkbox" id="day" name="day" value="day" />
          <label for="day"> Posted today</label>
          <br />
          <input type="checkbox" id="week" name="week" value="week" />
          <label for="week"> Posted this week</label>
          <br />
          <input type="checkbox" id="month" name="month" value="month" />
          <label for="month"> Posted this month</label>
          <br />
        </div>
        <div className="sort-by">
          Sort By:
          <select name="selectedStatus" defaultValue="newest">
            <option value="newest">Newest Posts First</option>
            <option value="oldest">Oldest Posts First</option>
          </select>
        </div>
      </div>
      <button className="search-button">Apply Filters</button>
    </div>
  );
}
export default PostSearch;
