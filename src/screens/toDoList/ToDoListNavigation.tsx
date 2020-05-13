import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import TaskForm from './TaskForm';
import ToDoListView from './ListView';
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