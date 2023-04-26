import { ChangeEvent, FormEvent, FunctionComponent, useRef, useState } from "react";
import Social from "../login/SocialComponent";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/auth";


interface SignupProps {}

const Signup: FunctionComponent<SignupProps> = () => {
  let navigate = useNavigate();

  const form = useRef<HTMLFormElement>(null);
  const checkBtn = useRef<HTMLButtonElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoggedIn } = useSelector((state:any) => state.auth);
  
  const { message } = useSelector((state: any) => state.message);

    //if state of user is login redirect them to home page
    if (isLoggedIn) {
      return <Navigate to="/home" />;
    }

    const dispatch = useDispatch();

    const onChangEmail = (e: ChangeEvent<HTMLInputElement>) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
      const password = e.target.value;
      setPassword(password);
    };

    const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
      const password = e.target.value;
      setConfirmPassword(password);

    };

    const handleRegister = (e:FormEvent<HTMLFormElement>) => {
      
      e.preventDefault();

      if(password!=confirmPassword){
        return alert('Passwords not much');
      }
      register(email,password)(dispatch).then(()=>{
        navigate("/login");
        window.location.reload();
  
      }).catch(()=>{
        navigate("/signup");
      })
     
    };
    

  return (
    <form onSubmit={handleRegister} ref={form}>
      <h3>Signup Here</h3>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="email" onChange={onChangEmail} value={email}/>

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" onChange={onChangePassword} value={password} />

      <label htmlFor="confirm_password">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        id="confirm_password"
        onChange={onChangeConfirmPassword} value={confirmPassword}
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
