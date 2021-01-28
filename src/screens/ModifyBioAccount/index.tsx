import React, { Fragment, useEffect } from 'react';
import { View, Text, Button, StatusBar, ScrollView, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper'
import styles from './Components/styles'
import ModernHeader from "react-native-modern-header";
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';


const ModifyBioAccount = ({ navigation }) => {
    const [state, setState] = React.useState({ bio: '', iam: '', socialType: '', socialAdded: [] as any })
    const [animate, setAnimate] = React.useState(false)
    // const [validator, setValidator] = React.useState({})
    const handleDescriptionChange = (val: string) => {
        setState({ ...state, bio: val })
        // console.log(val)
    }

    const testData = [{
        id: 0, name: 'facebook',
        component: <View style={{ flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}><Entypo color='#5487ff' name='facebook' size={hp(2.5)} /><Text style={{ color: '#5487ff', marginLeft: 7, alignSelf: 'center', fontSize: hp(2) }}>Facebook</Text></View>,
    },
    {
        id: 1, name: 'youtube',
        component: <View style={{ flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}><Entypo color='#5487ff' name='youtube' size={hp(2.5)} /><Text style={{ color: '#5487ff', marginLeft: 7, alignSelf: 'center', fontSize: hp(2) }}>Youtube</Text></View>,
    },
    {
        id: 2, name: 'instagram',
        component: <View style={{ flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}><AntDesign color='#5487ff' name='instagram' size={hp(2.5)} /><Text style={{ color: '#5487ff', marginLeft: 7, alignSelf: 'center', fontSize: hp(2) }}>Instagram</Text></View>,
    },
    {
        id: 3, name: 'linkedin',
        component: <View style={{ flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}><Entypo color='#5487ff' name='linkedin' size={hp(2.5)} /><Text style={{ color: '#5487ff', marginLeft: 7, alignSelf: 'center', top: hp(0.2), fontSize: hp(2) }}>Linkedin</Text></View>,
    },
    {
        id: 4, name: 'twitter',
        component: <View style={{ flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}><Entypo color='#5487ff' name='twitter' size={hp(2.5)} /><Text style={{ color: '#5487ff', marginLeft: 7, alignSelf: 'center', fontSize: hp(2) }}>Twitter</Text></View>,
    }]

    const addSocial = (val: any) => {
        if (state.socialAdded.length == 0) {
            setState({ ...state, socialAdded: [...state.socialAdded, val.name] })
        } else {
            if (!state.socialAdded.includes(val.name)) {
                setState({ ...state, socialAdded: [...state.socialAdded, val.name] })
            } else {
                // setAnimate(false)
                alert(`le réseau ${val.name} a déja été sélectionné`)
            }
        }
    }

    const deleteSocial = (val: string) => {
        // setState({ ...state, socialAdded: [] })
        var array = [...state.socialAdded]; // make a separate copy of the array
        setAnimate(true)
        var index = array.indexOf(val)
        if (index !== -1) {
            array.splice(index, 1);

            setState({ ...state, socialAdded: array });
        }
        console.log(index)
    }
    return (
        <View style={{ flex: 1 }}>
            {/* @ts-ignore */}
            <SafeAreaView style={{ elevation: 12, zIndex: 1000, backgroundColor: Platform.OS == 'ios' ? 'white' : null }}>
                <ModernHeader
                    title={'Changer votre bio etc..'}
                    //style={{ top: 5553 }}
                    titleStyle={{
                        fontSize: 19,
                        lineHeight: 22,
                        fontWeight: '700',
                        //top: 5999,
                        letterSpacing: 0.019,
                        zIndex: 1000,
                        elevation: 12,

                    }}

                    rightDisable
                    leftIconOnPress={() =>
                        navigation.goBack()}
                    leftIconColor={'black'}
                    leftIconName={'chevron-back'}
                    backgroundColor={'white'}
                />
            </SafeAreaView >

            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <KeyboardAvoidingScrollView style={styles.center}>
                <View style={styles.typeAccount}>
                    <Text style={styles.bioText}>Type de compte</Text>
                    <View style={styles.iamTextView}>
                        <Text style={styles.iamText}>Je suis plus un </Text>
                        <View style={styles.rncPicker}>
                            <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                value={state.iam}
                                onValueChange={(val: string) => setState({ ...state, iam: val })}
                                items={[
                                    { label: 'Youtuber', value: 'Youtuber' },
                                    { label: 'Musicien', value: 'Musicien' },
                                    { label: 'Manager', value: 'Manager' },
                                    { label: 'Autre', value: 'Autre' },
                                ]}
                                style={{
                                    inputAndroidContainer: { height: hp(7) },
                                    //iconContainer:{padding:0},
                                    inputIOS: { color: 'lightskyblue', fontSize: hp(2), fontWeight: 'bold' },
                                    inputAndroid: { color: 'lightskyblue', fontSize: hp(2), fontWeight: 'bold' }
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.bioView}>
                    <Text style={styles.bioText}>Bio</Text>
                    <View style={styles.descriptionTextView}>
                        <TextInput underlineColor="transparent" theme={{ roundness: 12, }} mode='outlined' onChangeText={handleDescriptionChange} selectionColor={'lightskyblue'} underlineColorAndroid={'lightskyblue'} placeholder={'Description de votre profil'} multiline style={[styles.descriptionTextInput]} />
                    </View>
                </View>
                <View style={styles.bioView}>
                    <Text style={styles.bioText}>Réseaux sociaux</Text>
                    <View style={styles.socialView}>
                        {state.socialAdded.map((v: string, i: number) => {
                            return (
                                <Animatable.View animation={'bounceIn'} style={styles.socialViewContent}>
                                    {v == 'instagram' ? <AntDesign color='#5487ff' name='instagram' size={hp(2.7)} style={{ marginTop: 3, marginRight: 9 }} /> :
                                        <Entypo color='#5487ff' name={v} size={hp(2.7)} style={{ marginTop: 3, marginRight: 9 }} />}
                                    <TextInput mode='outlined' placeholder={`Entrez votre lien ${v}`} theme={{ roundness: 9 }} style={styles.socialTextInput} />
                                    <TouchableOpacity onPress={() => deleteSocial(v)}>
                                        <EvilIcons color='grey' name='trash' size={hp(3.5)} style={{ marginTop: 3, marginRight: 9 }} />
                                    </TouchableOpacity>
                                </Animatable.View>
                            )
                        })}


                        <ModalSelector
                            data={testData}
                            // visible={animate}
                            //initValue="Select something yummy!"
                            keyExtractor={item => item.id}
                            labelExtractor={item => item.name}
                            supportedOrientations={['portrait']}
                            animationType={'fade'}
                            scrollViewAccessibilityLabel={'Scrollable options'}
                            onChange={(val: object) => addSocial(val)}
                            cancelText={'Annuler'}
                        //cancelButtonAccessibilityLabel={'Annuler'}
                        // onChange={(option) => { handleCategoryChange(option.domainName) }}
                        >

                            <View style={styles.addButton}>
                                <AntDesign name='plus' size={hp(2)} />
                            </View>
                            {/* <Text>{state.socialType}</Text> */}

                        </ModalSelector>
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonView}>
                    <LinearGradient colors={['#74c0f9', '#8fcbf7', '#a7d8fc']} style={styles.linearGradient}>
                        <Text style={styles.buttonText}>
                            Modifier
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </KeyboardAvoidingScrollView>
        </View>

    );
};

export default ModifyBioAccount;


