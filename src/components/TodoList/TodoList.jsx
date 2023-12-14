import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

export default function TodoList() {
    const { searchQuery, todos } = useSelector(state => state.todos);

    let filteredTodos = todos;

    if (searchQuery) {
        filteredTodos = filteredTodos.filter(todo => {
            if (todo.text.includes(searchQuery.toLowerCase())) {
                return todo;
            }
        });
    }

    return (
        <div className={`${searchQuery ? 'todo-list searching' : (filteredTodos.length ? 'todo-list' : null)}`}>
            {filteredTodos.map(todo => (
                <TodoItem key={todo.id} {...todo} />
            ))}
            {filteredTodos.length == 0 && searchQuery ? <h6>No results found</h6> : null}
        </div>
    )
}