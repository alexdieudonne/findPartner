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
// import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
// import { Input } from 'react-native-elements';
// import { Sae } from 'react-native-textinput-effects';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import PasswordField from 'react-native-password-field';

import { AuthContext } from '../../components/context';

import Users from '../../model/users';

import styles from './Components/styles';

import translate from '../../components/translate/fr.json'

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        focus:false
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

    const handlePasswordChange = (val: string) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
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
            Alert.alert(translate.SignInScreen[0].InvalidEntry, translate.SignInScreen[0].messageInvalidEntry, [
                {text: translate.SignInScreen[0].Okay}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert(translate.SignInScreen[0].NotFoundUser,translate.SignInScreen[0].messageNotFoundUser, [
                {text: translate.SignInScreen[0].Okay}
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
            <Text style={styles.text_header}>{translate.SignInScreen[0].Header}</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: 'white'
            }]}
        >
            <Text style={[styles.text_footer, {
                color: '#05375a'
            }]}>{translate.SignInScreen[0].Username}</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color='black'
                    size={20}
                />
                {/* placeholder username (Entrez votre nom d'utilisateur) */}

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
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{translate.SignInScreen[0].validatorSignInUsername}</Text>
            </Animatable.View>
            }
            
            {/* Password label */}
            <Text style={[styles.text_footer, {
                color: '#05375a',
                marginTop: 35
            }]}>{translate.SignInScreen[0].Password}</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={'black'}
                    size={20}
                />
                
                <TextInput 
                    placeholder={translate.SignInScreen[0].validatorSignInPlaceholderPassword}
                    placeholderTextColor="#666666"
                    secureTextEntry={(data.secureTextEntry ) ? true : false}
                    onFocus={()=>setData({ ...data,focus:true})}
                    style={[styles.textInput, {
                        color: 'black'
                    }]}

                    autoCapitalize='none'
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{translate.SignInScreen[0].validatorSignInPassword}</Text>
            </Animatable.View>
            }
            
            {/* Mot de passe oublié (Forgot Passworc) */}
            <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
                <Text style={{color: '#009387', marginTop:15}}>{translate.SignInScreen[0].ForgotPassword}</Text>
            </TouchableOpacity>
            <View style={styles.button}>
            <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    {/* Sign In buton (Se connecter) */}
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>{translate.SignInScreen[0].Buttons[0].SignIn}</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    {/* Sign Up buton (S'enregistrer) */}
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>{translate.SignInScreen[0].Buttons[0].SignUp}</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

