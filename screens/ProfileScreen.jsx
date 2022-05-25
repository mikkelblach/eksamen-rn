import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/UserActions';
import { useSelector } from 'react-redux';

const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const displayName = useSelector(state => state.user.displayName)

   

    return (
        <View>
            <Text>I am ProfileScreen {displayName}</Text>
            <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
            <Button title="Logout" onPress={() => dispatch(logout())} />
        </View>
    );
}

export default ProfileScreen;