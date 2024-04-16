import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View} from "react-native";

function Second(props){
    console.log(props);

    const user = props.route.params.username;

    function backToFirst(){
        props.navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <Text style ={styles.text}>HI, </Text>
            <Text style ={styles.text}>{user} </Text>
            <Button title="Go Back" onPress={backToFirst}></Button>
        </View>    
        
    );
}

export default Second;

const styles = StyleSheet.create({
    container: {flex:1, alignItems:'center', justifyContent:'center'},
    text: {fontSize:40, fontWeight:'bold'},
});