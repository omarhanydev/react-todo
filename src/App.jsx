import AddTodo from "./components/AddTodo/AddTodo"
import Header from "./components/Header/Header"
import TodoList from "./components/TodoList/TodoList"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from "./store/todosSlice";

function App() {
  const { loading, todos, searchQuery } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      setTimeout(function () {
        dispatch(setLoading(false));
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <>
      <Header />
      <div className="container">
        {loading ?
          <div className="loading-spinner"><AiOutlineLoading3Quarters /></div> : (
            <>
              {!searchQuery && <AddTodo />}
              <TodoList />
            </>
          )
        }
      </div>
    </>
  )
}

export default App
