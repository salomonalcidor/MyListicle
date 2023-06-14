import { Image, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import React from "react";

const Checkbox = ({ checked, onCheck }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => onCheck(!checked)} style={styles.container}>
            {checked ? (
                <View style={styles.viewContainer}>
                    <Image style={styles.icon} source={require('../../assets/check.png')} />
                </View>
            ) : null}
        </TouchableOpacity>
    )
}

//Instead of re-rendering with every press, rendering is done only when props / state change
export default React.memo(Checkbox);