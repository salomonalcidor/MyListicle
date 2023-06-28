import React from "react";
import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Button from '../../components/Button'
import ImageCarousel from "../../components/ImageCarousel";

const ProductDetails = ({ route, navigation }) => {
    const { product } = route?.params || {};

    const onBack = () => {
        navigation.goBack()
    }

    const onContactSeller = () => {
        //Make a phone call
        const cell = '9045025360';
        Linking.openURL(`tel:${cell}`)

        //Send an email
        const email = 'salomon@alcidortech.com'
        Linking.openURL(`mailto:${email}`)
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images} />
                ) : (
                    <Image style={styles.headerImg} source={{ uri: product?.image }} />
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>

                <Pressable onPress={onBack} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../assets/back.png')} />
                </Pressable>
            </ScrollView>

            <View style={styles.footer}>
                <Button title="Contact Seller" onPress={onContactSeller} />
                <Pressable style={styles.iconBg}>
                    <Image style={styles.icon} source={require('../../assets/favorites.png')} />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails);