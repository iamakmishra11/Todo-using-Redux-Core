import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./constants.js";

const initialState = {
    todos: [],
};

export function todoReducer(state = initialState, action) {
    console.log("Handling action:", action);
    if (action.type === ADD_TODO) {
        return {
            ...state,
            todos: [
                ...state.todos,
                { id: Date.now(), text: action.payload, completed: false }
            ]
        };
    } else if (action.type === REMOVE_TODO) {
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        };
    } else if (action.type === TOGGLE_TODO) {
        return {
            ...state,
            todos: state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            )
        };
    } else {
        return state;
    }
}
