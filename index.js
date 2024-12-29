import store from "./store.js";
import { addTodoActionCreator, removeTodoActionCreator } from "./actionCreator.js";

console.log( store.getState());

store.dispatch(addTodoActionCreator('Buy Milk'));

console.log( store.getState().todoState);


