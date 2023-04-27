import { FormEvent, FunctionComponent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";
import "./HomeComponent.css";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const form = useRef<HTMLFormElement>(null);
  const checkBtn = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: any) => state.auth);

  //if user not login

  // useEffect(()=>{
  //   if(isLoggedIn==false){
  //     navigate('/login');
  //   }
  // })

  const handleLogout = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(localStorage.length);
    if (localStorage.length != 0) localStorage.removeItem("user");
    logout()(dispatch);
    //  navigate("/login");
  };

  return (
    <>
      <h2>Hello user</h2>
      <form ref={form} onSubmit={handleLogout}>
        <button ref={checkBtn}>Logout</button>
      </form>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Todo List</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table">
                <table className="table table-responsive-xl">
                  <thead>
                    <tr>
                      <th>&nbsp;</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="alert" role="alert">
                      <td>
                        <label className="checkbox-wrap checkbox-primary">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td className="d-flex align-items-center">
                        <div className="pl-3">
                          <span>Do homework</span>
                        </div>
                      </td>
                      <td>I should do my homework</td>
                      <td className="status">
                        <span className="active">Done</span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">
                            <i className="fa fa-close"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="alert" role="alert">
                      <td>
                        <label className="checkbox-wrap checkbox-primary">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td className="d-flex align-items-center">
                        <div className="pl-3">
                          <span>Buy something</span>
                        </div>
                      </td>
                      <td>Buy some milk</td>
                      <td className="status">
                        <span className="waiting">
                          Not yet
                        </span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">
                            <i className="fa fa-close"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
