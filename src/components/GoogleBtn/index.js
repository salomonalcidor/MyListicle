import { Image, TouchableOpacity } from "react-native";
import { styles } from './styles';
import React from "react";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

const GoogleButton = () => {
    const handleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo == ', userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                //user cancelled the login flow
                console.log("user cancelled the login flow")
            } else if (error.code === statusCodes.IN_PROGRESS) {
                //operation is already in progress
                console.log("operation is already in progress")
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                //play services not available or outdated
                console.log("play services not available or outdated")
            } else {
                //other error
                console.log("Other ERROR")
            }
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={handleLogin} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/google.png')} />
        </TouchableOpacity>
    )
}

//Instead of re-rendering with every press, rendering is done only when props / state change
export default React.memo(GoogleButton);