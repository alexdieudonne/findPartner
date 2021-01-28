import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    StatusBar,
    Alert,
    NativeModules,
    ScrollView,
    TextInput,
    Button
} from 'react-native';
import PlacesInput from 'react-native-places-input';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import { signUser } from '../../components/requestApi/User/index'
import axios from 'axios'
import SegmentedPicker, {
    PickerOptions,
    Selections,
} from 'react-native-segmented-picker';
import data from './Components/cities.json';

import { AuthContext } from '../../components/context';

import Users from '../../model/users';

import styles from './Components/styles';

import translate from '../../components/translate/fr.json'
import { Picker } from '@react-native-community/picker';

interface Props {
    navigation:{
         route: { params: React.SetStateAction<null>; }
         reset: ({})=> void
    }
}

const AgeAndOthersScreen = (navigation: Props) => {
    //const [state, setState] = React.useState({ date: moment(new Date(1098054730000)).format("DD MMMM YYYY").toString(), isValidUser:true, isChanged:false})
    const [state, setState] = React.useState<{ isValidUser: null | boolean, isChanged: null | boolean, category: string | number, isValidCategory: boolean, isValidDescription: boolean | null, isValidLocation: boolean | null, isValidOther: boolean | null, locations: Array<any> }>({ isValidUser: true, isChanged: false, isValidCategory: true, category: '', isValidDescription: true, isValidLocation: true, isValidOther: true, locations: [] });
    const { signUp } = React.useContext(AuthContext);
    const segmentedPicker = React.createRef<any>();

    //const [userInfos, setInfos] = React.useState<string>();
    const [selected, setSelected] = React.useState();
    const [userInfos, setInfos] = React.useState<{ email: null | string, password: null | string | string, gender: null | string | string, username: null | string | string, firstname: null | string | string, lastname: null | string | string, confirm_password: null | string | string, description: string, userTyper: string | number, otherUserType: string, location: string }>({ email: null, password: null, gender: null, username: null, firstname: null, lastname: null, confirm_password: null, description: '', userTyper: '', otherUserType: '', location: 'Paris' });
    useEffect(
        () => {
            //segmentedPicker.current.show();
            console.log(navigation)
            var sort: Array<any> = []

            var array: Array<any> = []
            var pl: Array<any> = sort.sort()
            async function fetchu() {
                await axios.get('https://geo.api.gouv.fr/communes?fields=nom')
                    .then(function (response) {
                        // handle success
                        for (var i: number = 0; i < response.data.length; i++) {
                            sort.push(response.data[i].nom)
                            array.push({ label: response.data[i].nom, value: response.data[i].nom.trim() })
                        }

                        setState({ ...state, locations: array })
                    })

            }
            fetchu()
            // const param = navigation.route.params
            // setInfos(prevState => ({ ...prevState, param }))
            // setInfos(param)
        }, []);


    // const { colors } = useTheme();

    const categoryChange = (val: any) => {
        console.log(state.locations)
        if (val.length != 0) {
            setInfos({
                ...userInfos,
                userTyper: val
            });
            setState({
                ...state,
                isValidCategory: true,
            })
        } else {
            setInfos({
                ...userInfos,
                userTyper: val
            });
        }
    }

    const otherChange = (val: any) => {
        if (val.length != 0) {
            setInfos({
                ...userInfos,
                otherUserType: val
            });
            setState({
                ...state,
                isValidOther: true,
            })
        } else {
            setInfos({
                ...userInfos,
                otherUserType: val
            });
        }
    }

    const descritionChange = (val: any) => {
        if (val.length != 0) {
            setInfos({
                ...userInfos,
                description: val
            });
            setState({
                ...state,
                isValidDescription: true,
            })
        } else {
            setInfos({
                ...userInfos,
                description: val
            });
        }
    }


    const nextButton = () => {

        if (userInfos.userTyper == "" || userInfos.description == "" || userInfos.otherUserType == "" && userInfos.userTyper == 'Autre') {
            if (userInfos.userTyper == "" || userInfos.userTyper == "Catégorie") {

                setState(prevState => ({ ...prevState, isValidCategory: false }));
            }
            if (userInfos.description == "") {
                setState(prevState => ({ ...prevState, isValidDescription: false }));
            }
            if (userInfos.userTyper == 'Autre' && userInfos.otherUserType == '') {
                setState(prevState => ({ ...prevState, isValidOther: false }));
            }
            //console.log("userInfos.userTyper",userInfos.userTyper)
            // Alert.alert("Warning")
        } else {
            //signIn();
            // setInfos(prevState => ({ ...prevState, age: years.toString() }));
            // signUser(userInfos.gender, years.toString(), userInfos.email as any, userInfos.firstname as any, userInfos.lastname as any, userInfos.username as any, userInfos.password as any, userInfos.confirm_password as any)
            //console.log({age:years.toString(),email:userInfos.email,firstname:userInfos.firstname,lastname:userInfos.lastname,username:userInfos.username,password:userInfos.password})
            // navigation.navigation.reset({
            //     index: 0,
            //     routes: [{ name: 'HomeDrawer' }],
            //   });
              signUp()
           // Alert.alert("C'est bon")
        }

    }


    //device default language
    const deviceLanguage =
        Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0]
            : NativeModules.I18nManager.localeIdentifier;

    const onConfirm = (selections: any) => {
        console.info(selections);
        setInfos({ ...userInfos, location: selections.location })
    }
    const showPicker = () => {
        segmentedPicker.current.show();
    };

    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always" style={styles.container} contentContainerStyle={{ paddingBottom: 10 }}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            {/* Header (Encore une etape !) */}
            <View style={styles.header}>
                <Text style={styles.text_header}>{translate.AgeAndOthersScreen[0].Header}</Text>
            </View>

            <Animatable.View
                animation="fadeInDownBig"
                style={[styles.footer, {
                    backgroundColor: 'white'
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: '#05375a'
                }]}>{translate.AgeAndOthersScreen[0].Description}</Text>
                <View style={styles.action}>
                    <TextInput placeholderTextColor={state.isValidDescription == false ? 'red' : 'grey'} placeholder={translate.AgeAndOthersScreen[0].enterDescription} onChangeText={descritionChange} multiline maxLength={180} style={[styles.textInputDescription, { borderWidth: !state.isValidDescription ? 1 : 0, borderColor: 'red', color: '#05375a' }]} />
                </View>

            </Animatable.View>
            <Animatable.View
                animation="fadeInDownBig"
                style={[styles.typeAccountView, {
                    backgroundColor: 'white'
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: '#05375a'
                }]}>{translate.AgeAndOthersScreen[0].typeAccount}</Text>
                <View style={[styles.selectPickerView, { borderWidth: !state.isValidCategory ? 1 : 0, }]}>
                    {Platform.OS == "android" ?
                        <Picker
                            mode={'dropdown'}

                            selectedValue={userInfos.userTyper}
                            style={{ width: 100, paddingHorizontal: "50%", color: !state.isValidCategory ? 'red' : "#05375a", alignSelf: "center", }}
                            itemStyle={{ left: 30 }}
                            onValueChange={(value) => categoryChange(value)}
                        // onValueChange={(itemValue, itemIndex) =>
                        //     setInfos({ ...userInfos, userTyper: itemValue })
                        // }
                        >
                            <Picker.Item label="Musicien" value="Musicien" />
                            <Picker.Item label="Sportif" value="Sportif" />
                            <Picker.Item label="Photographe" value="Photographe" />
                            <Picker.Item label="Étudiant/élève etc..." value="Éducation" />
                            <Picker.Item label="Autre..." value="Autre" />
                        </Picker> :
                        <RNPickerSelect
                            onValueChange={(value) => categoryChange(value)}
                            placeholder={{ color: 'red', label: "Catégorie", value: "Catégorie" }}

                            style={{
                                placeholder: { color: !state.isValidCategory ? 'red' : "#9ba09b" },
                                inputIOS: { color: !state.isValidCategory ? 'red' : "#05375a", alignSelf: 'center' },
                            }}
                            items={[
                                { label: "Musicien", value: "Musicien" },
                                { label: "Sportif", value: "Sportif" },
                                { label: "Photographe", value: "Photographe" },
                                { label: "Étudiant/élève etc...", value: "Etudiant" },
                                { label: "Autre...", value: "Autre" },
                            ]}
                        />}
                </View>
                {userInfos.userTyper == 'Autre' ?

                    <Animatable.View animation={'fadeInLeft'} style={[styles.otherView, { borderWidth: !state.isValidOther ? 1 : 0 }]}>
                        <TextInput onChangeText={otherChange} maxLength={30} placeholder={'Indiquez quoi..'} style={[styles.otherTextInput]} />
                    </Animatable.View> : null}
            </Animatable.View>

            <Animatable.View
                animation="fadeInDownBig"
                style={[styles.whereILive, {
                    backgroundColor: 'white'
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: '#05375a',alignContent:'center'
                }]}>{translate.AgeAndOthersScreen[0].whereILive}</Text>
                <View style={{ alignItems: 'center', alignSelf: 'flex-end',justifyContent:'center' }}>
                    <TouchableOpacity onPress={showPicker}>
                        <Text>{userInfos.location}</Text>
                    </TouchableOpacity>

                    <SegmentedPicker
                        native={true}
                        nativeTestID="example_native_picker"
                        ref={segmentedPicker}
                        onConfirm={onConfirm}

                        options={[
                            {
                                key: 'location',
                                items: state.locations
                            },

                        ]}
                    />

                </View>

            </Animatable.View>
            <Animatable.View animation={'fadeInUpBig'} style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => { nextButton() }}
                >
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>{translate.AgeAndOthersScreen[0].Buttons[0].Next}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </Animatable.View>
        </KeyboardAwareScrollView>
    );
};

export default AgeAndOthersScreen;

