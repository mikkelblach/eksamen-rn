import { View, Text, TextInput, Button, Image } from 'react-native';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, restoreUser } from '../store/actions/UserActions'
import * as SecureStore from 'expo-secure-store';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles'

const CreateProfileScreen = ({ navigation }) => {
    // const [name, setName] = useState('')
    // const [programme, setProgramme] = useState('')
    // const dispatch = useDispatch()

    // const token = useSelector(state => state.user.idToken)
    // const emailTest = useSelector(state => state.user.email)
    // console.log(token);
    // console.log(emailTest);

    // async function load() {
    //     let emailFromSecureStore = await SecureStore.getItemAsync('email');
    //     let tokenFromSecureStore = await SecureStore.getItemAsync('token');
    //     if (emailFromSecureStore && tokenFromSecureStore) {
    //         console.log("success", emailFromSecureStore);

    //         dispatch(restoreUser(emailFromSecureStore, tokenFromSecureStore));

    //     } else {
    //         console.log("failure");
    //     }
    // }

    // useEffect(() => {
    //     load(); // uncomment to read from secure store
    // }, [])


    return (
        <SafeAreaView style={styles.container}>
             <Image style={styles.logoSize} source={require('../assets/img/logo3x.png')} />
            <Text style={styles.h1}> Before we start... </Text>
            <TextInput style={[styles.input, styles.topRadius]} placeholderTextColor='#BABADD'  label='hello' placeholder='Name'
                onChangeText={setName}
                value={name} />
            
            <TextInput style={[styles.input, styles.bottomRadius]}  placeholderTextColor='#BABADD' placeholder='Study Programme'
                onChangeText={setProgramme}
                value={programme} />

            <Button buttonStyle={styles.primaryButton} color="#5050A5" title="Next" onPress={() => dispatch(createProfile(email, password))} />

        </SafeAreaView>
    );

}

export default CreateProfileScreen;