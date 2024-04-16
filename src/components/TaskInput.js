import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import styles from './TaskCard.style';

function TaskInput({ task, setTask, handleAddTask }) {
    return (
        <View style={styles.todo_container}>
            <TextInput
                style={styles.text_input}
                placeholder="Add a Task"
                placeholderTextColor="#C0C0C0"
                value={task}
                onChangeText={setTask}
            />
            <TouchableOpacity onPress={handleAddTask} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TaskInput;
