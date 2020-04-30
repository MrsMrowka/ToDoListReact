import * as actionTypes from '../types'
import { ItoDoReducer } from '../../screens/toDoList/ListView'


export const setNewElemTodoList = (newElem: ItoDoReducer) => ({
    type: actionTypes.ADD_TASK,
    newElem
})

export const deleteElemTodoList = (elemID: number) => ({
    type: actionTypes.DELETE_TASK,
    elemID
})


