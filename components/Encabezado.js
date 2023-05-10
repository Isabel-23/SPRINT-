import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { Menu, avatar } from '../assets'
import { useNavigation } from '@react-navigation/native'

const Encabezado = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.H}>
            
    <View> 
        <TouchableOpacity>
        <Image style={styles.Menu}
          source={Menu}
          onPress={() => {}}
        />
        </TouchableOpacity>    
    </View>

    <View style={styles.avatar} >
        <TouchableOpacity onPress={() => navigation.navigate("Login") } >
            <Image style={styles.usuario}
            source={avatar}
            />
        </TouchableOpacity>
    </View>
 </View>
  )
}

export default Encabezado

const styles = StyleSheet.create({
  H: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: 60,
    backgroundColor: '#30E398',
},
Menu:{
    resizeMode: 'cover',
    alignItems: 'center',
    height:26,
    width:26,
    marginLeft: 10,
},
avatar:{
    alignItems: 'center',
    justifyContent: 'center',
    height:34,
    width: 34,
    backgroundColor:"#fff",
    marginRight:20,
    borderRadius: 17,
},
usuario:{ 
    resizeMode: 'cover',
    height: 30,
    width:30,
}

});