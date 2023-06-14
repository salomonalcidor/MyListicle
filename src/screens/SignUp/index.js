import { ScrollView, Text, View } from "react-native"
import { styles } from "./styles"
import AuthHeader from "../../components/AuthHeader"
import Input from "../../components/Input"
import Checkbox from "../../components/Checkbox"
import React, { useState } from "react"
import Button from "../../components/Button"
import Separator from "../../components/Separator"
import GoogleBtn from "../../components/GoogleBtn"

const SignUp = () => {
    const [checked, setChecked] = useState(false)

    const onSignIn = () => {
        console.log('sign in pressed')
    }

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign Up" />

            <Input label="Name" placeholder="John Doe" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Password" placeholder="••••••••" isPassword />

            <View style={styles.terms}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.termsText}>I agree with <Text style={styles.bold}>Terms</Text> &amp; <Text style={styles.bold}>Privacy</Text></Text>
            </View>

            <Button style={styles.button} title="Sign Up" />

            <Separator text="Or sign up with" />

            <GoogleBtn />

            <Text style={styles.footer}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
            </Text>
        </ScrollView>
    )
}

export default React.memo(SignUp);