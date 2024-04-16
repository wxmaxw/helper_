import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView,View,Text } from "react-native";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import First from "./src/pages/First";
import Second from "./src/pages/Second";
import TaskPage from "./src/pages/TaskPage";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function App(){
  return(
  <NavigationContainer>    
    <Tab.Navigator>
      <Tab.Screen name = "FirstScreen" component={First}></Tab.Screen>
      <Tab.Screen name = "SecondScreen" component={Second}></Tab.Screen>
      <Tab.Screen name="TaskPageScreen" component={TaskPage}/>
    </Tab.Navigator>    
  </NavigationContainer>     
  );
}

export default App;