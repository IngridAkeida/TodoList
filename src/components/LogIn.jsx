import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="/todo">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
}
