import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

const TaskInput = props => {
    const [currentTask, setCurrentTask] = useState('');
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputText}
                    value={currentTask}
                    onChangeText={text => setCurrentTask(text)}
                    placeholder="Enter Your Task" 
                    placeholderTextColor="black"/>
            <View style={styles.addButtonContainer}>
                <Button width="100%"
                        padding="10"
                        title="add"
                        onPress={props.addItem.bind(this, currentTask)}>
                </Button>
            </View>
        </View>
    );
}

export default TaskInput;

const styles = StyleSheet.create({
    inputContainer: {
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        // backgroundColor: 'gray',
        justifyContent: 'space-between'
        // borderRadius: 20
      },
      inputText: {
         width: '80%',
         borderColor: 'lightgray',
         borderWidth: 1,
         borderRadius: 20,
         paddingHorizontal: 20
      },
      addButtonContainer: {
        color: 'white',
        justifyContent: 'center',
        // backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 20,
      }
});

