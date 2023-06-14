import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import Config from 'react-native-config';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      offlineAccess: true,
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      iosClientId: Config.GOOGLE_iOS_CLIENT_ID,
    });
  }, [])

  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
}

export default App;
