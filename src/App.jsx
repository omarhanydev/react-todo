import AddTodo from "./components/AddTodo/AddTodo"
import Header from "./components/Header/Header"
import TodoList from "./components/TodoList/TodoList"

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <AddTodo/>
        <TodoList/>
      </div>
    </>
  )
}

export default App
