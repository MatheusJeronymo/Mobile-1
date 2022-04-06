import React from 'react';
import {
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Pressable,
} from 'react-native';
import { TextInput } from 'react-native-paper';

const LoginScreen = ({navigation}) => {
    return (
        <ImageBackground style={styles.imageBackground} source = {require('../../assets/fundo.png')}>
        
        <Image style={styles.imageLogo} source = {require('../../assets/logo.png')}/>
        
        <Text style={styles.textTitle}>Entrar</Text>
        
        <TextInput style={styles.textInput}
            placeholder="Username"
        />
        <TextInput style={styles.textInput}
            placeholder="Senha"
        />
        <Pressable style={styles.button} onPress={() => navigation.replace('Cadastro')}>
            <Text style={styles.buttonText}>
                ENTRAR
            </Text>
        </Pressable> 
            
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    imageBackground:{
      flex:1,
      resizeMode: 'conver',
      justifyContent : 'center',
      alignItems: 'center',
      padding: 16,
    },
    imageLogo:{
        width:150,
        margin: 16,
        resizeMode: 'contain',
        height: 50,
    },
    textTitle:{
        fontSize: 26,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:12,
        paddingHorizontal:32,
        backgroundColor: '#ee125a',
        marginTop: 8,
        width: '80%'
    },
    textInput: {
        width: '80%', 
        height: 40, 
        backgroundColor: '#ccc',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 8,
    }
  });

export default LoginScreen;
