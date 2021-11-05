import React from 'react'
import {
    Text,
    SafeAreaView,
 StyleSheet,
 View,
 TouchableOpacity
  } from 'react-native';


export default function Dashboard({navigation}) {

const headingBarComponent = () => {
    return(
        <View style={styles.headingBar}>

        <Text style={styles.headingBarTitle}>Dashboard </Text>
                            

    
        </View>
    )

}

const userCardComponent = () => {
    return(
        <View style={styles.userCard}>
        <Text style={styles.customFontPoppins}>Bhavin </Text>
    
        </View>
    )
}
const userCardViewButton = () => {
    return(
        <TouchableOpacity       
        onPress={()=> navigation.navigate('Documents') }
        style={styles.userCardViewButton}>

        <Text style={styles.userCardViewButtonText}>View </Text>

        </TouchableOpacity>
    )
}


    return (
        <SafeAreaView style={styles.dashboard}>
           {headingBarComponent()}
           {userCardComponent()}
{userCardViewButton()}
     
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    customFontPoppins: {
      fontFamily: 'Poppins-SemiBold',
      fontStyle: 'normal',
      fontSize: 20,
      // fontWeight: '600',
      textShadowColor: '#FFB8B8',
      textTransform: 'uppercase',
    },

    dashboard:{
        alignItems:'center',
        height:'100%',
        backgroundColor:"#FAECEC"
    },
  
    headingBar: {
        // top:40,
      width: '100%',
      height: 80,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: 'black',
    },
    headingBarTitle:{
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        fontSize: 20,
        color:"#FAECEC",
        // fontWeight: '600',
        textShadowColor: '#FFB8B8',
        textTransform: 'uppercase',
    },
    userCard:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white",
        top:53,
        height:156,
        width: 365,
        borderRadius:10

    },

    userCardViewButtonText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
    
        color: '#FAECEC',
      },
    
      userCardViewButton: {
        alignItems: 'center',
        width: 365,
        height: 65,
        backgroundColor: 'black',
        padding: 10,
        top: 21,
        shadowColor: 'rgba(255, 184, 184, 1)',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.1,
        shadowRadius: 24,
        elevation: 23,
        borderRadius: 9,
      },
  
  });
  