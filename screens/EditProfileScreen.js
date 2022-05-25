import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import Input from './../components/Input'
import { useState } from 'react';


async function getUserInfo() {
    let tokenFromSecureStore = await SecureStore.getItemAsync("token");
    if (tokenFromSecureStore) {
      console.log("User has been found");

      dispatch(get_UserInfo(tokenFromSecureStore));
    } else {
      console.log("Couldn't load tokenID from the SecureStore");
    }
  } 

  
const EditProfileScreen = ({ navigation }) => {
    const displayName = useSelector(state => state.user.displayName);
    const [validDisplayName, setValidDisplayName] = useState(displayName !== '')

    const save = () => {
        // ** if the "form" is valid ** {
        // save data - we need access to text here...
        //} else {
        // display error message
        //}


    }
    

    return (
        <View>
            <Text>I am EditProfileScreen</Text>
            <Input
                label="Username"
                inputValue={displayName}
                error="Username cannot be empty."
                valid={validDisplayName}
                setValid={setValidDisplayName}
            />
            <Input label="Hi" inputValue="" error="Cannot be empty" />

            <Button title="Save" onPress={save} />
        </View>
    );
}

export default EditProfileScreen;