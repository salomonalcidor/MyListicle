import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { categories } from '../../data/categories'
import { products } from '../../data/products'
import Categories from '../../components/Categories';
import ProductList from '../../components/ProductList';

const Home = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState(false)
    const [keyword, setKeyword] = useState();
    const [filteredProduct, setFilteredProduct] = useState(products)

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter((products) => products?.category === selectedCategory)
            setFilteredProduct(updatedProducts)
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((products) => products?.category === selectedCategory && products?.title?.toLowerCase().includes(keyword.toLowerCase()))
            setFilteredProduct(updatedProducts)
        } else if (!selectedCategory && keyword) {
            const updatedProducts = products.filter((products) => products?.title?.toLowerCase().includes(keyword.toLowerCase()))
            setFilteredProduct(updatedProducts)
        } else if (!selectedCategory && !keyword) {
            setFilteredProduct(products)
        }
    },
        //Listener
        [selectedCategory, keyword]
    )

    const renderCategoryList = ({ item, index }) => {
        return (
            <Categories
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0}
                title={item?.title}
                image={item?.image} />
        )
    }
    const renderProductList = ({ item }) => {
        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', { product })
        };

        return (
            <ProductList onPress={() => onProductPress(item)} {...item} />
        )
    }

    return (
        <SafeAreaView>
            <Header onSearch={setKeyword} keyword={keyword} title="Find all you need" showSearch />

            <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryList} keyExtractor={(item, index) => String(index)} />

            <FlatList
                style={styles.productList} numColumns={2}
                data={filteredProduct} renderItem={renderProductList}
                keyExtractor={(item) => String(item.id)}
                ListFooterComponent={<View style={{ height: 300 }} />} />
        </SafeAreaView>
    )
}

export default React.memo(Home);