import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, ADD_USER } from "./constants.js";

export function addTodoActionCreator(todo) {
    console.log("Creating ADD_TODO action with payload:", todo);
    return {
        type: ADD_TODO,
        payload: todo,
    };
}

export function removeTodoActionCreator(todoId) {
    console.log("Creating REMOVE_TODO action with payload:", todoId);
    return {
        type: REMOVE_TODO,
        payload: todoId,
    };
}

export function toggleTodoActionCreator(todoId) {
    console.log("Creating TOGGLE_TODO action with payload:", todoId);
    return {
        type: TOGGLE_TODO,
        payload: todoId,
    };
}

export function addUserActionCreator(user){
    return {
        type: "ADD_USER",
        payload: user,
    }
}