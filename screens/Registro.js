import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { face, google, icono, tw } from '../assets';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase-config';

const Registro = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:true,
        title:"",
        headerStyle:{
          backgroundColor:"#30E398",
          height:5,
        }
      }
    )
  }, []);

  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")

  const app = initializeApp(firebaseConfig);
  const auth  = getAuth(app);
  
  const hadleCreateAccount = () => {
    createUserWithEmailAndPassword (auth,email,password)
    .then((userCredential) => {
      console.log("Cuenta Creada!")
      const user = userCredential.user;
      console.log(user)
      navigation.navigate("home");
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)

    })
  }

  return (
    <View style={styles.container}>

      <View style={styles.circulo}>
        <Image 
         style={styles.icono}
         source={icono}
        />
      </View>

      <View style={styles.caja}>
        <Text style={styles.logo}>Crear cuenta</Text>
        <View style={styles.inputView} >
          <Text></Text>
          <TextInput  
           onChangeText={(text) => setEmail(text)}
           style={styles.inputText}
           placeholder="Ingrese un correo..." 
           />
        </View>
        <View style={styles.inputView} >
          <TextInput  
           onChangeText={(text) => setPassword(text)}
           secureTextEntry
           style={styles.inputText}
           placeholder="Contraseña..." 
           />
        </View>
        <TouchableOpacity onPress={hadleCreateAccount} style={styles.loginBtn} >
          <Text style={styles.loginText}>Registrarse</Text>
        </TouchableOpacity>
        <Text style={styles.OR}>- O -</Text>
        <View style={styles.redes}>
          <TouchableOpacity>
            <Image
              style={styles.social}
              source={face}
            />
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Image
             style={styles.social}
             source={google}
            />
          </TouchableOpacity>
          
          <TouchableOpacity>
           <Image
           style={styles.social}
           source={tw}
           />
          </TouchableOpacity>
          
        </View>

      </View>

      

      


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:30,
    color:"#30E398",
    marginBottom:10
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderColor:"#DADAF0",
    borderBottomWidth:1,
    height:50,
    marginBottom:10,
    justifyContent:"center",
    paddingBottom:5,
  },
  inputText:{
    height:40,
    color:"gray"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#30E398",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  OR:{
    color:"gray",
    marginTop:20,
  },
  icono:{
    height:100,
    width:180,
    marginTop:180,
  },
  circulo:{
    height:400,
    width:400,
    backgroundColor: "#30E398",
    borderRadius:200,
    top:-200,
    justifyContent:'center',
    alignItems:'center',
  },
  caja:{
    backgroundColor:"#fff",
    height:450,
    width:300,
    top:-275,
    borderRadius:10,
    elevation:2,
    alignItems:'center',
    justifyContent:"center",
  },
  redes:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between",
    margin:20,

  },
  social:{
    borderColor:"gray",
    borderWidth:0.2,
    borderRadius:50,
    margin:5,
    height:46,
    width:46,
  },
});

export default Registro;