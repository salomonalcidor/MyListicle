import { ScrollView, Text } from "react-native"
import AuthHeader from "../../components/AuthHeader"
import Input from "../../components/Input"
import React from "react"
import Button from "../../components/Button"
import Seperator from "../../components/Separator"
import GoogleBtn from "../../components/GoogleBtn"
import { css } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"

const SignIn = ({ navigation }) => {
    const onSignUp = () => {
        navigation.navigate('Sign Up')
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <ScrollView style={css.container}>
                <AuthHeader onBackPress={onBack} title="Sign In" />

                <Input label="Email" placeholder="example@gmail.com" />
                <Input label="Password" placeholder="••••••••" isPassword />

                <Button style={css.button} title="Sign In" />

                <Seperator text="Or sign up with" />

                <GoogleBtn />

                <Text style={css.footer}>
                    Don't have an account?
                    <Text onPress={onSignUp} style={css.footerLink}> Sign Up</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn;