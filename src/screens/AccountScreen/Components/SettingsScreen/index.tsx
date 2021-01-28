import React, { useRef, useEffect } from "react";
import { View, Button, Text, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Switch } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Header from 'react-native-modern-header'
import { handlePasswordChange } from "../../../SignUpScreen/Components/optionsFunction";
import { heightPercentageToDP } from "react-native-responsive-screen";
import styles from "./Components/styles";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";




export default function Example(route:any) {
    const {navigation} = route
    const onClose = route.onClose
     console.log(route)
    const navigate = (where:string)=>{
        onClose()
        navigation.navigate(where)
    }
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <>
            <View >
                <SafeAreaView >
                    <ScrollView style={styles.FirstViewPart}>
                        <View style={styles.AccountView}>
                            <MaterialCommunityIcons style={styles.iconAccountStyle} name='account-edit-outline' size={heightPercentageToDP('4%')} />
                            <Text style={styles.labelText}>Compte</Text>
                        </View>
                        <View style={styles.separator} />
                        <TouchableOpacity onPress={()=>navigate('EditAccount')} style={styles.EditProfileView}>
                            <Text style={styles.EditProfileText}>Modifier votre compte</Text>
                            <Icon style={styles.EditProfileIcon} color='grey' name='chevron-forward' size={heightPercentageToDP('2.7%')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigate('EditBioAndOther')}  style={styles.EditProfileView}>
                            <Text style={styles.EditProfileText}>Changer votre bio, votre type de compte...</Text>
                            <Icon style={styles.EditProfileIcon} color='grey' name='chevron-forward' size={heightPercentageToDP('2.7%')} />
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.EditProfileView}>
                            <Text style={styles.EditProfileText}>Modifier vos réseaux sociaux etc...</Text>
                            <Icon style={styles.EditProfileIcon} color='grey' name='chevron-forward' size={heightPercentageToDP('2.7%')} />
                        </TouchableOpacity> */}
                        <View style={[styles.AccountView, { marginTop: 10 }]}>
                            <Fontisto style={styles.iconAccountStyle} name='bell' size={heightPercentageToDP('2.7%')} />
                            <Text style={styles.notificationLabelText}>Notifications</Text>
                        </View>
                        <View style={styles.separatorNotification} />

                        <View style={styles.EditProfileView}>
                            <Text style={styles.EditProfileText}>Notifications</Text>
                            <View style={styles.switchContainer}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "lightskyblue" }}
                                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={styles.switch}
                                    
                                />
                            </View>
                        </View>
                        <View style={[styles.AccountView, { marginTop: 10 }]}>
                            <MaterialCommunityIcons style={styles.iconAccountStyle} name='card-plus-outline' size={heightPercentageToDP('2.7%')} />
                            <Text style={styles.notificationLabelText}>Plus</Text>
                        </View>
                        <View style={styles.separatorNotification} />
                        <TouchableOpacity style={styles.EditProfileView}>
                            <Text style={styles.EditProfileText}>Langue</Text>
                            <Icon style={styles.EditProfileIcon} color='grey' name='chevron-forward' size={heightPercentageToDP('2.7%')} />
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.EditProfileView}>
                            <Text style={styles.EditProfileText}>Pays</Text>
                            <Icon style={styles.EditProfileIcon} color='grey' name='chevron-forward' size={heightPercentageToDP('2.7%')} />
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={styles.bottomPartView}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.logoutButton}>
                            <AntDesign color='lightskyblue' style={styles.logoutIcon} name='logout' size={heightPercentageToDP('2.2%')}/>
                            <Text style={styles.logoutText}>Déconnexion</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
}