import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Touchable, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Mapa, Menu, avatar, Ruta } from '../assets';
import { Surface } from "@react-native-material/core";
import LogIn from './LogIn';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        });
    }, []);

    const rutas =["Ruta Cafe", "Ruta Roja", "Ruta Morada", "Ruta Gris"];

    const isLoading = false;
    const error = false;

    return (
        <SafeAreaView style={styles.container}>
            
        {/*Header section*/}
         <View style={styles.header}>
            
            <View> 
                <TouchableOpacity>
                <Image style={styles.Menu}
                  source={Menu}
                  onPress={() => {}}
                />
                </TouchableOpacity>    
            </View>

            <View style={styles.avatar} >
                <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
                    <Image style={styles.usuario}
                    source={avatar}
                    />
                </TouchableOpacity>
            </View>
         </View>

         {/* Seccion de Bienvenido*/}
         <View style={styles.saludo}>
            <Text style={styles.Titulo}>Bienvenido!</Text>
            <Text style={styles.Preg}>¿A dónde te diriges?</Text>
         </View>

        {/*Seccion de busqueda*/ }
        <View>
            <TextInput style={styles.input} placeholder="Ingresa una ubicación"  />
        </View>

        {/*Seccion de Mapa*/}
        <View style={styles.saludo}>
            <Text style={styles.cerca}>Cerca de tí</Text>
         </View>

        <View style={styles.mapcon}>
            <Surface
             elevation={4}
             category="medium"
             style={styles.super}

            >
                <TouchableOpacity>
                  <Image style={styles.mapa}
                    source={Mapa}
                  />
                </TouchableOpacity>       
            </Surface>
         </View>

         {/*Seccion de Rutas*/}
         <View style={styles.saludo}>
            <Text style={styles.cerca}>Rutas</Text>
         </View>

         <View style={styles.carousel}>
            <FlatList
                data={rutas}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.tab}>
                        <Image
                            source={Ruta}
                            style={styles.combi}
                        />
                        <Text style={styles.label}>{item}</Text>
                    </TouchableOpacity>
                ) }
                keyExtractor={item => item}
                contentContainerStyle={{columnGap:20}}
                horizontal
                alignItems={"baseline"}
            />

         </View>
      
        </SafeAreaView>
        
    );


    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 26,
      backgroundColor: '#fff',
      position: 'relative',
    },
    header: {
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
        height: 44,
        margin: 25,
        borderWidth: 1,
        padding: 11,
        paddingLeft:20,
        borderColor:"#DADAF0",
        borderRadius:36,
        backgroundColor:"#fff"
      },
      mapcon:{
        height:200,
        alignItems:"center"
      },
      cerca:{
        fontWeight:"bold",
        fontSize:15,
      },
      mapa:{
        height:194,
        width:316,
        borderRadius:4,
      },
      carousel:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"baseline",
        padding:15,
      },
      tab:{
        height: 210,
        width:169,
        borderRadius:36,
        backgroundColor:"#30E398",
        alignItems:"center",
        padding:10,
      },
      combi:{
        height:140,
        width:140,
      },
      label:{
        fontSize:19,
        fontWeight:"bold",
        color:"#fff",

      }


  });

export default HomeScreen;