import React, { useState } from 'react';
import { Image, Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import EditableBox from '../../components/EditableBox';
import Button from '../../components/Button';

const Settings = ({ navigation }) => {
    //Set props for edit press
    const [editing, setEditing] = useState(false);
    //Set props for user information
    const [values, setValues] = useState({ name: 'User', email: 'user@example.com' });

    //Once user press edit button, `editing` is set to true
    const onEditPress = () => {
        setEditing(true);
    }
    //Once user saves, `editing` is set to true
    const onSave = () => {
        setEditing(false);
    }

    //Takes key and value, which comes from editable box
    const onChange = (key, value) => {
        //We take the existing state and return the key to the new value
        setValues(v => ({ ...v, [key]: value }))
    }

    const onItemPress = () => {
        Linking.openURL('https://www.google.com')
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <Header title="Settings" showBack onBackPress={onBack} />

            <ScrollView style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.sectionImage} source={require('../../assets/edit.png')} />
                    </Pressable>
                </View>

                {/* We take value from EditableBox prop and pass it to onChange function */}
                <EditableBox label="Name" onChangeText={(v) => onChange('name', v)} value={values.name} editable={editing} />
                <EditableBox label="Email" onChangeText={(v) => onChange('email', v)} value={values.email} editable={editing} />

                {editing ? (
                    <Button style={styles.editBtn} onPress={onSave} title='Save' />
                ) : null}

                <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQs" />
                <ListItem onPress={onItemPress} style={styles.item} title="Contact Us" />
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy &amp; Terms" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings);   