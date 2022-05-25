import { View, Text, TextInput, Button, Image } from 'react-native';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, restoreUser } from './../store/actions/UserActions'
import * as SecureStore from 'expo-secure-store';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    // const token = useSelector(state => state.user.idToken)
    // const emailTest = useSelector(state => state.user.email)
    // console.log(token);
    // console.log(emailTest);

    async function load() {
        let emailFromSecureStore = await SecureStore.getItemAsync('email');
        let tokenFromSecureStore = await SecureStore.getItemAsync('token');
        if (emailFromSecureStore && tokenFromSecureStore) {
            console.log("success", emailFromSecureStore);

            dispatch(restoreUser(emailFromSecureStore, tokenFromSecureStore));

        } else {
            console.log("failure");
        }
    }

    useEffect(() => {
        load; // uncomment to read from secure store
    }, [])


    return (
        <SafeAreaView style={styles.container}>
             <Image style={styles.logoSize} source={require('../assets/img/logo3x.png')} />
            <Text style={styles.h1}> Log in </Text>
            <TextInput 
                style={[styles.input, styles.topRadius]} 
                placeholderTextColor='#BABADD'  
                label='hello' 
                placeholder='Email'
                onChangeText={setEmail}
                value={email} 
            />
            
            <TextInput 
                style={[styles.input, styles.bottomRadius]}  
                placeholderTextColor='#BABADD' 
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password} 
            />

            <Button 
                buttonStyle={styles.primaryButton} 
                color="#5050A5" 
                title="Login" 
                onPress={() => dispatch(login(email, password))} 
            />

            <Link to={{ screen: 'Signup'}}>

      Dont have an account? Sign up
    </Link>
        </SafeAreaView>
    );

}

export default LoginScreen;