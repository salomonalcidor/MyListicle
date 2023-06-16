import { Image, Pressable, Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

const Input = ({ label, placeholder, isPassword, value, onChangeText }) => {
    //create new state
    //not visible by default
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />

                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.image} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')} />
                    </Pressable>
                ) : null}
            </View>
        </View>
    )
}

export default Input;