import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icono } from '../assets';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase-config';


const LogIn = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown:true,
        title:"",
        headerStyle:{
          backgroundColor:"#30E398",
          height:5,
        }
    });
  }, []);

  const app = initializeApp(firebaseConfig);
  const auth  = getAuth(app);

  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")

  const hadleSigdIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Sesion Iniciada")
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
        <Text style={styles.logo}>Iniciar sesión</Text>
        <View style={styles.inputView} >
         <TextInput  
           onChangeText={(text) => setEmail(text)}
           style={styles.inputText}
            placeholder="Correo..." 
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
        <TouchableOpacity>
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={hadleSigdIn}>
          <Text style={styles.loginText}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
          <Text style={styles.SignupText}>¿Aún no tienes cuenta? Registrate</Text>
        </TouchableOpacity>
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
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderColor:"#DADAF0",
    borderWidth:1,
    borderRadius:25,
    height:50,
    marginBottom:15,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"gray"
  },
  forgot:{
    color:"#30E398",
    fontSize:14,
    margin:5,
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#30E398",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:5,
  },
  loginText:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  },
  SignupText:{
    color:"#30E398",
    fontSize:14,
    margin:10,
  },
  icono:{
    height:100,
    width:180,
    marginTop:250,
  },
  circulo:{
    height:400,
    width:400,
    backgroundColor: "#30E398",
    borderRadius:200,
    top:-250,
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
  }
});

export default LogIn;