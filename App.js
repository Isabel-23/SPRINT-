import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScrenn';
import LogIn from './screens/LogIn';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="home" component={HomeScreen} />
         <Stack.Screen name ="Login" component={LogIn} />
       </Stack.Navigator>
      </NavigationContainer>
  );
}
