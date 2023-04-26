import { log } from "console";
import { FormEvent, FunctionComponent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
     
  const form = useRef<HTMLFormElement>(null);
  const checkBtn = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state:any) => state.auth);

  
  //if user not login

  useEffect(()=>{
    if(isLoggedIn==false){
      navigate('/login');
    }
  })
  


  const handleLogout = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(localStorage.length);
    if(localStorage.length!=0)
        localStorage.removeItem('user');
    logout()(dispatch);
    navigate("/login");
    
  };

    return (  <>

        <h2>Hello user</h2>
        <form ref={form} onSubmit={handleLogout}>
            <button ref={checkBtn}>Logout</button>
        </form>
    
    </>  );
}
 
export default Home;