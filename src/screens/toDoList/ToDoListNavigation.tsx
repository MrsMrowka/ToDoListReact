import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import TaskForm from './TaskForm';
import ToDoListView from './ListView';
import toDoReducer from '../../redux/reducers/toDoReducer';
import store from '../../redux/store';


interface IToDoListNavProps {
    myProps: string;
}

const ToDoListNav: FC<IToDoListNavProps> = ({ myProps }) => {
    const [listView, setView] = useState<boolean>(true);

    return (
        <Provider store={store}>
            <View>
                {listView ? (
                    <ToDoListView setView={setView} />
                ) : (
                        <TaskForm setView={setView} />
                    )}
            </View>
        </Provider>
    );
};

export default ToDoListNav;



// import React, { FC, useState } from 'react';
// import { View } from 'react-native';

// import TaskForm from './TaskForm';
// import ToDoListView from './ListView';


// interface IToDoListNavProps {
//     myProps: string;
// }

// const ToDoListNav: FC<IToDoListNavProps> = ({ myProps }) => {
//     const [listView, setView] = useState<boolean>(true);

//     const [tasks, setTasks] = useState([
//         { title: 'Shopping', text: 'buy rice', key: '1' },
//         { title: 'Work', text: 'do laundry', key: '2' },
//         { title: 'School', text: 'english homework', key: '3' },
//     ])


//     return (
//         <View>
//             {listView ? (
//                 <ToDoListView setView={setView} tasks={tasks} setTasks={setTasks} />
//             ) : (
//                     <TaskForm setView={setView} setTasks={setTasks} />
//                 )}
//         </View>
//     );
// };

// export default ToDoListNav;