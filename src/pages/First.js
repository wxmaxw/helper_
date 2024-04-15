import React from "react";
import { SafeAreaView,View, Text, StyleSheet, Button} from "react-native";

function First({props}){
    console.log(props);
    function navigationToPage(){
        props.navigation.navigate('SecondScreen');
    }

    return(
        <View style ={styles.container}>
            <Text style={styles.text}>This is First Page</Text>
            <Button title='Go to Second' onPress={navigationToPage}></Button>
        </View>
    );
}

export default First;

const styles = StyleSheet.create({
    container:{flex:1,
    alignItems: 'center',
    justifyContent:'center'},
    text: {fontSize:40, fontWeight: 'bold'},
});