import React from 'react';
import { TouchableOpacity , Text} from "react-native";
import styles from './TaskCard.style'

function TaskCard({item, index, handleCompleteTask}){
    return(
        <TouchableOpacity
            key={index}
            onPress={()=> handleCompleteTask(index)}
            style ={[
                styles.task,
                item.completed ? styles.taskCompleted : null,
            ]}>
            <Text
            style ={
                item.completed ? styles.handleCompleteTask : styles.taskText
            }>
                {item.text}
            </Text>    
        </TouchableOpacity>
    );
}

export default TaskCard;