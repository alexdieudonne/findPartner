import React, { Fragment, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, FlatList, LogBox, Image, TouchableOpacity, TextInput as TextInput1, StatusBar, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { SharedElement } from 'react-navigation-shared-element';
import styles from './Components/styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper'
import ModernHeader from "react-native-modern-header";
import ModalSelector from 'react-native-modal-selector'

import { useSelector, useDispatch } from 'react-redux'
import { addLocation, deleteLocation } from '../../redux/manageLocation'

import ImagePicker from 'react-native-image-crop-picker';
import * as Animatable from 'react-native-animatable';
import HeaderScrollView from '../../components/utils/header2.0'
import { MentionInput, Tag } from 'react-native-complete-mentions';
import LinearGradient from 'react-native-linear-gradient';


const allDomain = [{ id: 1, imgUri: require('../../../assets/images/music.png'), domainName: 'Musique' }, { id: 2, imgUri: require('../../../assets/images/education.png'), domainName: 'Éducation' }, { id: 3, imgUri: require('../../../assets/images/jobs.png'), domainName: 'Jobs' }, { id: 4, imgUri: require('../../../assets/images/videographie.png'), domainName: 'Vidéographie' }, { id: 5, imgUri: require('../../../assets/images/photographie.png'), domainName: 'Photographie' }, { id: 6, imgUri: require('../../../assets/images/plus1.png'), domainName: 'Autre' }]
const suggestedUsers = [{ name: 'John', id: 1 }, { name: 'Eve', id: 2 }, { name: 'Bar', id: 3 }, { name: 'Bar', id: 4 }, { name: 'Bar', id: 5 }, { name: 'Bar', id: 6 }, { name: 'Bar', id: 7 }, { name: 'Bar', id: 8 }];


function UserSuggestion({ name, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.userSuggestionContainer}>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}

const renderUserSuggestions = ({ keyword, tracking, commit }) => {
    if (!tracking || keyword === '') return null;
    return (<View style={{ flexDirection: 'row', position: 'absolute', backgroundColor: 'white', zIndex: 9999, top: -50 }}>
        {suggestedUsers.slice(0, 5).map(user => (
            <UserSuggestion
                name={user.name}
                // id={user.id}
                onPress={() => commit({ name: user.name, id: user.id })}
            />
        ))}
    </View>)
};
const PostProjectScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const deletelocation = (id: number) => dispatch(deleteLocation(id))
    const [validator, setValidator] = React.useState({ titleValid: true, descriptionValid: true, categoryValid: true, locationValid: true, photosValid: true });

    const locations = useSelector((state: any) => state)
    const [imageUri, setImageUri] = React.useState({ images: [] as any })
    const [state, setState] = React.useState({ description: "" });
    const [textInputValue, setTextInput] = React.useState('Selectionnez')
    const [title, setTitle] = React.useState('Créer un nouveau projet')
    const [value, setValue] = React.useState('');
    const [extractedValue, setExtractedValue] = React.useState('');

    React.useEffect(() => {
        LogBox.ignoreLogs(['currentlyFocusedField']);
    }, [])

    function send() {
        
        if (title.length == 'Créer un nouveau projet'.length || state.description.length == 0 || textInputValue == 'Selectionnez' || !locations.locationReducer[0] || imageUri.images.length == 0) {
                //set
                setValidator({
                    ...validator,
                    titleValid: title.length == 'Créer un nouveau projet'.length || title.length==0? false: true,
                    descriptionValid:state.description.length == 0? false:true,
                    categoryValid: textInputValue == 'Selectionnez'?false:true,
                    locationValid: locations.locationReducer[0] ? true:false,
                    photosValid:imageUri.images.length == 0?false:true
                })
            
         
            Alert.alert('pas bon')
        } else {
            deletelocation(0)
            navigation.goBack()
        }

    }


    const handleTittleChange = (val: string) => {
        if (val.length != 0) {

            setTitle(val);
            setValidator({
                ...validator,
                titleValid: true

            })
        } else {
            setValidator({
                ...validator,
                titleValid: false
            })
        }
    }

    const handleDescriptionChange = (val: string) => {
        if (val.length != 0) {
            setState({ description: val });
            setValidator({
                ...validator,
                descriptionValid: true
            })
        } else {
            setValidator({
                ...validator,
                descriptionValid: false
            })
        }
    }

    const handleCategoryChange = (val: string) => {
        if (val.length != 0) {
            setTextInput(val)
            setValidator({
                ...validator,
                categoryValid: true
            })
        } else {
            setValidator({
                ...validator,
                categoryValid: false
            })
        }
    }

    function chooseImage() {
        StatusBar.setBarStyle('dark-content')
        ImagePicker.openPicker({
            multiple: true,
            width: 300,
            height: 400,
            cropping: true
        }).then((image: any) => {
            //StatusBar.setBarStyle('light-content')
            setImageUri({ ...imageUri, images: [...imageUri.images, image] })
            //console.log(image[0].path);
        });
    }
    function cleanImage() {
        setImageUri({ ...imageUri, images: [] })
    }
    function truncate(source: string, size: number) {
        return source.length > size ? source.slice(0, size - 1) + "…" : source;
    }
    var res = truncate(title, 25);

    return (
        <HeaderScrollView title={!validator.titleValid ? 'Créer un nouveau projet' : res} backButton={true} navigation={navigation}>
            <View style={{ marginTop: 12 }}>
                <SafeAreaView style={styles.center}>
                    <View style={styles.firstCardView}>
                        <View style={styles.tittleView}>
                            <TextInput error={!validator.titleValid} theme={{ roundness: 10 }} onChangeText={(text) => handleTittleChange(text)} underlineColor={'lightskyblue'} mode={'outlined'} label={'Titre de votre projet'} style={styles.tittleTextInput} />
                        </View>
                        <View style={styles.descriptionTextInput}>
                            <TextInput error={!validator.descriptionValid} theme={{ roundness: 0 }} onChangeText={handleDescriptionChange} selectionColor={'lightskyblue'} underlineColorAndroid={'lightskyblue'} underlineColor={'grey'} placeholder={'Décrivez votre projet'} multiline style={[styles.descriptionTextInput, { borderWidth: validator.descriptionValid ? 0 : 1, borderColor: 'red' }]} />
                        </View>
                    </View>
                    <View style={styles.secondCardView}>
                        <View style={styles.categoryText}>
                            <Text style={styles.labelCategory}>Catégorie</Text>
                            <ModalSelector
                                data={allDomain}
                                //initValue="Select something yummy!"
                                keyExtractor={item => item.id}
                                labelExtractor={item => item.domainName}
                                supportedOrientations={['portrait']}
                                animationType={'fade'}
                                scrollViewAccessibilityLabel={'Scrollable options'}
                                cancelText={'Annuler'}
                                //cancelButtonAccessibilityLabel={'Annuler'}
                                onChange={(option) => { handleCategoryChange(option.domainName) }}>
                                <View style={{
                                  
                                }}>
                                    <Text style={{ color: textInputValue == 'Selectionnez' ? !validator.categoryValid ? 'red': 'grey' : 'black', }}>{textInputValue}</Text>
                                </View>

                            </ModalSelector>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.categoryText}>
                            <Text style={styles.labelCategory}>Où?</Text>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('searchWhere')}>
                                <Text style={{ color: locations.locationReducer[0] ? 'black' : !validator.locationValid ? 'red':'grey' }}>{locations.locationReducer[0] ? truncate(locations.locationReducer[0].note, 30) : 'Selectionnez'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.thirdCardView}>
                        <View style={styles.titleThirdCardView}>
                            <Text style={styles.labelCategory}>Ajouter des photos</Text>
                            <View style={styles.addAndDeleteView}>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => chooseImage()}>
                                    <Icon name='add-circle-outline' size={24} style={styles.iconTitle} />
                                </TouchableOpacity>
                                {imageUri.images.length == 0 ?
                                    null :
                                    <Animatable.View animation={'bounceIn'}>
                                        <TouchableOpacity activeOpacity={0.5} onPress={() => cleanImage()}>
                                            <Icon name='close-circle-outline' size={24} style={styles.iconTitle} />
                                        </TouchableOpacity>
                                    </Animatable.View>}
                            </View>

                        </View>
                        <ScrollView horizontal style={styles.photoView} showsHorizontalScrollIndicator={false}>
                            {imageUri.images.length == 0 ?
                                <View style={styles.instructionLabel}>
                                    <Text style={[styles.labelSelection,{color:validator.photosValid?'grey':'red'}]}>Sélectionnez des photos</Text>
                                </View> :
                                imageUri.images.map((item: any, index: number) => {
                                    var iteme = item[0].path
                                    return (
                                        <Animatable.View animation={'bounceInRight'} style={styles.photoThirdCard} key={index}>
                                            <Image style={{ height: '100%', borderRadius: 10, }} source={{ uri: iteme }} resizeMode='contain' />
                                        </Animatable.View>
                                    )
                                })}
                        </ScrollView>
                    </View>

                    <View style={styles.thirdCardView}>
                        <Text style={styles.labelCategory}>Des participants?</Text>
                        <View>

                        </View>
                        <View style={styles.container}>
                            <MentionInput
                                value={value}
                                onChangeText={setValue}
                                onExtractedStringChange={setExtractedValue}
                                style={styles.input}>
                                <Tag
                                    tag="@"
                                    renderSuggestions={renderUserSuggestions}
                                    renderText={mention => <Text style={styles.userText}>{mention.name}</Text>}
                                    formatText={text => `@${text}`}
                                    extractString={mention => `@[${mention.name}](id:${mention.id})`}
                                />
                            </MentionInput>
                        </View>
                        {/* <TextInput1 /> */}
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={send}>
                        <LinearGradient colors={['#74c0f9', '#8fcbf7', '#a7d8fc']} style={styles.buttonSend}>
                            <Text style={styles.textButton}>Poster</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </HeaderScrollView>

    );
};

// const mapStateToProps= (state: any) =>{
//     return state
// }

export default PostProjectScreen


