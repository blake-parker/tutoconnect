import "../pagesCSS/search.css";

function Search() {
  return (
    <>
      <div className="search">
        <h1>Search For Posts</h1>
        <form>
          <div className="input-container">
            <input type="text" id="search" placeholder="Search..." />
            <input type="submit" value="Go" />
          </div>
          <div className="button-container">
            <button type="button" id="button1">
              Button 1
            </button>
            <div id="divider"></div>
            <button type="button" id="button2">
              Button 2
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
