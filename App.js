import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet , Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Onboarding from './screen/Onboarding/Onboarding';
import LoginSignUp from './screen/Authentication/LoginSignUp';
import SignUpOptions from './screen/Authentication/SignUpOptions';
import SignUp from './screen/Authentication/SignUp';
import Login from './screen/Authentication/Login';
import SignUpPhone from './screen/Authentication/SignUpPhone';
import Verify from './screen/Authentication/Verify';
import Subscription from './screen/Subscription/Subscription';
import Mainscreen from './screen/PlantCare/Mainscreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPlants from './screen/MyPlants/MyPlants';
import Reminder from './screen/Reminder/Reminder';
import Community from './screen/Community/Community';
import Survey from './screen/Survey/Survey';
import SearchToAdd from './screen/SearchToAdd/SearchToAdd';
import ScanToAdd from './screen/ScanToAdd/ScanToAdd';
import PlantDetail from './screen/SearchToAdd/PlantDetail';
import ScanSearch from './screen/ScanToAdd/ScanSearch';
import AddManuallyPlants from './screen/ScanToAdd/AddManuallyPlants';
import Height from './screen/ScanToAdd/Height';
import Light from './screen/ScanToAdd/Light';
import Humidity from './screen/ScanToAdd/Humidity';
import Task from './screen/ScanToAdd/Task';
import Plantsdetail2 from './screen/MyPlants/Plantsdetail2';
import EditPlant from './screen/MyPlants/EditPlant';
import Profile from './screen/Profile/Profile';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
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
          
          <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Tab"
              component={TabNavi}
            />
              
          <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Survey"
              component={Survey}
            />
               <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="SearchToAdd"
              component={SearchToAdd}
            />
              <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="ScanToAdd"
              component={ScanToAdd}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="PlantDetail"
              component={PlantDetail}
            />
             <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="ScanSearch"
              component={ScanSearch}
            />
              <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="AddManuallyPlants"
              component={AddManuallyPlants}
            />
              <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Height"
              component={Height}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Light"
              component={Light}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Humidity"
              component={Humidity}
            />
             <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Task"
              component={Task}
            />
             <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Plantsdetail2"
              component={Plantsdetail2}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="EditPlant"
              component={EditPlant}
            />
             <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Profile"
              component={Profile}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
const TabNavi = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MainScreen">
      <Tab.Screen
        name="Mainscreen"
        component={Mainscreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={
                  focused
                    ? require('./assets/PlantCare.png')
                    : require('./assets/PlantCareD.png')
                }
                style={{width: 24, height: 24, marginTop:5}}
              />
              <Text
                style={
                  focused
                    ? {marginTop: 2, color: '#1BBFA0', fontSize: 12}
                    : {marginTop: 2, color: '#9B9B9B', fontSize: 12}
                }>
               Plant Care
              </Text>
            </View>
          ),
          tabBarLabel: () => null, // Disable the default icon name
        }}
      />
     <Tab.Screen
        name="MyPlants"
        component={MyPlants}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={
                  focused
                    ? require('./assets/MyPlants.png')
                    : require('./assets/MyPlantsD.png')
                }
                style={{width: 24, height: 24, marginTop:5}}
              />
              <Text
                style={
                  focused
                    ? {marginTop: 2, color: '#1BBFA0', fontSize: 12}
                    : {marginTop: 2, color: '#9B9B9B', fontSize: 12}
                }>
              My Plants
              </Text>
            </View>
          ),
          tabBarLabel: () => null, // Disable the default icon name
        }}
      />
     <Tab.Screen
        name="Reminder"
        component={Reminder}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={
                  focused
                    ? require('./assets/Reminder.png')
                    : require('./assets/ReminderD.png')
                }
                style={{width: 24, height: 24, marginTop:5}}
              />
              <Text
                style={
                  focused
                    ? {marginTop: 2, color: '#1BBFA0', fontSize: 12}
                    : {marginTop: 2, color: '#9B9B9B', fontSize: 12}
                }>
             Reminder
              </Text>
            </View>
          ),
          tabBarLabel: () => null, // Disable the default icon name
        }}
      />
     <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={
                  focused
                    ? require('./assets/Comunity.png')
                    : require('./assets/ComunityD.png')
                }
                style={{width: 24, height: 24, marginTop:5}}
              />
              <Text
                style={
                  focused
                    ? {marginTop: 2, color: '#1BBFA0', fontSize: 12}
                    : {marginTop: 2, color: '#9B9B9B', fontSize: 12}
                }>
             Community
              </Text>
            </View>
          ),
          tabBarLabel: () => null, // Disable the default icon name
        }}
      />
     
    </Tab.Navigator>
  );
};

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
