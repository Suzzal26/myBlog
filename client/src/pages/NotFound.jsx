import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <div></div>
          <h1>404</h1>
        </div>
        <h2>Page not found</h2>
        <label>
          <img src="/robot.png" alt="Robot Logo" className="logo" />
        </label>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">home page</Link>
      </div>
    </div>
  );
};

export default NotFound;
