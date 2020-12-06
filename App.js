/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import TaskItem from './components/taskItem';
import TaskInput from './components/taskInput';

const App: () => React$Node = () => {
  const [taskList, setTaskList] = useState([]);
  const onChangeTaskList = (currentTask) => {
    setTaskList( taskList => [...taskList, 
                              { id: Math.random().toString(), value: currentTask}
                            ]);
    // console.log(taskList);
  }
  // delete
  const onDeleteTaskItem = (taskId) => {
    console.log(taskId);
    setTaskList(taskList => {
      return taskList.filter(task => task.id != taskId);
    });
  }
  return (
    <> 
       {/* header */}
       <View style={styles.headerContainer}>
        <Text style={styles.header}>Task</Text>
      </View>
      {/* current task & action */}
        <TaskInput addItem={onChangeTaskList} />
      {/* task list */}
      <View>
        <FlatList keyExtractor={(item, index) => item.id}
                  data={taskList} 
                  style={styles.taskListContainer}
                  renderItem = {itemData => {
                    return(
                      <TaskItem title={itemData.item.value}
                                onDelete={onDeleteTaskItem.bind(this, itemData.item.id)} />
                    )
                  }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: { 
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  header : {
    fontSize: 30,
    color: 'white',
    fontWeight: '700'
  },
  taskListContainer:{
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // backgroundColor: 'red',
    paddingHorizontal: 20,
    marginHorizontal: 10
  }
});

export default App;
