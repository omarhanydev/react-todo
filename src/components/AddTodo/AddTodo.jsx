import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import "./AddTodo.scss";

export default function AddTodo () {
    return (
        <label className="add-todo">
            <input type="text" placeholder="What would you like to do? ..." />
            <button>
                <span><AiOutlinePlusCircle /></span>
                <span className="hover"><AiFillPlusCircle /></span>
            </button>
        </label>
    )
}