import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Header from "../../components/Header"
import { styles } from "./styles"
import React, { useState } from "react"
import { launchImageLibrary } from 'react-native-image-picker';
import Input from "../../components/Input";
import { categories } from "../../data/categories"
import Button from "../../components/Button";


const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

    // console.log('values:___', values)
    const goBack = () => {
        navigation.goBack()
    }

    const uploadImg = async () => {
        setLoading(true);
        const result = await launchImageLibrary();
        // console.log("____result of imgLibrary:", result)

        if (result?.assets?.length) {
            //take existing list and add the result.assets
            setImages(list => ([...list, ...result?.assets]))
            setLoading(false);
        }
    }
    // console.log("____images____", images)

    const onRemoveImage = (image) => {
        // console.log("Image removed>>", image.fileName)
        setImages((list) => {
            const filteredImg = list.filter(img => img?.fileName !== image?.fileName)
            return filteredImg;
        })
    }

    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }));
    }

    return (
        <SafeAreaView>
            <Header showBack onBackPress={goBack} title="Create a new listing" />

            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <Text style={styles.sectionTitle}>Upload Photos</Text>

                    <View style={styles.imageRow}>
                        {/* Can be a separate component */}
                        <TouchableOpacity disabled={loading} onPress={uploadImg} style={styles.uploadContainer}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>

                        {images?.map(image => (
                            <View style={styles.imgContainer} key={image?.fileName}>
                                {/* //using uri since img is local to device */}
                                <Image style={styles.image} source={{ uri: image?.uri }} />
                                <Pressable hitSlop={20} onPress={() => onRemoveImage(image)}>
                                    <Image style={styles.closeIcon} source={require('../../assets/close.png')} />
                                </Pressable>
                            </View>
                        ))}

                        {/* //While loading */}
                        {loading ? (
                            <ActivityIndicator />
                        ) : null}

                    </View>

                    {/* Onchange: Call onChange function. Take value from onChange text method. Pass it to onChange as first argment, the second will be the key to change */}
                    <Input placeholder="Listing Title" label="Title" value={values.title} onChangeText={(v) => onChange(v, 'title')} />
                    <Input placeholder="Select a category" label="Category" value={values.category} onChangeText={(v) => onChange(v, 'category')} type="picker" options={categories} />
                    <Input placeholder="Enter price in USD" label="Price" value={values.price} onChangeText={(v) => onChange(v, 'price')} keyboardType="numeric" />
                    <Input style={styles.description} placeholder="Tell us more..." label="Description" value={values.description} onChangeText={(v) => onChange(v, 'description')} multiline />
                </KeyboardAvoidingView>

                <Button title="Submit" style={styles.saveBtn} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing);