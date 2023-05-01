import { FunctionComponent, useState, useRef, FormEvent, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Social from "./SocialComponent";
import { login } from "../../actions/auth";

interface LoginProps {}

const required = (value: any) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login: FunctionComponent<LoginProps> = (props) => {
  let navigate = useNavigate();

   
  const form = useRef<HTMLFormElement>(null);
  const checkBtn = useRef<HTMLButtonElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn } = useSelector((state:any) => state.auth);
  
  const { message } = useSelector((state: any) => state.message);

  
  //if state of user is login redirect them to home page
  useEffect(()=>{
    if (isLoggedIn) {
      return navigate("/");
    }
  })
  

  const dispatch = useDispatch();

  const onChangEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email,password)(dispatch).then(()=>{
      navigate("/");
      window.location.reload();

    }).catch(()=>{
      navigate("/login");
    })
   
  };



  return (
    <form onSubmit={handleLogin} ref={form}>
      <h3>Login Here</h3>

      <label htmlFor="email">Email</label>
      <input type="text" placeholder="Email" id="email" onChange={onChangEmail} value={email}/>

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" onChange={onChangePassword} value={password}/>

      <button ref={checkBtn}>submit</button>
      <p>
        Not user ?<Link to="/signup">Signup</Link>
      </p>
      <Social></Social>
    </form>
  );
};

export default Login;
