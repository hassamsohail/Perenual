import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Onboarding from './screen/Onboarding';
import LoginSignUp from './screen/LoginSignUp';
import SignUpOptions from './screen/SignUpOptions';
import SignUp from './screen/SignUp';
import Login from './screen/Login';
import SignUpPhone from './screen/SignUpPhone';
import Verify from './screen/Verify';
import Subscription from './screen/Subscription';

const Stack = createNativeStackNavigator();

const SplashScreenComponent = () => {
  return (
    <View style={styles.container}>
      {/* Your splash screen content */}
      <Image
        source={require('./assets/splash.png')} // Path to your splash screen image
        style={styles.splashImage}
        resizeMode="cover" // Resize mode for the image (e.g., 'cover', 'contain', 'center', etc.)
      />
    </View>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // Hide the splash screen after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {showSplash ? (
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreenComponent}
              options={{
                headerShown: false,
              }}
            />
          ) : null}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Onboarding"
            component={Onboarding}
          />
            <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="LoginSignUp"
            component={LoginSignUp}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SignUpOptions"
            component={SignUpOptions}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SignUp"
            component={SignUp}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SignUpPhone"
            component={SignUpPhone}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Verify"
            component={Verify}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Subscription"
            component={Subscription}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: '100%',
    height: '100%',
  },
});

export default App;
