import { View, Text, TextInput, Button, Image } from 'react-native';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { restoreUser, signup } from './../store/actions/UserActions'
import * as SecureStore from 'expo-secure-store';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles';

const SignupScreen = ({ navigation }) => {
    const [displayName, setDisplayName] = useState('')
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
        load(); // uncomment to read from secure store
    }, [])


    return (

        <SafeAreaView style={styles.container}>
            <Image style={styles.logoSize} source={require('../assets/img/logo3x.png')} />
            <Text style={styles.h1} > Sign up to get access </Text>
            <TextInput 
                style={[styles.input, styles.topRadius]} 
                placeholder='Full name'
                onChangeText={setDisplayName}
                value={displayName} 
            />
            
            <TextInput 
                style={[styles.input, styles.topRadius]} 
                placeholder='Email'
                onChangeText={setEmail}
                value={email} 
            />

            <TextInput 
                style={[styles.input, styles.bottomRadius]}  
                placeholder='Password'
                onChangeText={setPassword}
                value={password} 
                secureTextEntry={true}
            />
            <Link to={{ screen: 'Login' }}>
                Forgot password?
            </Link>
            <Button 
                title="Signup" 
                buttonStyle={styles.primaryButton} 
                color="#5050A5" 
                onPress={() => dispatch(signup(email, password))} 
            />
            <Link to={{ screen: 'Login' }}>
                Already have an account? Login here
            </Link>
        </SafeAreaView>
    );
}

export default SignupScreen;