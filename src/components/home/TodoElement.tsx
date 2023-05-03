import { FunctionComponent } from "react";
import { Todo } from "../../interfaces/interfaces";

interface TodoElementProps {
    _id: string;
    title: string;
    description: string;
    isDone: boolean;
}
 
const TodoElement: FunctionComponent<Todo> = (todo) => {

    
    return ( 
    <>
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
  </>
  )
}
 
export default TodoElement;