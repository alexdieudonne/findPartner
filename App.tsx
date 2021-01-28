import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,

} from '@react-navigation/native';

import { createFluidNavigator } from 'react-navigation-fluid-transitions'
import { createDrawerNavigator } from '@react-navigation/drawer';

//plus tard
import { Provider as StoreProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
//import Store from './src/Store/configureStore'
import Store from './src/redux/store'

import { enableScreens } from 'react-native-screens';

import { DrawerContent } from './src/screens/DrawerContent';

import MainTabScreen from './src/routes/MainTabScreen';
import SearchWhereScreen from './src/screens/searchWhere'
import SupportScreen from './src/screens/SupportScreen';
import SettingsScreen from './src/screens/AccountScreen/Components/SettingsScreen';
// import BookmarkScreen from './src/screens/DomainsDetailsScreen/Components/Modal';

import { AuthContext } from './src/components/context';

import RootStackScreen from './src/screens/RootStackScreen';
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 
  enableScreens();
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...DefaultTheme,
    roundness: 25,
    mode:'adaptive',
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
      primary: 'lightskyblue',
      error: 'red'
    }
   
  }

  const CustomDarkTheme = {
    ...DefaultTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState: any, action: any) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser: any) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      dispatch({ type: 'REGISTER' });
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // const Navigator = createFluidNavigator({
  //   screen1: { screen: Screen1 },
  //   screen2: { screen: Screen2 },
  // });
  return (
    <Provider store={Store}>
      {/* @ts-ignore */}
      <PaperProvider theme={CustomDefaultTheme}>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer >
              {loginState.userToken !== null ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}  >
                  <Stack.Screen name="HomeDrawer" component={MainTabScreen} />
                  <Stack.Screen name="searchWhere" component={SearchWhereScreen} options={{ stackPresentation: 'modal', contentStyle: { backgroundColor: 'white' } }} />
                  <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ stackPresentation: 'modal', gestureEnabled: true, contentStyle: { backgroundColor: 'white' } }} />
                  {/* <Stack.Screen name="BookmarkScreen" component={BookmarkScreen} /> */}
                </Stack.Navigator>

              )
                :
                <RootStackScreen />
              }
          </NavigationContainer>
        </AuthContext.Provider>
      </PaperProvider>
    </Provider>
  );
}

export default App;
