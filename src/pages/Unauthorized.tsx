import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div>
      <h1>403 - Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Unauthorized;
