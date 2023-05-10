import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Mapa, Menu, avatar, Ruta } from '../assets';
import { Surface } from "@react-native-material/core";
import LogIn from './LogIn';
import Encabezado from '../components/Encabezado';
import { Feather } from '@expo/vector-icons';
import MapView,{Marker, Polyline} from 'react-native-maps'
const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:true,
            title:"",
            headerStyle:{
              backgroundColor:"#30E398",
              height:20,
            }
        });
    }, []);

    const [origin, setOrigin] = React.useState({
      latitute:19.702710, 
      longitude:-101.190697,
    });

    return (
        <SafeAreaView>
          <Encabezado/>

          <ScrollView>
            {/* Seccion de Bienvenido*/}
            <View style={styles.saludo}>
              <Text style={styles.Titulo}>Bienvenido!</Text>
              <Text style={styles.Preg}>¿A dónde te diriges?</Text>
            </View>

            {/*Seccion de busqueda*/ }
            <Pressable style={styles.input}>
              <Feather name="search" size={24} color="black" />
              <TextInput placeholder="Ingresa una ubicación"  />
            </Pressable>

            {/*Seccion de Mapa*/}
            <View style={styles.saludo}>
              <Text style={styles.cerca}>Cerca de tí</Text>
            </View>

            <View style={styles.caja}>
              <MapView 
                onPress={() => navigation.navigate("Mapa")}
                initialRegion={{
                  latitude:origin.latitute,
                  longitude:origin.longitude,
                  latitudeDelta:0.09,
                  longitudeDelta:0.04,
                  
                }}
                style={styles.map} />
            </View>

            {/*Seccion de Rutas*/}
              <Text style={styles.cerca}>Rutas</Text>
              
              <ScrollView style={styles.carousel} horizontal>
                <TouchableOpacity style={styles.tab}>
                  <Image
                    source={Ruta}
                    style={styles.combi}
                  />
                  <Text style={styles.label}>Ruta Amarilla</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab}>
                  <Image
                    source={Ruta}
                    style={styles.combi}
                  />
                  <Text style={styles.label}>Ruta Roja</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab}>
                  <Image
                    source={Ruta}
                    style={styles.combi}
                  />
                  <Text style={styles.label}>Ruta Verde</Text>
                </TouchableOpacity>

              </ScrollView>

          </ScrollView>


        </SafeAreaView>
        
    );
    
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    },
    saludo: {
      height:60,
      alignItems: "flex-start",
      padding:10,
      paddingLeft:20,
    },
    Titulo: {
      fontSize: 18,
    },
    Preg:{
      fontSize: 18,
      fontWeight: "bold",
    },
    input: {
      flexDirection:"row",
      alignItems:"center",
      gap:10,
      paddingHorizontal:10,
      height: 44,
      margin: 15,
      borderWidth: 1,
      borderColor:"#DADAF0",
      borderRadius:36,
      backgroundColor:"#fff"
    },
    map:{
      height:220,
      width:350,
    },
    cerca:{
      fontWeight:"bold",
      fontSize:15,
    },
    carousel:{
      height:300,
    },
    tab:{
      height: 210,
      width:169,
      borderRadius:36,
      backgroundColor:"#30E398",
      marginTop:10,
      marginHorizontal:20,
      alignItems:"center",
      padding:10,
      marginBottom:10,
    },
    combi:{
      height:140,
      width:140,
    },
    label:{
      fontSize:19,
      fontWeight:"bold",
      color:"#fff",
      marginVertical:7,
    },
    caja:{
      height:250,
      alignItems:"center"
    },
  }
   );

export default HomeScreen;