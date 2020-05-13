import * as actionTypes from '../types'
import { ItoDoReducer } from '../../screens/toDoList/ListView'


export interface IToDoReducer {
    todoList: ItoDoReducer[];
}

const defaultState = (): IToDoReducer => ({
    todoList: [
        { title: 'Shopping', text: 'buy rice', key: 1 },
        { title: 'Work', text: 'do laundry', key: 2 },
        { title: 'School', text: 'english homework', key: 3 }]
});

const toDoReducer = (state = defaultState(), action: any): IToDoReducer => {
    switch (action.type) {
        case actionTypes.ADD_TASK: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElem],
            };
        }
        case actionTypes.DELETE_TASK: {
            return {
                ...state,
                todoList: state.todoList.filter(elem => elem.key != action.elemID)
            }
        }

        default:
            return state
    }
}

export default toDoReducer;

