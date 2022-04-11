import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'
import ActivityScreen from './src/screens/ActivityScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loginscreen from './src/screens/LoginScreen';
import { AuthContext } from './src/screens/Context';
export default function App() {
  const Stack = createStackNavigator();
  const [userToken, setUserToken] = useState(null)
  const [userDetail, setUserDetail] = useState([]);
  console.log(`userDetailssss`, userDetail)
  const user = {userDetail, setUserDetail,userToken,setUserToken};
  return (
<AuthContext.Provider value = {user}>
     <NavigationContainer>
     { userToken != null ?(
      <Stack.Navigator >
        {/* <Stack.Screen options={{headerShown: false}} name="Login" component={Loginscreen} /> */}
        <Stack.Screen  name="Home" options={{headerShown: false}} component={ActivityScreen} />
      </Stack.Navigator>):
      <Loginscreen/>}
    </NavigationContainer>
    </AuthContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
