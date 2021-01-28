import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createFluidNavigator } from 'react-navigation-fluid-transitions'
import Icon from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DomainScreen from '../screens/DomainesScreen';
import DomainsDetailsScreen from '../screens/DomainsDetailsScreen';
import ProjectsInfos from '../screens/ProjectInfo'
import PostProjectScreen from '../screens/CreateProject';
import SearchWhereScreen from '../screens/searchWhere';
import SettingsScreen from '../screens/AccountScreen/Components/SettingsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import PostsScreen from '../screens/PostsScreen'

//Account stack
import AccountScreen from '../screens/AccountScreen';
import EditAccount from '../screens/EditAccount';
import EditBioAndOther from '../screens/ModifyBioAccount';

const StackShared = createSharedElementStackNavigator();
// const Stack = createStackNavigator();
const DetailsStack = createStackNavigator();

export const HomeStackScreen = ({ navigation }) => (
    <StackShared.Navigator screenOptions={{
        cardStyle: { backgroundColor: 'white' },
        headerShown: false,

        headerStyle: {
            backgroundColor: '#fff',
        },

        headerTintColor: 'black',
        // headerTitleStyle: {
        //   fontWeight: 'bold'
        // }
    }}>

        <StackShared.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <StackShared.Screen name="Domaines" component={DomainScreen} options={{ headerShown: false }} />
        <StackShared.Screen name="DomainsDetails" component={DomainsDetailsScreen}
            options={{
                gestureEnabled: false,
                cardStyleInterpolator: ({ current: { progress } }) => {
                    return {

                        cardStyle: { opacity: progress }
                    }
                },
                transitionSpec: {
                    open: {
                        animation: 'timing',
                        config: { duration: 300 }
                    },
                    close: {
                        animation: 'timing',
                        config: { duration: 300 }
                    }
                },
            }} />
        <StackShared.Screen name="PostProject" component={PostProjectScreen} options={{ headerShown: false }} />
        <StackShared.Screen name="Setting" component={SettingsScreen} options={{ headerShown: false }} />
        {/* @ts-ignore */}
        <StackShared.Screen name="ProjectsInfos" component={ProjectsInfos} options={{
            headerShown: false, gestureEnabled: false,
            cardStyle: { backgroundColor: "#fff" },
            cardStyleInterpolator: ({ current: { progress } }) => {

                return {

                    cardStyle: { opacity: progress }
                }
            },
            transitionSpec: {
                open: {
                    animation: 'timing',
                    //@ts-ignore
                    config: { delay: 400, duration: Platform.OS == 'android' ? 300 : null }
                },
                close: {
                    animation: 'timing',
                    config: { duration: 200, delay: 200 }
                }
            },
        }} />
        
        {/* <StackShared.Screen name="AccountScreen"  component={AccountScreen} options={{headerShown: false}}/> */}

    </StackShared.Navigator>
);

export const AccountStack = ({ navigation }) => (
    <DetailsStack.Navigator screenOptions={{}}>
        <DetailsStack.Screen name="Account" component={AccountScreen} options={{headerShown:false, cardStyle:{backgroundColor:'white'}}} />
        <DetailsStack.Screen name="EditAccount"  component={EditAccount} options={{headerShown: false, cardStyle:{backgroundColor:'white'}}}/>
        <DetailsStack.Screen name="EditBioAndOther"  component={EditBioAndOther} options={{headerShown: false, cardStyle:{backgroundColor:'white'}}}/>
        <DetailsStack.Screen name="PostsScreen"  component={PostsScreen} options={{headerShown: false, cardStyle:{backgroundColor:'white'}}}/>
    </DetailsStack.Navigator>
);

export const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator screenOptions={{

        headerStyle: {
            backgroundColor: 'lightskyblue',
        },
        headerTintColor: '#fff'
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{

            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="lightskyblue" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </DetailsStack.Navigator>
);
