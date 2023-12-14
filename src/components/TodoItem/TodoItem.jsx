import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/todosSlice";
import "./TodoItem.scss";

export default function TodoItem ({ id, text, complete }) {
    const dispatch = useDispatch();

    return (
        <label className="todo-item">
            <input type="checkbox" checked={complete} onChange={() => dispatch(toggleTodo(id))} />
            <span className="text">{text}</span>
            <button className="remove" onClick={() => dispatch(removeTodo(id))}>
                <span><AiOutlineDelete /></span>
                <span className="hover"><AiFillDelete /></span>
            </button>
        </label>
    )
}