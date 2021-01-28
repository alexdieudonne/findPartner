
import { Platform, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    center: {

    },

    typeAccount: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginHorizontal: hp(3),
        borderRadius: 8,
        elevation: 5,
        marginVertical: 9,
        paddingVertical:18
    },
    iamTextView: {
        flexDirection: 'row',
        // justifyContent:'space-between',
        marginHorizontal: 9,
        marginTop: 13,
        marginLeft:hp(3)
    },
    iamText: {
        fontSize: hp(2),
        fontWeight: '400',
        flexDirection: 'row'
    },
    bioView: {
        // flexDirection:'row',
        marginTop: hp(3),
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginHorizontal: hp(3),
        borderRadius: 8,
        elevation: 5,
        marginVertical: 9,
        paddingBottom:20,
        paddingTop:13
        // alignItems:'center'
    },
    bioText: {
      
        fontSize: hp(2.3),
        fontWeight: 'bold',
        paddingLeft: 9,
        color: 'lightskyblue'

    },
    descriptionTextView: {
        width: '90%',
        alignSelf: 'center',
        // minHeight:hp(13)
    },
    rncPicker: {
        //width:hp(15),
        height: hp(2),
        marginTop: Platform.OS == 'android' ? -wp(3.2) : wp(0.5)
    },
    descriptionTextInput: {
        width: '90%',
        alignSelf: 'center',
        //minHeight: hp(13),
        maxHeight: hp(13)
    },

    //social network view
    socialView:{
        marginTop:hp(1.3)
        //alignSelf:'center',
       // width:'100%'
    },
    socialViewContent:{
        flexDirection:'row',
        //alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginLeft:20,
       // justifyContent:'space-between'
    },
    socialText:{
        fontWeight:'bold'
    },
    socialTextInput:{
       //maxWidth:'75%',
       alignSelf:'center',
       
       maxWidth:'67%',
        height:hp(4),
        fontSize:hp(1.8)
    },

    addButton:{
        alignSelf:'center',
        marginTop:30,
        paddingVertical:hp(2),
        backgroundColor:'#cfcfcf',
        paddingHorizontal:wp(16),
        borderRadius:10,
       
    },

    //button view
    buttonView:{
        width:'60%',
        alignSelf:'center',
        alignContent:'center',
        marginVertical:20,
        marginBottom:30,
        
    },
    linearGradient:{
        paddingVertical:hp(2),
        borderRadius:hp(1)
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontSize:hp(2)
    }



});

export default styles