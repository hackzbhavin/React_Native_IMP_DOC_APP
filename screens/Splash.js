import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Appearance,
  TouchableOpacity,
} from 'react-native';


import Header from '../components/SplashScreen/Header/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAECEC',
  },
  customFontPoppins: {
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '600',
    // shadowColor:"#FFB8B8",
    textShadowColor: '#FFB8B8',
    textTransform:"uppercase"
  },
  
  nextButtonText:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  
    color:"#FAECEC"
    
  },
  
  nextButton: {
    alignItems: "center",
    width:365,
    height:65,
    backgroundColor:"black",
    padding: 10,
    top:100,
    shadowColor: "rgba(255, 184, 184, 1)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 23, 
    borderRadius:9
  
  },
  
  textPersonalUse:{
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize:10,

    top: 120,
    shadowColor: "rgba(255, 184, 184, 0.4)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 23, 
    borderRadius:9

  }

});



const Splash = ({navigation}) => {

  const headingComponent = () => {
    return (
     <Header 
     title='Welcome To Doc' 
     
     />
    );
  };


  const nextButtonComponent =()=> {
    return(
      <TouchableOpacity
      onPress={()=> navigation.navigate('Login') }
      style={styles.nextButton}>
        <Text
        style={styles.nextButtonText}
        >Next</Text>
      </TouchableOpacity>
       

    )
  }

  const textPersonalUse = () => {
    return(
    <Text style={styles.textPersonalUse} >Created For Personal Use</Text>
     ) }

  return( 
  <View style={styles.container}>
  {headingComponent()}
{nextButtonComponent()}
{textPersonalUse()}
  </View>
  
  
  )
};

export default Splash;
