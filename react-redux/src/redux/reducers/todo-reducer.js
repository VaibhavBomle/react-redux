import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../action/action-types"

const initialState = []

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            // Add todo
            console.log("Adding Todo...")
            return [...state, action.payload];
        case DELETE_TODO:
            // Delete todo
            const newState = state.filter((todo) => todo.id !== action.payload)
            return newState;
        case UPDATE_TODO:
            // Update todo
            const updatedState = state.map(todo => {
                if (todo.id == action.payload.todoId) {
                    todo.title = action.payload.title
                    todo.description = action.payload.description
                    return todo;
                } else {
                    return todo;
                }
            })
            return updatedState;
        default:
            return state

    }
}