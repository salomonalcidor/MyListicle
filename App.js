import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import Splash from './src/screens/Splash';
import ProductDetails from './src/screens/ProductDetail';
import Home from './src/screens/Home';
import Favorites from './src/screens/Favorites';
import Profile from './src/screens/Profile';
import Config from 'react-native-config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './src/screens/Settings';
import CreateListing from './src/screens/CreateListing';
import MyListings from './src/screens/MyListings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="CreateListing" component={CreateListing} options={{ headerShown: false }} />
      <Stack.Screen name="MyListings" component={MyListings} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused ? require('./src/assets/home_active.png') : require('./src/assets/home.png');
        } else if (route.name === 'Favorites') {
          icon = focused ? require('./src/assets/favorites_active.png') : require('./src/assets/favorites.png');
        } else if (route.name === 'ProfileStack') {
          icon = focused ? require('./src/assets/profile_active.png') : require('./src/assets/profile.png');
        }

        // You can return any component that you like here!
        return <Image style={{ width: 24, height: 24 }} source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGrey }
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
)
const Theme = {
  colors: {
    background: colors.white
  }
}

const App = () => {
  const isSignedIn = true

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      offlineAccess: true,
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      iosClientId: Config.GOOGLE_iOS_CLIENT_ID,
    });
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              <Stack.Screen name="Sign In" component={SignIn} options={{ headerShown: false }} />
              <Stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
