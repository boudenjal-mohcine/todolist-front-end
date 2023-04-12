import { FunctionComponent } from "react";
import Social from "./SocialComponent";
import { Link } from "react-router-dom";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <form>
      <h3>Login Here</h3>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" />

      <button>Log In</button>
      <p>
        Not user ?<Link to="/signup">Signup</Link>
      </p>
      <Social></Social>
    </form>
  );
};

export default Login;
