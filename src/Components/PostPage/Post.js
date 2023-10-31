import "../CSS/posts.css";
import logo from "../../logo/small_logo.png";

function Post() {
  return (
    <>
      <div className="posts-container">
        <div className="post-img-container">
          <img src={logo} alt="placeholder" />
        </div>
        <div className="post-content-container">
          <div className="post-header">
            <h1>Title</h1>
            <p>
              rating
              <br />
              view ratings
            </p>
          </div>
          <div className="post-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              asperiores hic, enim commodi corrupti minima illo, sed adipisci
              maiores fugit numquam consectetur laborum, fuga beatae. Odit
              ratione perspiciatis amet ad?
            </p>
            <button>message</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;
