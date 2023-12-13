import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

export default function TodoList () {
    return (
        <div className="todo-list">
            <TodoItem />
        </div>
    )
}