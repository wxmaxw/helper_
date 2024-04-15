import React from "react";
import { SafeAreaView, StyleSheet, Text, View} from "react-native";

function Second(){
    return(
        <View style={styles.container}>
            <Text style ={styles.text}>This is Second Page</Text>
        </View>    
        
    );
}

export default Second;

const styles = StyleSheet.create({
    container: {flex:1, alignItems:'center', justifyContent:'center'},
    text: {fontSize:40, fontWeight:'bold'},
});