import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

function getStoredTodos () {
    if (typeof localStorage !== 'undefined') {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos !== null ? JSON.parse(storedTodos) : [];
    } else {
        return [];
    }
}

const initialState = {
    loading: true,
    searchQuery: '',
    todos: getStoredTodos()
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        addTodo: (state, action) => {
            const text = action.payload;
            if (text) {
                const newTodos = [
                    ...state.todos,
                    {
                        text,
                        complete: false,
                        id: uuid()
                    }
                ];
                state.todos = newTodos;
            }
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const newTodos = state.todos.map(todo => {
              if (todo.id === id) {
                todo.complete = !todo.complete;
              }
              return todo;
            });
            state.todos = newTodos;
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            const newTodos = state.todos.filter(todo => todo.id !== id);
            state.todos = newTodos;
        },
    }
});

export const { setLoading, setSearchQuery, setTodos, addTodo, removeTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;

