import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import React from "react"

export default EditableBox = ({ label, value, onChangeText, editable, style, onPress }) => {
    return (
        <View onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} editable={editable} value={value} onChangeText={onChangeText} />
        </View>
    )
}