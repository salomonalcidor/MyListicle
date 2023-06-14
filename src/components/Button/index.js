import { Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import React from "react";


const Button = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

//Instead of re-rendering with every press, rendering is done only when props / state change
export default React.memo(Button);