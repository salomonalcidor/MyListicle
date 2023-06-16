import { Image, Pressable, Text, View } from "react-native";
import { css } from "./styles";
import React from "react";

const FavoriteItem = ({ title, price, image, onPress }) => {
    return (
        <Pressable onPress={onPress} style={css.container}>
            <Image style={css.image} source={{ uri: image }} />
            <View style={css.content}>
                <Text style={css.title}>{title}</Text>
                <Text style={css.price}>{price}</Text>
            </View>

            <Image style={css.icon} source={require('../../assets/close.png')} />
        </Pressable>
    )
}

export default React.memo(FavoriteItem);