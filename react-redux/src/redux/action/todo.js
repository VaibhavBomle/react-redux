import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types"

// Add todo
export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

// Delete todo
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})

// Update todo
export const updateTodo = (todo, id) => ({
    type: UPDATE_TODO,
    payload: { todo: todo, todoId: id }

})