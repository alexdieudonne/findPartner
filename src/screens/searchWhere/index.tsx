import React, { Fragment, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Animated, SafeAreaViewBase, Platform, TextInput } from 'react-native';
import styles from './Components/styles'
import ModernHeader from "react-native-modern-header";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import PlacesInput from 'react-native-places-input';
import { useSelector, useDispatch } from 'react-redux'
import { addLocation, deleteLocation } from '../../redux/manageLocation'





const searchWhereScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const addlocation = (note: any) => dispatch(addLocation(note))
    const deletelocation = (id: number) => dispatch(deleteLocation(id))
    const [place, setPlace] = React.useState('');
    const locations = useSelector((state: any) => state)
    const selected = (value: any) => {
        addlocation(value.result.name)
        navigation.goBack()
       
        //console.log(value.result.name)
    }
    return (
        <View >
            <View style={styles.header} >
                <PlacesInput
                    googleApiKey='AIzaSyCQ-m_RCOWHz-iYWGItttWymGWXL-7XwEI'

                    keyboardShouldPersistTaps={'handled'}
                    placeHolder={"Rechercher"}
                    resultRender={place => `${place.terms[0].value}, ${place.terms[place.terms.length-1].value}`}
                    language={"fr"}
                    onSelect={place => selected(place)}
                    stylesInput={styles.textInputSearchBar}
                    stylesList={{
                        marginTop: 10,
                        borderRadius: 8,
                        shadowColor: "#000",
                        elevation: 5,
                    }}
                    textInputProps={{
                        // Super hacky..
                        ref: (textInput) => {
                          textInput && textInput.focus()
                        },
                      }}
                />

            </View>
        </View>

    );
};

export default searchWhereScreen;


