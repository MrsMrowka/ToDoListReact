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



// import React, { FC, useState } from 'react';
// import { TextInput, Button, Alert, View, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { TaskFormStyles } from '../../styles/TaskFormStyles';


// interface ITaskFormProps {
//     setView: Function;
//     setTasks: Function;
// }

// const TaskForm: FC<ITaskFormProps> = ({ setView, setTasks }) => {
//     const [title, setTitle] = useState('');
//     const [text, setText] = useState('');

//     const changeTitleHandler = (val) => {
//         setTitle(val);
//     };

//     const changeContentHandler = (val) => {
//         setText(val);
//     };

//     const submitHandler = () => {
//         if (text.length > 1 && title.length > 1) {
//             setTasks(prevTodos => {
//                 return [
//                     { title, text, key: Date.now().toString() },
//                     ...prevTodos
//                 ];
//             });
//         } else {
//             Alert.alert('OOPS', 'You To Do is empty', [
//                 { text: 'Understood' }
//             ]);
//         }
//         setView(true);
//     };

//     return (

//         <View style={TaskFormStyles.container}>
//             <TouchableOpacity onPress={() => setView(true)}
//                 style={TaskFormStyles.exitBtn}>
//                 <Icon name="times" size={30} />
//             </TouchableOpacity>

//             <TextInput
//                 style={TaskFormStyles.titleInput}
//                 placeholder='TITLE...'
//                 onChangeText={changeTitleHandler}
//                 value={title}
//             ></TextInput>

//             <TextInput
//                 style={TaskFormStyles.textInput}
//                 placeholder='YOUR CONTENT...'
//                 onChangeText={changeContentHandler}
//                 value={text}
//             ></TextInput>

//             <Button color='#86a23a' onPress={submitHandler} title='add todo' />
//         </View>
//     );
// };

// export default TaskForm;


