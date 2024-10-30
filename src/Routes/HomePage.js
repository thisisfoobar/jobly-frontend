import { Link } from "react-router-dom";

function HomePage({currentUser}) {
  return (
    <div>
      <h1>Welcome to Jobly</h1>
      <p>Your one-stop shop for job searching and company information.</p>
      {currentUser && <div>
        <Link to="/companies">
          <button>View Companies</button>
        </Link>
        <Link to="/jobs">
          <button>View Jobs</button>
        </Link>
      </div>}
    </div>
  );
}

export default HomePage;
