import { useState } from "react";
import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todosSlice";
import "./AddTodo.scss";

export default function AddTodo() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleAddTodo = () => {
        dispatch(addTodo(text));
        setText('');
    }

    return (
        <label className="add-todo">
            <input type="text" placeholder="What would you like to do? ..." value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' ? handleAddTodo() : null} />
            <button type="button" onClick={handleAddTodo}>
                <span><AiOutlinePlusCircle /></span>
                <span className="hover"><AiFillPlusCircle /></span>
            </button>
        </label>
    )
}