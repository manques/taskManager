import  React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const TaskItem = props => {
    return(
        <TouchableOpacity onPress={props.onDelete}>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default TaskItem;

const styles = StyleSheet.create({
    taskContainer:{
        width: '100%',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'gray'
      },
      task: {
        color: 'white'
      }
});