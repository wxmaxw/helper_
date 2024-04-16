import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TaskCard from "../components/TaskCard";

function TaskList({ taskItems, handleCompleteTask }) {
    return (
        <ScrollView>
            {taskItems.map((item, index) => (
                <TaskCard
                    key={index}
                    item={item}
                    index={index}
                    handleCompleteTask={handleCompleteTask}
                />
            ))}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#AFDCFF"
    },
});

export default TaskList;

