import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';

const Splash = ({ navigation }) => {
    const onSignUp = () => {
        navigation.navigate('Sign Up')
    }
    const onSignIn = () => {
        navigation.navigate('Sign In')
    }

    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../assets/splash.png')} />

            <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>You'll find</Text>
                <Text style={[styles.subtitle, styles.subtext]}>all you need</Text>
                <Text style={styles.subtitle}>here!</Text>
            </View>

            <View style={styles.btnContainer}>
                <Button onPress={onSignUp} title="Sign Up" />
            </View>

            <Pressable onPress={onSignIn} hitSlop={20} activeOpacity={0.9}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
}

export default Splash;