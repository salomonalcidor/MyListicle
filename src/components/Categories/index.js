import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import React from "react";
import { colors } from "../../utils/colors";

const CategoryBox = ({ title, image, onPress, isFirst, isSelected }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, isFirst ? { marginLeft: 24 } : {}]}>
            <View style={[styles.imgContainer, isSelected ? { backgroundColor: colors.blue } : {}]}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={[styles.title, isSelected ? { color: colors.blue, fontWeight: '500' } : {}]}>{title}</Text>
        </Pressable>
    )
}

export default React.memo(CategoryBox);