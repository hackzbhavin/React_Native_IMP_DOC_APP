import React from 'react'
import { StyleSheet,Text,View,Image } from 'react-native'

export default function Header({title}) {
    return (
        <View style={styles.header}>
                    <Image style={styles.tinyLogo} source={require('../../../assets/images/SplashScreen/FileUpload.png')} />
                    
                    <Text style={styles.customFontPoppins}>{title}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    customFontPoppins: {
        top:45,
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        fontSize: 20,
        // fontWeight: '600',
        textShadowColor: '#FFB8B8',
        textTransform:"uppercase"
      },
      tinyLogo: {
          
        width: 219,
        height: 159,
      },
    header:{
        width:'100%',
        
        height:'50%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#faecec'
    }
})