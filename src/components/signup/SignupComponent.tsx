import { FunctionComponent } from "react";
import Social from "../login/SocialComponent";
import { Link } from "react-router-dom";

interface SignupProps {}

const Signup: FunctionComponent<SignupProps> = () => {
  return (
    <form>
      <h3>Signup Here</h3>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" />

      <label htmlFor="confirm_password">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        id="confirm_password"
      />

      <button>Register</button>
      <p>
        Already user ?<Link to="/login">Login</Link>
      </p>
      <Social></Social>
    </form>
  );
};

export default Signup;
