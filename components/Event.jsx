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
                        <View style={styles.bookmark}><View style={styles.bookmarkIcon}><Ionicons
                            name='star-outline'
                            style={{ color: "#ffffff", fontSize: 18 }}
                        ></Ionicons></View></View>
                    </TouchableOpacity>
                    <View style={[styles.cardContent]}>

                        <Text style={[styles.cardTitle]}>CBS Fsssssilm Party</Text>
                        <Text style={[styles.cardBoldText]}>CBS Fiaaaalm</Text>
                        <View style={styles.flexContainer}>
                            <Text style={[styles.cardText]}>
                                <Ionicons
                                    name='calendar'
                                    style={styles.cardIcon}
                                ></Ionicons>
                            </Text>
                            <Text style={[styles.cardBoldText]}>MON, 7 APR - 15:00 - 18:00</Text>
                        </View>

                        <View style={styles.flexContainer}>
                            <Ionicons
                                name='location-sharp'
                                style={styles.cardIcon}
                            ></Ionicons>
                            <Text style={[styles.cardText]}>Lapoint Surf</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>

        </TouchableOpacity>
    );
}

export default Event;