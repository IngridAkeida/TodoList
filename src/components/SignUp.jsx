import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="/todo">Submit</Link>
      </form>
    </div>
  );
}
