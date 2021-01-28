import React,{useEffect} from 'react';
import {
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    AppRegistry
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { useTheme } from '@react-navigation/native';
import fr from '../../components/translate/fr.json'
import styles from './Components/styles'

const SplashScreen = ({navigation}) => {
    // const { colors } = useTheme();
    useEffect(() => {
        
    }, [])
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duration={1500}
            source={require('../../../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: 'white'
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
               color: 'black'
            }]}>{fr.SplasScreen[0].splashHome}</Text>
            <Text style={styles.text}>{fr.SplasScreen[0].SigninText}</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=> navigation.reset({
                index: 0,
                routes: [{ name: 'SignInScreen' }],
              })}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>{fr.SplasScreen[0].LetsGo}</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;
AppRegistry.registerComponent('SplashScreen', () => SplashScreen);
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
