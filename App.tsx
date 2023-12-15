import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return(
    <InsideStack.Navigator>
          <InsideStack.Screen name="My todos" component={List} />
          <InsideStack.Screen name="details" component={Details} />
    </InsideStack.Navigator>
    )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user',user);
      setUser(user);
    });
  }, []);

  return (
    /*<View style={styles.container}>
      <Text>MobilUygulamaProje</Text>
      <StatusBar style="auto" />
    </View>*/
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} /> : <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
