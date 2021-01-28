import React, { useEffect } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert,
    KeyboardAvoidingView,
} from 'react-native';
import {Picker} from '@react-native-community/picker'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
//import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import RNPickerSelect from 'react-native-picker-select';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Components/styles'

import translate from '../../components/translate/fr.json'
//import {verifyUser} from '../../components/requestApi/User'
import { APIHelper } from "../../components/requestApi/apiHelper";


interface Props {
    navigation:{
        goBack: () => void;
        reset: (arg0: { index: number; routes: [{ name: string; params: { gender: string; username: string; password: string; c_password: string; firstname: string; lastname: string; email: string}}] }) => void}  
  }


const SignInScreen = ({navigation}:Props) => {
    
    const textRef = React.useRef(1) as React.MutableRefObject<any>
    const [state, setState] = React.useState<{language:any}>({
        language:''
    })
    // useEffect(()=>{
    //     console.log(navigation)
    // },[])
    //const [state, setState] = React.useState<{date: null | any, isValidUser: null | boolean , isChanged: null | boolean}>({date: moment(new Date(1098054730000)).format("DD MMMM YYYY").toString(), isValidUser:true, isChanged:false});
    const [data, setData] = React.useState<{
        gender: string, 
        username: string , 
        password: string, 
        firstname: string, 
        lastname: string, 
        email: string, 
        confirm_password: string, 
        check_gender: boolean, 
        isValidGender: boolean, 
        genre_error: string, 
        firstname_error: string, 
        lastname_error: string, 
        email_error: string, 
        username_error: string, 
        password_error: string, 
        confirm_password_error: string, 
        check_passwordInputChange: boolean, 
        check_c_password:boolean, 
        check_password:boolean, 
        check_textInputChange: boolean, 
        check_usernameInputChange: boolean, 
        check_username: boolean, 
        check_firstnameInputChange: boolean, 
        check_firstname:boolean, 
        check_lastnameInputChange: boolean, 
        check_lastname: boolean, 
        check_emailInputChange: boolean, 
        check_email: boolean, 
        secureTextEntry:boolean, 
        isValidPassword: boolean, 
        isValidFirstname:boolean, 
        isValidLastname: boolean, 
        isValidEmail: boolean, 
        isValidUsername:boolean, 
        isValidC_Password: boolean, 
        confirm_secureTextEntry: boolean,
        check_genderChange:boolean,}>({
        gender:'',
        username: '',
        password: '',
        firstname:'',
        lastname:'',
        email:'',
        confirm_password: '',

        check_gender:false,
        isValidGender:true,
        genre_error:translate.SignUpScreen[0].errorGender,

        firstname_error:translate.SignUpScreen[0].validatorSignInFirstname,
        lastname_error:translate.SignUpScreen[0].validatorSignInLastname,
        email_error:translate.SignUpScreen[0].validatorSignInEmail,
        username_error:translate.SignUpScreen[0].validatorSignInUsername,
        password_error:translate.SignUpScreen[0].validatorSignInPassword,
        confirm_password_error:translate.SignUpScreen[0].validatorSignInC_Password,
        check_passwordInputChange:false,
        check_c_password:false,
        check_password:false,
        check_textInputChange: false,
        check_usernameInputChange: false,
        check_username: false,
        check_firstnameInputChange: false,
        check_firstname: false,
        check_lastnameInputChange: false,
        check_lastname:false,
        check_emailInputChange: false,
        check_email:false,
        secureTextEntry: true,
        isValidPassword: true,
        isValidFirstname:true,
        isValidLastname:true,
        isValidEmail:true,
        isValidUsername:true,
        isValidC_Password:true,
        confirm_secureTextEntry: true,
        check_genderChange:false
    });

const verifyUser = async (value: { email?: any; username?: any; }) => {
    let modified = "";
   // console.log(value.email.nativeEvent.text)
    try {
        if(value.email){
            modified=value.email.nativeEvent.text
            let response = await APIHelper.postRequest('/api/users/verify', {
                email: modified,
            });
            if(data.isValidEmail && data.check_email == false && response.status == 400){
                setData({...data,email_error:response.data.message,check_email:true,isValidEmail:false,})
            }
        }else if(value.username){
            modified=value.username.nativeEvent.text
            let response = await APIHelper.postRequest('/api/users/verify', {
                username: modified,
            });
            if(data.isValidUsername && data.check_username == false && response.status == 400){
                setData({...data,username_error:response.data.message,check_username:true,isValidUsername:false,})
            }
        } 
    } catch (err) {

    }
}

    const usernameInputChange = (val: string) => {
        const validate = (text: string) => {
            var usernameRegex = /^[a-zA-Z0-9]+$/;
            if (usernameRegex.test(text) === false) {
              return false;
            }else{
                return true
            }
        }
        if( val.length != 0 ) {
            setData({
                ...data,
                username: val,
                check_usernameInputChange: true,
                check_username:true,
                isValidUsername:false,
                username_error:translate.SignUpScreen[0].validatorSignInUsername
            });
            if(val.length >= 4){
                if(validate(val) == true){
                    setData({
                        ...data,
                        username: val,
                        check_username:false,
                        isValidUsername:true,
                        username_error:translate.SignUpScreen[0].validatorSignInUsername
                    })
                }
            }
        } else {
            setData({
                ...data,
                username: val,
                check_usernameInputChange: false,
                isValidUsername:true,
                username_error:translate.SignUpScreen[0].validatorSignInUsername
            });
        }
    }

    const firstnameInputChange = (val: string ) => {
        if( val.length != 0 ) {
            setData({
                ...data,
                firstname: val,
                check_firstnameInputChange: true,
                check_firstname:true,
                isValidFirstname:false,
                firstname_error:translate.SignUpScreen[0].validatorSignInFirstname
            });
            if(val.length >= 4){
                setData({
                    ...data,
                    firstname: val,
                    check_firstname:false,
                    isValidFirstname:true,
                    firstname_error:translate.SignUpScreen[0].validatorSignInFirstname
                })
            }
        } else {
            setData({
                ...data,
                firstname: val,
                check_firstnameInputChange: false,
                isValidFirstname:true,
                firstname_error:translate.SignUpScreen[0].validatorSignInFirstname
            });
        }
    }

    const lastnameInputChange = (val: string) => {
        if( val.length != 0 ) {
            setData({
                ...data,
                lastname: val,
                check_lastnameInputChange: true,
                check_lastname:true,
                isValidLastname:false,
                lastname_error:translate.SignUpScreen[0].validatorSignInLastname,
            });
            if(val.length >= 4){
                setData({
                    ...data,
                    lastname: val,
                    check_lastname:false,
                    isValidLastname:true,
                    lastname_error:translate.SignUpScreen[0].validatorSignInLastname,
                })
            }
        } else {
            setData({
                ...data,
                lastname: val,
                check_lastnameInputChange: false,
                isValidLastname:true,
                lastname_error:translate.SignUpScreen[0].validatorSignInLastname,
            });
        }
    }

    const genreChange = (val: string ) => {
        if( val.length != 0 ) {
            setData({
                ...data,
                gender: val,
                check_genderChange: true,
                check_gender:false,
                isValidGender:true,
            });
        } else {
            setData({
                ...data,
                gender: val,
                check_gender: false,
                isValidGender:true,
            });
        }
    }

    const emailInputChange = (val: string) => {
       const validate = (text: string) => {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(text) === false) {
              return false;
            }else{
                return true
            }
        }
        validate(val)
        if( val.length != 0 ) {
            setData({
                ...data,
                email: val,
                check_emailInputChange: true,
                check_email:true,
                isValidEmail:false,
                email_error:translate.SignUpScreen[0].validatorSignInEmail,
            });
            if(val.length > 4){
                if(validate(val) == true){
                    setData({
                        ...data,
                        email:val,
                        check_email:false,
                        isValidEmail:true,
                        email_error:translate.SignUpScreen[0].validatorSignInEmail,
                    })
                }
            }
        } else {
            setData({
                ...data,
                email: val,
                check_emailInputChange: false,
                isValidEmail:true,
                email_error:translate.SignUpScreen[0].validatorSignInEmail,
            });
        }
    }


    const handlePasswordChange = (val: string) => {
        if( val.length != 0 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: false,
                check_passwordInputChange: true,
                check_password:true,
                password_error:translate.SignUpScreen[0].validatorSignInPassword,
            });
            if(val.length >= 4){
                setData({
                    ...data,
                    password: val,
                    check_password:false,
                    isValidPassword: true,
                    password_error:translate.SignUpScreen[0].validatorSignInPassword,
                })
            }
        } else {
            setData({
                ...data,
                password: val,
                check_passwordInputChange: false,
                isValidPassword: true,
                password_error:translate.SignUpScreen[0].validatorSignInPassword,
            });
        }
    }
    
    const handleConfirmPasswordChange = (val: string) => {
        if(val.length != 0 ) {
            setData({
                ...data,
                confirm_password: val,
                isValidC_Password: false,
                check_c_password:true,
                confirm_password_error:translate.SignUpScreen[0].validatorSignInC_Password
            });
            if (data.password == val ){
                setData({
                    ...data,
                    confirm_password:val,
                    isValidC_Password: true,
                    check_c_password:false,
                    confirm_password_error:translate.SignUpScreen[0].validatorSignInC_Password
                });
            }
        }else{
            setData({
                ...data,
                isValidC_Password: true,
                confirm_password_error:translate.SignUpScreen[0].validatorSignInC_Password
            });
        }
    }
    
   const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const handleSignIn = () => {
        // if(data.firstname =='' || data.lastname =='' || data.email == '' || data.username == '' || data.password == '' || data.confirm_password == '' || data.isValidFirstname == false || data.isValidLastname == false || data.isValidEmail == false || data.isValidUsername == false || data.isValidPassword == false || data.isValidC_Password == false){
        //     Alert.alert('Wrong Input!', 'il y a une erreur.', [
        //         {text: "D'accord"}
        //     ]);
        //     setData({
        //         ...data,
        //         firstname_error:data.firstname =='' ?translate.SignUpScreen[0].validatorFirstnamePlaceholder : translate.SignUpScreen[0].validatorSignInFirstname,
        //         lastname_error:data.lastname == ''?translate.SignUpScreen[0].validatorLastnamePlaceholder : translate.SignUpScreen[0].validatorSignInLastname,
        //         email_error:data.email == ''?translate.SignUpScreen[0].validatorEmailPlaceholder : translate.SignUpScreen[0].validatorSignInEmail,
        //         username_error:data.username == ''?translate.SignUpScreen[0].validatorUsernamePlaceholder : translate.SignUpScreen[0].validatorSignInUsername,
        //         password_error:data.password == ''? translate.SignUpScreen[0].PasswordPlaceholder : translate.SignUpScreen[0].validatorSignInPassword,
        //         confirm_password_error:data.confirm_password == '' ?translate.SignUpScreen[0].validatorC_PasswordPlaceholder:translate.SignUpScreen[0].validatorSignInC_Password,
        //         isValidGender:data.gender==''? false : true,
        //         isValidFirstname: data.firstname =='' || data.check_firstname? false : true,
        //         isValidLastname:data.lastname == '' || data.check_lastname? false : true,
        //         isValidEmail:data.email == '' || data.check_email? false : true,
        //         isValidUsername:data.username == '' || data.check_username? false : true,
        //         isValidPassword:data.password == '' || data.check_password? false : true,
        //         isValidC_Password: data.confirm_password == '' || data.check_c_password? false : true,
        //     });
        // }else{

            navigation.reset({
                index: 0,
                routes: [{ name: 'AgeAndOthersScreen', params:{
                gender: data.gender,
                username: data.username,
                password: data.password,
                c_password: data.confirm_password,
                firstname:data.firstname,
                lastname:data.lastname,
                email:data.email,} }],
              });
        // }
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>{translate.SignUpScreen[0].Header}</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <KeyboardAwareScrollView 
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={{flexDirection: 'column'}} 
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false} 
            keyboardOpeningTime={0}
            extraScrollHeight={30}
            getTextInpurRefs={() => [textRef]}
             >

            <Text style={styles.text_footer}>{translate.SignUpScreen[0].Firstname}</Text>
            <View style={styles.lastname}>
                <View style={styles.picker}>
                {Platform.OS == "android" ?<Picker
                    selectedValue={state.language}
                    style={{height: 50, width:Platform.OS.toString() === 'ios' ? 30:100, color:"#05375a"}}
                    itemStyle={{color:"#05375a"}}
                    onValueChange={(itemValue, itemIndex) =>
                        setState({language: itemValue})
                    }>
                    <Picker.Item label="Mr" value="Mr" />
                    <Picker.Item label="Mme" value="Mme" />
                </Picker> :  
                <RNPickerSelect
                    onValueChange={(value) => genreChange(value)}
                    placeholder={{label:"Genre", value:"Mr"}}
                    
                    style={{
                        placeholder: {color:"#9ba09b"},
                        inputIOS: { color: "#05375a" },
                      }}
                    items={[
                        { label:"Mr.", value:"Mr" },
                        { label:"Mme.", value:"Mme" },
                    ]}
                />}
                </View>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder={translate.SignUpScreen[0].FirstnamePlaceholder}
                        textContentType={"name"}
                        autoCompleteType={"name"}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => firstnameInputChange(val)}
                    />
                    {data.check_firstnameInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        {data.check_firstname ? <Feather 
                            name="x-circle"
                            color="red"
                            size={20}
                        />:<Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />}
                    </Animatable.View>
                    : null}
                </View>
            </View>
            
            
            { data.isValidFirstname ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{data.firstname_error}</Text>
                </Animatable.View>
            }
            { data.gender =='' && data.isValidGender == false && data.isValidFirstname? <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{data.genre_error}</Text>
                </Animatable.View> : null
                
            }
            
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>{translate.SignUpScreen[0].Lastname}</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                
                <TextInput 
                    placeholder={translate.SignUpScreen[0].LastnamePlaceholder}
                    textContentType={"givenName"}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => lastnameInputChange(val)}
                />
                {data.check_lastnameInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    {data.check_lastname ? <Feather 
                        name="x-circle"
                        color="red"
                        size={20}
                    />:<Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />}
                </Animatable.View>
                : null}
            </View>

            { data.isValidLastname ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{data.lastname_error}</Text>
                </Animatable.View>
            }

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>{translate.SignUpScreen[0].Email}</Text>
            <View style={styles.action}>
                <Feather 
                    name="mail"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder={translate.SignUpScreen[0].EmailPlaceholder}
                    onChange={(text)=> verifyUser({email:text})}
                    autoCompleteType={"email"}
                    textContentType={"emailAddress"}
                    style={styles.textInput}
                    autoCapitalize="none"
                    //onChange={(val) => emailInputChange(val)}
                    onChangeText={(val) => emailInputChange(val.trim())}
                />
                {data.check_emailInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    {data.check_email ? <Feather 
                        name="x-circle"
                        color="red"
                        size={20}
                    />:<Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />}
                </Animatable.View>
                : null}
            </View>
            { data.isValidEmail ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{data.email_error}</Text>
                </Animatable.View>
            }

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>{translate.SignUpScreen[0].Username}</Text>
            <View style={styles.action}>
                <Feather 
                    name="user"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder={translate.SignUpScreen[0].UsernamePlaceholder}
                    onChange={(text)=> verifyUser({username:text})}
                    style={styles.textInput}
                    autoCompleteType={"username"}
                    textContentType={"username"}
                    autoCapitalize="none"
                    onChangeText={(val) => usernameInputChange(val.trim())}
                />
                {data.check_usernameInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    {data.check_username ? <Feather 
                        name="x-circle"
                        color="red"
                        size={20}
                    />:<Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />}
                </Animatable.View>
                : null}
            </View>
            { data.isValidUsername ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{data.username_error}</Text>
                </Animatable.View>
            }

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>{translate.SignUpScreen[0].Password}</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder={translate.SignUpScreen[0].PasswordPlaceholder}
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
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
                    <Text style={styles.errorMsg}>{data.password_error}</Text>
                </Animatable.View>
            }

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>{translate.SignUpScreen[0].C_Password}</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    ref={textRef}
                    placeholder={translate.SignUpScreen[0].C_PasswordPlaceholder}
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.confirm_secureTextEntry ? 
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
          
            
            { data.isValidC_Password ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{data.confirm_password_error}</Text>
                </Animatable.View>
            }
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {handleSignIn()}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>{translate.SignUpScreen[0].Buttons[0].SignUp}</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>{translate.SignUpScreen[0].Buttons[0].SignIn}</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;