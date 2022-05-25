import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { React } from 'react';
import styles from '../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Event = props => {

    const image = { uri: "https://krunch.dk/wp-content/uploads/2013/11/Events1.jpg" };
    return (

        <TouchableOpacity style={[styles.cardMargin]}>

            <ImageBackground source={image} style={[styles.bgImg]} imageStyle={{ borderRadius: 6, resizeMode: "cover" }}>
                <View style={[styles.cardOverlay]}>
                    <TouchableOpacity>
                <View style={styles.bookmark}><Text style={styles.bookmarkIcon}>?</Text></View>
                </TouchableOpacity>
                    <View style={[styles.cardContent]}>
                     
                        <Text style={[styles.cardTitle]}>CBS Fsssssilm Party</Text>
                        <Text style={[styles.cardBoldText]}>CBS Fiaaaalm</Text>
                        <View style={styles.flexContainer}>
                            <Text style={[styles.cardText]}>*</Text>
                            <Text style={[styles.cardBoldText]}>MON, 7 APR - 15:00 - 18:00</Text>
                        </View>

                        <View style={styles.flexContainer}>
                            <Text style={styles.cardIcon}></Text>
                            <Text style={[styles.cardText]}>Lapoint Surf</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>

        </TouchableOpacity>
    );
}

export default Event;