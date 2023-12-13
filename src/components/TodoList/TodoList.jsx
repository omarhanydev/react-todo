import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

export default function TodoList ({ searchQuery, todos, toggleTodo, removeTodo }) {
    return (
        <div className={`${searchQuery ? 'todo-list searching' : (todos.length ? 'todo-list' : null)}`}>
            {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            ))}
            {todos.length == 0 && searchQuery ? <h6>No results found</h6> : null}
        </div>
    )
}