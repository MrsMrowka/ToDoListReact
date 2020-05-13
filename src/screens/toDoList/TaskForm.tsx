import React, { FC, useState } from 'react';
import { TextInput, Button, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux'

import { setNewElemTodoList } from '../../redux/actions/toDoActions'
import { ItoDoReducer } from '../toDoList/ListView'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TaskFormStyles } from '../../styles/TaskFormStyles';


interface ITaskFormProps {
    setView: Function;
}

type setNewElemTodoList = ReturnType<typeof setNewElemTodoList>;

const TaskForm: FC<ITaskFormProps> = ({ setView }) => {
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    const dispatch = useDispatch()

    const changeTitleHandler = (val) => {
        setTitle(val);
    };

    const changeContentHandler = (val) => {
        setText(val);
    };

    const submitHandler = () => {
        dispatch<setNewElemTodoList>(setNewElemTodoList({
            title: title,
            text: text,
            key: Date.now()
        } as ItoDoReducer))
        setView(true);
    }

    return (

        <View style={TaskFormStyles.container}>
            <TouchableOpacity onPress={() => setView(true)}
                style={TaskFormStyles.exitBtn}>
                <Icon name="times" size={30} />
            </TouchableOpacity>

            <TextInput
                style={TaskFormStyles.titleInput}
                placeholder='TITLE...'
                onChangeText={changeTitleHandler}
                value={title}
            ></TextInput>

            <TextInput
                style={TaskFormStyles.textInput}
                placeholder='YOUR CONTENT...'
                onChangeText={changeContentHandler}
                value={text}
            ></TextInput>

            <Button color='#86a23a' onPress={submitHandler} title='add todo' />
        </View>
    );
};

export default TaskForm;