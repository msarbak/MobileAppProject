import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth, useUser } from '@clerk/clerk-expo'
import Colors from '../Utils/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const navigate=useNavigation();

  const { isLoaded,signOut } = useAuth();
  const onPressSignOut = React.useCallback(async () => {
    try {
      // Kullanıcıyı oturumu kapatmak için Clerk'ten sağlanan uygun fonksiyonu kullanın
      await signOut();
    } catch (err) {
      console.error("Sign out error", err);
    }
  }, [signOut]);

  const [isPressedw, setIsPressedw] = useState(false);

  const handlePressw = () => {
    setIsPressedw(!isPressedw);
  };

  const [isPressedm, setIsPressedm] = useState(false);

  const handlePressm = () => {
    setIsPressedm(!isPressedm);
  };

  const [isPressedc, setIsPressedc] = useState(false);

  const handlePressc = () => {
    setIsPressedc(!isPressedc);
  };

  const [isPressedg, setIsPressedg] = useState(false);

  const handlePressg = () => {
    setIsPressedg(!isPressedg);
  };
  
  const [isPressedy, setIsPressedy] = useState(false);

  const handlePressy = () => {
    setIsPressedy(!isPressedy);
  };

  return (
    <View>
      {/* <Text>ProfileScreen</Text> */}

      <TouchableOpacity onPress={()=>navigate.goBack()}>
      <Ionicons name="ios-arrow-back-circle" 
      size={40} color="black" />
      
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressSignOut}
        style={{
          backgroundColor: Colors.WHITE,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          justifyContent: 'center',
          padding: 10,
          borderRadius: 99,
          marginTop: 25
        }}>
        <Text style={{
          fontSize: 20,
          color: Colors.PRIMARY,
          fontFamily: 'verdana'
        }}>Çıkış Yap</Text>
      </TouchableOpacity>
      
      <View
        
        style={{
          backgroundColor: Colors.WHITE,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          justifyContent: 'center',
          padding: 10,
          borderRadius: 99,
          marginTop: 25
        }}>
        <Text style={{
          fontSize: 20,
          color: Colors.PRIMARY,
          fontFamily: 'verdana'
        }}>Tercihleriniz:</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.WHITE,  
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: 10,
          borderRadius: 99,
          marginTop: 25 }}>
      <Text style={{
          fontSize: 20,
          color: Colors.PRIMARY,
          fontFamily: 'verdana'
        }}>Cinsiyetiniz?</Text>
  <TouchableOpacity
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'center',
      padding: 10,
      borderRadius: 99,
      marginTop: 25,
      width: 100,
      backgroundColor: isPressedw ? 'gray' : 'white',
    }}
    onPress={handlePressw}
  >
    <Ionicons name="woman" size={40} color="black" />
  </TouchableOpacity>

  <TouchableOpacity
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'center',
      padding: 10,
      borderRadius: 99,
      marginTop: 25,
      width: 100,
      backgroundColor: isPressedm ? 'gray' : 'white',
    }}
    onPress={handlePressm}
  >
    <Ionicons name="man" size={40} color="black" />
  </TouchableOpacity>
</View>

<View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.WHITE,  
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: 10,
          borderRadius: 99,
          marginTop: 25  }}>
      <Text style={{
          fontSize: 20,
          color: Colors.PRIMARY,
          fontFamily: 'verdana'
        }}>Yaşınız?</Text>
        <TouchableOpacity
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'center',
      padding: 10,
      borderRadius: 99,
      marginTop: 25,
      width: 100,
      backgroundColor: isPressedc ? 'gray' : 'white',
    }}
    onPress={handlePressc}
  >
    {/* <MaterialCommunityIcons name="human-child" size={40} color="black" /> */}
    <Text>18-34</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'center',
      padding: 10,
      borderRadius: 99,
      marginTop: 25,
      width: 100,
      backgroundColor: isPressedg ? 'gray' : 'white',
    }}
    onPress={handlePressg}
  >
    {/* <MaterialCommunityIcons name="human-male" size={40} color="black" /> */}
    <Text>35-55</Text>
  </TouchableOpacity>
</View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.PRIMARY,
    fontSize: 20,
    fontFamily: 'verdana',
    textAlign: 'center',
  },
});