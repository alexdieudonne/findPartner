import React from 'react';
import { View, Text, LogBox, TouchableOpacity, Platform } from 'react-native';
import Image from 'react-native-image-progress';
import Icon from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import { TouchableOpacity as TouchableOpacity1 } from 'react-native-gesture-handler';


import ProgressBar from 'react-native-progress/Circle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeaderScrollView from '../../components/utils/header3.0';
import styles from './Components/styles'
import { TextInput } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import { addLocation, deleteLocation } from '../../redux/manageLocation'

const EditScreen = ({ navigation }) => {
    const [state, setState] = React.useState({ userName: '', fullName: '', email: '', localization: '', password: '' })

    //localizations
    const dispatch = useDispatch()
    const locations = useSelector((state: any) => state)
    const deletelocation = (id: number) => dispatch(deleteLocation(id))

    const ref_input1 = React.useRef();
    const ref_input2 = React.useRef();
    const ref_input3 = React.useRef();
    const ref_input4 = React.useRef();
    const ref_input5 = React.useRef();

    const modifiedFunc = () => {
        console.log('pressed')
    }

    const goBack = () => {
        deletelocation(0)
        navigation.goBack()
    }

    React.useEffect(() => {
        LogBox.ignoreLogs(['currentlyFocusedField']);
        // console.log(locations) 
    }, [])
    return (
        <HeaderScrollView goBackFunc={goBack} modifiedFunc={modifiedFunc} navigationWhere={''} titleStyle={{ fontSize: hp('3%') }} backButton={true} nextButton={false} title={"Modifier votre compte"} navigation={navigation}>
            <View style={styles.profilePicture}>
                <Image
                    indicator={ProgressBar} indicatorProps={{
                        size: 40,
                        borderWidth: 1,
                        // width: Dimensions.get('window').width,
                        // marginTop: hp('27%'),
                        color: 'rgba(150, 150, 150, 1)',
                        unfilledColor: 'rgba(200, 200, 200, 0.2)'
                    }} imageStyle={styles.profilImage} source={{ uri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg' }}
                />
                <TouchableOpacity activeOpacity={0.8} style={styles.iconModify}>
                    <Foundation name='pencil' size={hp(2)} color={'white'} />
                </TouchableOpacity>
            </View>

            <View style={styles.informationsProfil}>
                <View style={styles.userName}>
                    <TextInput
                        mode='outlined'
                        //@ts-ignore
                        ref={ref_input1}
                        style={{ height: hp('6%'), }}
                        label="Username"
                        theme={{ roundness: 15, }}
                        returnKeyType={'next'}
                        blurOnSubmit={false}
                        //@ts-ignore
                        onSubmitEditing={() => ref_input2.current.focus()}
                    />
                </View>
                <View style={styles.fullName}>
                    <TextInput
                        //@ts-ignore
                        ref={ref_input2}
                        //@ts-ignore
                        onSubmitEditing={() => ref_input3.current.focus()}
                        mode='outlined'
                        style={{ height: hp('6%'), }}
                        label="Nom"
                        theme={{ roundness: 15, }}
                    />
                </View>
                <View style={styles.surName}>
                    <TextInput
                        //@ts-ignore
                        ref={ref_input3}
                        //@ts-ignore
                        onSubmitEditing={() => ref_input4.current.focus()}
                        mode='outlined'
                        style={{ height: hp('6%'), }}
                        label="Prénom"
                        theme={{ roundness: 15, }}
                    />
                </View>
                <View style={styles.email}>
                    <TextInput
                        //@ts-ignore
                        ref={ref_input4}
                        //@ts-ignore
                        onSubmitEditing={() => ref_input5.current.focus()}
                        mode='outlined'
                        style={{ height: hp('6%'), }}
                        label="Email"
                        theme={{ roundness: 15, }}
                    />
                </View>


                {Platform.OS == 'android' ? <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('searchWhere')} style={styles.email}>
                    <TextInput
                        //@ts-ignore
                        ref={ref_input4}
                        //@ts-ignore
                        onSubmitEditing={() => ref_input5.current.focus()}
                        mode='outlined'
                        value={locations.locationReducer[0] ? locations.locationReducer[0].note : state.localization}
                        editable={false}
                        style={{ height: hp('6%'), }}
                        label="Localisation"
                        theme={{ roundness: 15, }}
                    />
                </TouchableOpacity> : <TouchableOpacity1 activeOpacity={0.7} onPress={() => navigation.navigate('searchWhere')} style={styles.email}>
                        <TextInput
                            //@ts-ignore
                            ref={ref_input4}
                            //@ts-ignore
                            onSubmitEditing={() => ref_input5.current.focus()}
                            mode='outlined'
                            value={locations.locationReducer[0] ? locations.locationReducer[0].note : state.localization}
                            editable={false}
                            style={{ height: hp('6%'), }}
                            label="Localisation"
                            theme={{ roundness: 15, }}
                        />
                    </TouchableOpacity1>}

                <View style={styles.password}>
                    <TextInput
                        //@ts-ignore
                        ref={ref_input5}
                        //@ts-ignore
                        // onSubmitEditing={() => ref_input3.current.focus()}
                        mode='outlined'
                        style={{ height: hp('6%'), }}
                        label="Mot de passe"
                        theme={{ roundness: 15, }}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: 'white', marginTop:20 }}>
                <TouchableOpacity onPress={() => modifiedFunc()} style={{ backgroundColor: 'lightskyblue', padding: hp(1.5), paddingHorizontal: hp(4), alignSelf: 'center', marginHorizontal: 10, marginVertical: 6, borderRadius: 1000 }}>
                    <Text style={{ color: 'white', fontWeight: '500' }}>Modifier</Text>
                </TouchableOpacity></View>
        </HeaderScrollView>
    );
};

export default EditScreen;


