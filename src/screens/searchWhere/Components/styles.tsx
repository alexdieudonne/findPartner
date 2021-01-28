
import { Platform, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        height: 700,
        borderRadius: 8,
       
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 7,
        // },
        // shadowOpacity: 0.43,
        // shadowRadius: 9.51,

        // elevation: 2,
    },
    searchBar: {
        padding: 8,

        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        marginHorizontal: 9
    },
    iconSearch: {
        alignSelf: 'center',

        marginHorizontal: 8,
    },
    viewTextInputSearchBar: {
        alignSelf: 'center',
        marginTop: 4,
        width: "80%",
        // height:40
    },
    textInputSearchBar: {
        height:Platform.OS == "ios"?55: 48,
        borderRadius: 10,
        shadowColor: "#000",
        elevation: 3,
    },

    body:{
        marginTop: 10,
    }
});

export default styles