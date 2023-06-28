import { Image, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

const Input = ({ label, type, isPassword, value, onChangeText, options, placeholder, style, ...props }) => {
    //create new state
    //not visible by default
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const onItemSelect = (opt) => {
        onChangeText(opt);
        setIsModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            {type === 'picker' ? (
                <Pressable style={styles.inputContainer} onPress={() => setIsModalVisible(true)}>
                    {value ? (
                        <Text style={[styles.input, style]}>{value?.title}</Text>
                    ) : (
                        <Text style={[styles.placeholder, styles.input, style]}>{placeholder}</Text>
                    )}

                    <Image style={[styles.arrow, styles.image]} source={require('../../assets/select.png')} />
                </Pressable>
            ) : (
                <View style={styles.inputContainer}>
                    <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} style={[styles.input, style]} {...props} />

                    {isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image style={styles.image} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')} />
                        </Pressable>
                    ) : null}
                </View>
            )
            }

            <Modal transparent visible={isModalVisible}>
                <TouchableOpacity activeOpacity={1} style={styles.modalWrapper} onPress={() => setIsModalVisible(false)}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                        <Text style={styles.select}>Select options</Text>

                        {/* Return text for each option */}
                        {options?.map(opt => {
                            if (!opt?.id) {
                                return null;
                            }

                            const selected = value?.id === opt?.id;

                            return (
                                <Text onPress={() => onItemSelect(opt)} key={opt?.title} style={[styles.listItem, selected ? styles.activeListItem : {}]}>{opt?.title}</Text>
                            )
                        })}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View >
    )
}

export default Input;


/**
 * Padding on description disappeared due to props being set, so our style isn't being considered
 * To fix, turn style on input into array, then pass style prop
 */