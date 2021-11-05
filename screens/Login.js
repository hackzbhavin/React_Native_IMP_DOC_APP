import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function login({navigation}) {
  const submitButtonComponent = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')}
        style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    );
  };

  const loginInputField = () => {
    const [text, onChangeText] = React.useState();

    return (
      <SafeAreaView style={styles.loginBoxContainer}>
        <Text style={styles.userIdLabel}>User Id</Text>
        <TextInput style={styles.userIdInput} value={text} />
        <Text style={styles.passwordLabel}>Password</Text>
        <TextInput style={styles.passwordInput} value={text} />
      </SafeAreaView>
    );
  };

  const textPersonalUse = () => {
    return <Text style={styles.textPersonalUse}>Created For Personal Use</Text>;
  };

  const LoginContent = () => {
    return (
      <SafeAreaView style={styles.header}>
        <Text style={styles.customFontPoppins}>Authenticate / Login</Text>
        {loginInputField()}
        {submitButtonComponent()}
        {textPersonalUse()}
      </SafeAreaView>
    );
  };

  return <SafeAreaView>{LoginContent()}</SafeAreaView>;
}

const styles = StyleSheet.create({
  customFontPoppins: {
    top: 178,
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'normal',
    fontSize: 20,
    // fontWeight: '600',
    textShadowColor: '#FFB8B8',
    textTransform: 'uppercase',
  },

  header: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#faecec',
  },

  loginBoxContainer: {
    top: 228,
  },
  userIdLabel: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    left: 5,

    textShadowColor: '#FFB8B8',
  },
  passwordLabel: {
    top: 28,
    left: 5,
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    textShadowColor: '#FFB8B8',
    shadowColor: 'rgba(255, 184, 184, 0.4)',
    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 23,
  },
  userIdInput: {
    top: 10,
    height: 44,
    fontFamily: 'Poppins-SemiBold',
    width: 325,
    backgroundColor: '#FAECEC',
    borderWidth: 1,
    padding: 10,
    shadowColor: 'rgba(255, 184, 184, 1)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 23,
  },
  passwordInput: {
    top: 38,
    height: 44,
    fontFamily: 'Poppins-SemiBold',
    width: 325,
    backgroundColor: '#FAECEC',
    borderWidth: 1,
    padding: 10,
    shadowColor: 'rgba(255, 184, 184, 1)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 23,
  },

  submitButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,

    color: '#FAECEC',
  },

  submitButton: {
    alignItems: 'center',
    width: 365,
    height: 65,
    backgroundColor: 'black',
    padding: 10,
    top: 318,
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
  textPersonalUse: {
    top: 548,

    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 10,

    shadowColor: 'rgba(255, 184, 184, 0.4)',
    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 23,
  },
});
