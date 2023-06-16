import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const ProductDetails = ({ navigation, route }) => {
    console.log(route)
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Product Details</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails);