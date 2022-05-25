import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Event from '../components/Event';
import styles from '../styles/styles'

const DiscoverScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity>
                <View>
                    <Event></Event>
                    <Event></Event>
                    <Event></Event>

                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default DiscoverScreen;