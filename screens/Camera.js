import React,{useState} from 'react'
import {
    Image,
    SafeAreaView,
TouchableOpacity,
View,
Text,
Button,
StyleSheet
  } from 'react-native';

  import { RNCamera, FaceDetector } from 'react-native-camera';

const PendingView = () =>{
    return(
<View style={styles.pendingView}>
<Text>Loading ...</Text>
</View>
    )
}

export default function Camera() {

  const [image, setImage] = useState(null)
const takePic = async(camera)=>{
    try{
        const options = {quality:0.9,base64:false}
        const data = await camera.takePictureAsync(options)
        console.log(data);
        setImage(data.uri)

    }catch(error){
console.warn(error);
    }
}


    return (
        <SafeAreaView style={styles.container}>
           {image?
           (
               <View style={styles.preview}>
           <Image source={{uri:image, width:'100%', height:'80%'}}/> 
           <Button
           style={styles.clickAgainButton}
           onPress = {()=>{
               setImage(null)
           }}
           title='Click New Image'

           ></Button> 
           </View>     ):
           (<RNCamera 
            style={styles.preview} 
            type={RNCamera.Constants.Type.black}
           captureAudio={false}
           flashMode={RNCamera.Constants.FlashMode.auto}
           androidCameraPermissionOptions={{
               title:"Permission To Use Camera",
               message:"Longer Text to Use Camera",
               buttonPositive:"OK",
               buttonNegative:"Cancel"
           }}
           androidRecordAudioPermissionOptions={{
            title:"Permission To Use Audio",
            message:"Longer Text to Use Audio",
            buttonPositive:"OK",
            buttonNegative:"Cancel"
           }}
           >
{({camera,status})=>{
    if(status!=='READY') return <PendingView />
    return(
        <View>
            <TouchableOpacity
            onPress={()=>takePic(camera)}
            style={styles.snapButton}
            >
                <Text style={styles.snapButtonText}>Capture</Text>
            </TouchableOpacity>
        </View>
    )
    }
}
           </RNCamera>)
           
           }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
flex:1,
flexDirection:"column",
backgroundColor:"#FAECEC"
    },
    pendingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    preview:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
            },
            
            snapButtonText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
    
        color: '#FAECEC',
      },
    
      snapButton: {
        alignItems: 'center',
        width: 200,
        height: 65,
        backgroundColor: 'black',
        padding: 10,
        top: 300,
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
      clickAgainButton:{
          width:'50%'
      }
})