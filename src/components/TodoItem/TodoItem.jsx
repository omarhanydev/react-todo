import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import "./TodoItem.scss";

export default function TodoItem () {
    return (
        <label className="todo-item">
            <input type="checkbox" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet repellat animi neque facilis itaque, ex error magnam officia molestias totam est obcaecati nobis, non ullam? Blanditiis earum dolorem a?</span>
            <button className="remove">
                <span><AiOutlineDelete /></span>
                <span className="hover"><AiFillDelete /></span>
            </button>
        </label>
    )
}