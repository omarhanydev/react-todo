import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import "./TodoItem.scss";

export default function TodoItem ({ id, text, complete, toggleTodo, removeTodo }) {
    return (
        <label className="todo-item">
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
            <span className="text">{text}</span>
            <button className="remove" onClick={() => removeTodo(id)}>
                <span><AiOutlineDelete /></span>
                <span className="hover"><AiFillDelete /></span>
            </button>
        </label>
    )
}