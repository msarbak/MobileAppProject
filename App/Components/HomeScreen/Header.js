import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';

export default function Header() {
    const {isLoaded,user}=useUser();
  return isLoaded&&(
    <View>
    <View style={[{justifyContent:'space-between'},styles.rowStyle]}>
        <View style={styles.rowStyle}>
            <Image source={{uri:user?.imageUrl}} 
            style={{width:50,height:50,borderRadius:99}} />
            <View>
                <Text style={{color:Colors.WHITE,fontFamily:'verdana'}}>Welcome,</Text>
                <Text style={styles.mainText}>{user?.fullName}</Text>
            </View>
        </View>
    </View>
    
    <View>
    <Text style={{color:Colors.WHITE,fontFamily:'Verdana', fontSize:40, marginTop:20}}>Sizin için önerilenler</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainText:{
        color:Colors.WHITE,
        fontSize:20,
        fontFamily:'verdana'
    },
    rowStyle:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }
})