import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';

const Profile = ({ navigation }) => {
    const num = 12;

    const onLogout = () => {
        console.log('User logged out..')
    }

    const onSettingsPress = () => {
        navigation.navigate('Settings')
    }

    const onCreateListingPress = () => {
        navigation.navigate('CreateListing')
    }

    const onMyListingsPress = () => {
        navigation.navigate('MyListings')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Profile" showLogout onLogout={onLogout} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>Name</Text>
                    <Text style={styles.email}>Email</Text>

                    <ListItem title="My Listings" subtitle={`You have ${num} listings`} onPress={onMyListingsPress} />
                    <ListItem title="Settings" subtitle="Account, FAQs, Contact" onPress={onSettingsPress} />
                </View>

                <Button onPress={onCreateListingPress} style={{ flex: 0 }} title="Add New Listing" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile);