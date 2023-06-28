import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../data/products';
import FavoriteItem from '../../components/FavoriteItem';
import Header from '../../components/Header';

const MyListings = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack();
    }

    const renderItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }

        return <FavoriteItem icon={require('../../assets/delete.png')} onPress={onProductPress} {...item} />
    }

    return (
        <SafeAreaView>
            <Header title="Favorites" showBack onBackPress={onBackPress} />
            <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item?.id)} />
        </SafeAreaView>
    )
}

export default React.memo(MyListings);