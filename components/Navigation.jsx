import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from "./../screens/Screen1";
import Screen2 from "./../screens/Screen2";
import Screen3 from "./../screens/Screen3";
import HomeScreen from "./../screens/HomeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import SignupScreen from "./../screens/SignupScreen";
import LoginScreen from "./../screens/LoginScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import EditProfileScreen from "./../screens/EditProfileScreen";
import CreateProfileScreen from '../screens/CreateProfile';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const NavigationComponent = ({ navigation }) => {
    const token = useSelector(state => state.user.idToken);

    return (
        <NavigationContainer >
            {token !== undefined ? (
                // Show the app with all navigation
                <Tab.Navigator headerMode="screen">
                    <Tab.Screen name="Home" component={HomeScreen} options={{
                        headerTitle: "Feed", tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name='home-sharp'
                                style={{ color: focused ? '#5050a5' : '#b7b7b7', fontSize: 25 }}
                            ></Ionicons>
                        )
                    }} />
                    <Tab.Screen name="Discover" component={DiscoverScreen} options={{
                         tabBarIcon: 
                         ({ focused }) => (
                         <Ionicons
                             name='search-sharp'
                             style={{ color: focused ? '#5050a5' : '#b7b7b7', fontSize: 25}}
                         ></Ionicons>
                         )
                    }} />
                    <Tab.Screen name="Chat" component={ChatStack} options={{
                         tabBarIcon: 
                         ({ focused }) => (
                         <Ionicons
                             name='chatbubbles-sharp'
                             style={{ color: focused ? '#5050a5' : '#b7b7b7', fontSize: 25}}
                         ></Ionicons>
                         )
                    }}/>
                    <Tab.Screen name="Menu" component={MenuStack} options={{
                         tabBarIcon: 
                         ({ focused }) => (
                         <Ionicons
                             name='menu-sharp'
                             style={{ color: focused ? '#5050a5' : '#b7b7b7', fontSize: 25}}
                         ></Ionicons>
                         )
                    }} />
                </Tab.Navigator>
            ) : (
                // show a stack navigator with only signup and login screens.
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen name="CreateProfileScreen" component={CreateProfileScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer >
    );
}


function MenuStack() {
    return (
        <Stack.Navigator  >
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="EditProfile" component={EditProfileScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Screen1" options={{ headerShown: false }} component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name="AndreScreen" component={Screen3} />
        </Stack.Navigator>
    );
}




export default NavigationComponent;