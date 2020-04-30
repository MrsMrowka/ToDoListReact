import { combineReducers } from 'redux'
import todoList, { IToDoReducer } from './toDoReducer'

export default combineReducers({
    todoList
})

export interface IState {
    todoList: IToDoReducer;
}