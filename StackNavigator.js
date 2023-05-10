import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScrenn';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './screens/LogIn';
import Registro from './screens/Registro';
import { Mapa } from './assets';
import Mapas from './screens/Mapas';

const StackNavigator = () => {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function ButtonTab() {
        return (
            <Tab.Navigator>
                
                <Tab.Screen 
                    name="Home"
                    component={HomeScreen} 
                    options={{
                        tabBarLabel: "Home", 
                        headerShown: false, 
                        tabBarIcon:({focused}) => 
                          focused ? (
                            <Entypo name="home" size={24} color="#30E398"/> 
                          ) : (
                            <AntDesign name="home" size={24} color="black"/>
                          ),
                 }}
                />

                <Tab.Screen 
                    name="Buscar"
                    component={Mapas}
                    options={{
                        tabBarLabel:"Buscar", 
                        headerShown:false, 
                        tabBarIcon:({focused}) => 
                          focused ? (
                            <FontAwesome name="search" size={24} color="#30E398" />
                          ) : (
                            <Feather name="search" size={24} color="black" />
                          ),
                 }}
                />

                <Tab.Screen 
                    name="Notificaciones"
                    component={HomeScreen} 
                    options={{
                        tabBarLabel:"Noti",
                        headerShown:false, 
                        tabBarBadge:5,
                        tabBarIcon:({focused}) => 
                          focused ? (
                            <Ionicons name="notifications-sharp" size={24} color="#30E398" />
                          ) : (
                            <Ionicons name="notifications-outline" size={24} color="black" />
                          ),
                 }}
                />

            </Tab.Navigator>
        );

    }

  return (
     <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="home" component={ButtonTab} options={{headerShown:false}}/>
         <Stack.Screen name='Login' component={LogIn} options={{headerShown:true}}/>
         <Stack.Screen name="Registro" component={Registro}/>
         <Stack.Screen name="Mapa" component={Mapas} options={{headerShown:false}}/>
        </Stack.Navigator>
     </NavigationContainer>
  )
};

export default StackNavigator

const styles = StyleSheet.create({})