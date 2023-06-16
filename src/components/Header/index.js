import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./styles";
import { useState } from "react";
import Input from "../Input";

const Header = ({ title, onBackPress, onLogout, onSearch, showLogout, showSearch, showBack, keyword }) => {
    let icon;
    let action;
    let direction;

    const onSearchPressed = () => {
        setshowSearchInput(s => !s)
    }

    if (showBack) {
        icon = require('../../assets/back.png')
        action = onBackPress
        direction = { flexDirection: 'row' }
    } else if (showSearch) {
        icon = require('../../assets/search.png')
        action = onSearchPressed
        direction = { flexDirection: 'row' }
    } else if (showLogout) {
        icon = require('../../assets/logout.png')
        action = onLogout
        direction = { flexDirection: 'row-reverse' }
    }

    const [showSearchInput, setshowSearchInput] = useState(false)

    return (
        <View style={styles.mainContainer}>
            <View style={[styles.container, direction]}>
                <Pressable hitSlop={20} onPress={action}>
                    <Image style={styles.image} source={icon} />
                </Pressable>

                <Text style={styles.title}>{title}</Text>

                <View style={styles.space} />
            </View>

            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder="Type your keyword..." />
            ) : null}
        </View>
    )
}

export default Header;