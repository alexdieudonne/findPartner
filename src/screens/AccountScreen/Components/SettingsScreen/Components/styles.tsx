import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    FirstViewPart: {
        paddingHorizontal: 16
    },
    AccountView: {
        flexDirection: 'row'
    },
    iconAccountStyle: {

    },
    labelText: {
        fontSize: heightPercentageToDP('2.2%'),
        fontWeight: '700',
        marginLeft: 7,
        bottom: -heightPercentageToDP('1%'),
    },
    notificationLabelText: {
        fontSize: heightPercentageToDP('2.1%'),
        fontWeight: '700',
        marginLeft: 10,
        top: Platform.OS == 'ios' ? heightPercentageToDP('0.3%') : 0
        // bottom:-heightPercentageToDP('1%'),
    },
    EditProfileView: {
        marginBottom: heightPercentageToDP('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    EditProfileText: {
        color: 'grey',
        fontSize: heightPercentageToDP('1.8%'),
    },
    EditProfileIcon: {
        marginTop: -heightPercentageToDP('0.5%')
    },

    //separator
    separator: {
        borderTopWidth: .5,
        borderColor: 'grey',
        width: '93%',
        alignSelf: 'center',
        marginVertical: 8,
        marginBottom: 20
    },
    separatorNotification: {
        borderTopWidth: .4,
        borderColor: 'grey',
        width: '93%',
        alignSelf: 'center',
        marginVertical: heightPercentageToDP('1.3%'),
        marginBottom: 20
    },

    switchContainer: {
        height: 9
    },
    switch: {
        //height:8 ,
        transform: [{ scaleX: Platform.OS == 'android' ? .9 : .7 }, { scaleY: Platform.OS == 'android' ? .9 : .7 }],

    },

    //button
    bottomPartView: {

    },
    logoutButton: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: heightPercentageToDP('2.1%'),
        padding: heightPercentageToDP('1.5%'),
        backgroundColor:'white',
        borderRadius:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    logoutIcon: {

    },
    logoutText: {
        fontSize: heightPercentageToDP('1.9%'),
        fontWeight: 'bold',
        marginLeft: 13
    }
});

export default styles