import {
  FormEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";
import "./HomeComponent.css";
import { Todo } from "../../interfaces/interfaces";
import axios, { AxiosResponse } from "axios";
import { getTodos, deleteTodo } from "../../api/todos.service";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const form = useRef<HTMLFormElement>(null);
  const checkBtn = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: any) => state.auth);

  const [userTodos, getUserTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (isLoggedIn == false) {
      navigate("/login");
    }
    getTodos()
      .then((response: AxiosResponse<any>) => {
        const todos = response.data as Todo[];
        console.log(todos);

        getUserTodos(todos);
      })
      .catch((error: string) => console.error(error));
  }, []);

  const handleLogout = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(localStorage.length);
    if (localStorage.length != 0) localStorage.removeItem("user");
    logout()(dispatch);
    navigate("/login");
  };

  //delete todo
  const deleteTodoHandler = (todo: Todo) => {
    deleteTodo(todo._id)
      .then(() => {
        const updatedUserTodos = userTodos.filter((t) => t._id !== todo._id);
        getUserTodos(updatedUserTodos);
      })
      .catch((error: string) => console.error(error));
  };

  return (
    <>
      <h2>Hello user</h2>
      <form ref={form} id="logout_form" onSubmit={handleLogout}>
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
                    {userTodos &&
                      userTodos.map((todo) => (
                        <tr key={todo._id} className="alert" role="alert">
                          <td>
                            <label className="checkbox-wrap checkbox-primary">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td className="d-flex align-items-center">
                            <div className="pl-3">
                              <span>{todo.title}</span>
                            </div>
                          </td>
                          <td>{todo.description}</td>
                          <td className="status">
                            <span
                              className={`${
                                todo.isDone ? "active" : "waiting"
                              }`}
                            >
                              {todo.isDone ? "Done" : "Not yet"}
                            </span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="close"
                              onClick={() => deleteTodoHandler(todo)}
                            >
                              <span aria-hidden="true">
                                <i className="fa fa-close"></i>
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
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
