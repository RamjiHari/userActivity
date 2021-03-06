import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { colors } from './Colors';
import { AuthContext } from './Context';
import { fetchApi } from './api';
import { config } from '../../config';
export default function Loginscreen(props) {

  const navigation = useNavigation();
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const User = React.useContext(AuthContext);

  const onLogin = async() => {
    // props.navigation.navigate('Home')

    Keyboard.dismiss()
    if(username && password){
      let dataTime = new Date()
      const data={
        "request":"loginUser",
        "username" : username,
        "password" : password,
        "dataTime" : dataTime
    }
    console.log('data', data)
    const response = await fetchApi(config.TEST+'loginUser',data);
console.log('response.data', response)
    if (response?.data?.status == 'success'){
    User.setUserToken(response.data.user.id)
    User.setUserDetail(response.data.user)
    props.navigation.navigate('Home')
    }else{
      alert(' UserName or password wrong.')
    }
     }
    else{
      alert('Wrong Input! UserName or password field cannot be empty.')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='#455A64'
        barStyle="light-content"
      />
      <Text style={{color:colors.white, fontSize:20}}>Welcome to Time Tracker </Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        placeholderTextColor={colors.white}
        value={username}
        onChangeText={(username) => setusername(username)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor={colors.white}
        secureTextEnter={true}
        value={password}
        onChangeText={(password) => setpassword(password)}
      />
      <TouchableOpacity style={styles.button} onPress={() => onLogin()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() =>props.navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Registration &#8594;</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width:300,
    height:50,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:10,
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
  },
  button:{
    width:300,
    marginVertical:10,
    backgroundColor:'#1c313a',
    borderRadius:25,
    paddingHorizontal:20,
    paddingVertical:15
  },
})