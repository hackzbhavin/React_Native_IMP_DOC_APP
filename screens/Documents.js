import React from 'react'
import {
    Text,
    SafeAreaView,
 StyleSheet,
 View,
 TouchableOpacity
  } from 'react-native';


export default function Document({navigation}) {





const headingBarComponent = () => {
    return(
        <View style={styles.headingBar}>

        <Text style={styles.headingBarTitle}>Choose Document </Text>
                            

    
        </View>
    )

}


const userDocumentCardComponent = () => {
    return(
        <View style={styles.userDocumentCard}>
        <Text style={styles.customFontPoppins}>Docs </Text>
    
        </View>
    )
}
const userDocumentCardViewButton = () => {
    return(
        <TouchableOpacity style={styles.userDocumentCardViewButton}>
        <Text style={styles.userDocumentCardViewButtonText}>View </Text>

        </TouchableOpacity>
    )
}

const addDocumentButton = () => {
    return(
        <TouchableOpacity
        onPress={() => navigation.navigate('Camera')}

        style={styles.addDocumentButton}>
        <Text style={styles.addDocumentButtonText}>+ Add </Text>

        </TouchableOpacity>
    )
}


    return (
        <SafeAreaView style={styles.document}>
           {headingBarComponent()}
           {userDocumentCardComponent()}
{userDocumentCardViewButton()}
{addDocumentButton()}
     
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

    document:{
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
        fontSize: 15,
        color:"#FAECEC",
        // fontWeight: '600',
        textShadowColor: '#FFB8B8',
        textTransform: 'uppercase',
    },
    userDocumentCard:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white",
        top:53,
        height:156,
        width: 365,
        borderRadius:10

    },

    userDocumentCardViewButtonText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
    
        color: '#FAECEC',
      },
    
      userDocumentCardViewButton: {
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

  
      addDocumentButtonText:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
    
        color: 'black',
      },
      addDocumentButton:{
        alignItems: 'center',
        width: 149,
        height: 65,
        justifyContent:'center',
        backgroundColor: 'lightgreen',
        padding: 10,
        top: 481,
        left:100,
        shadowColor: 'green',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 9,
    },
  
  });
  