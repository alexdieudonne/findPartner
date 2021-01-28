import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from '../../components/context';

import Users from '../../model/users';

import styles from './Components/styles';

import translate from '../../components/translate/fr.json'

const ForgotPassword = (navigation: {navigation:{goBack:()=>{}}  }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    // const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val: string) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handleValidUser = (val: string) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName: string, password: string) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          {/* Header (Bienvenue !) */}
        <View style={styles.header}>
            <Text style={styles.text_header}>{translate.ForgotPasswordScreen[0].Header}</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: 'white'
            }]}
        >
            {/* Username label */}
            <Text style={[styles.text_footer, {
                color: '#05375a'
            }]}>{translate.SignInScreen[0].Username}</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color='black'
                    size={20}
                />
                {/* placeholder password (Entrez votre mot de passe) */}
                <TextInput 
                    placeholder={translate.SignInScreen[0].validatorSignInPlaceholderUsername}
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'black'
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            {/* Validator signIn (Connexion) */}
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{translate.SignInScreen[0].validatorSignInUsername}</Text>
            </Animatable.View>
            }
            
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{translate.SignInScreen[0].validatorSignInPassword}</Text>
            </Animatable.View>
            }
            
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>{translate.ForgotPasswordScreen[0].Buttons[0].Recover}</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>{translate.ForgotPasswordScreen[0].Buttons[0].goLogin}</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default ForgotPassword;
