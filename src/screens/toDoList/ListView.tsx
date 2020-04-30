import React, { FC } from 'react';
import { ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { ListViewStyles } from '../../styles/ListViewStyles';
import { TaskStyles } from '../../styles/TaskStyles';

import { useSelector, useDispatch } from 'react-redux';


import Icon from 'react-native-vector-icons/FontAwesome';
import { IState } from '../../redux/reducers/index';
import { IToDoReducer } from '../../redux/reducers/toDoReducer';
import { deleteElemTodoList } from '../../redux/actions/toDoActions'


export interface ItoDoReducer {
    title: string;
    text: string;
    key: number;
}

interface ToDoListView {
    setView: Function;
}

const ToDoListView: FC<ToDoListView> = ({ setView }) => {
    const dispatch = useDispatch()

    const TodoListState = useSelector<IState, IToDoReducer>(state => state.todoList)

    const pressHandler = (key) => {
        dispatch(deleteElemTodoList(key))
    }

    return (
        <View>
            <View style={ListViewStyles.container}>
                <View style={ListViewStyles.titleBG}>
                    <Text style={ListViewStyles.title}>My Todos</Text>
                </View>
                <ScrollView>
                    {TodoListState.map((elem: ItoDoReducer) =>

                        <View style={TaskStyles.container} key={elem.key}>
                            <View style={{
                                padding: 15,
                                borderColor: '#bbb',
                                borderWidth: 2,
                                borderStyle: 'dashed',
                                borderRadius: 10,
                            }}>

                                {elem.title.length > 0 && <Text style={TaskStyles.title}> {elem.title} </Text>}
                                {elem.text.length > 0 && <Text> {elem.text} </Text>}
                            </View>

                            <TouchableOpacity onPress={() => pressHandler(elem.key)}
                                style={TaskStyles.deleteBtn}>
                                <Icon name="trash" size={20} />
                            </TouchableOpacity>
                        </View>

                    )}
                </ScrollView>
            </View>

            <TouchableOpacity onPress={() => setView(false)} style={ListViewStyles.plusBtnPosition}>
                <View style={ListViewStyles.plusBtn}>
                    <Icon name="plus" size={20} color={'white'} />
                </View>
            </TouchableOpacity>
        </View>
    );
};


export default ToDoListView;



// import React, { FC } from 'react';
// import { ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native';
// import { ListViewStyles } from '../../styles/ListViewStyles';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import Task from './Task';

// interface IToDoListViewProps {
//     setView: Function;
//     setTasks: Function;
//     tasks: any;
// }

// const ToDoListView: FC<IToDoListViewProps> = ({ setView, tasks, setTasks }) => {
//     const pressHandler = (key) => {
//         setTasks(prevTodos => {
//             return prevTodos.filter(todo => todo.key != key);
//         });
//     };

//     return (
//         <View>
//             <View style={ListViewStyles.container}>
//                 <View style={ListViewStyles.titleBG}>
//                     <Text style={ListViewStyles.title}>My Todos</Text>
//                 </View>
//                 <ScrollView>
//                     <FlatList
//                         data={tasks}
//                         renderItem={({ item }) => (
//                             <Task item={item} pressHandler={pressHandler} />
//                         )}
//                     />

//                 </ScrollView>
//             </View>

//             <TouchableOpacity onPress={() => setView(false)} style={ListViewStyles.plusBtnPosition}>
//                 <View style={ListViewStyles.plusBtn}>
//                     <Icon name="plus" size={20} color={'white'} />
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );
// };


// export default ToDoListView;