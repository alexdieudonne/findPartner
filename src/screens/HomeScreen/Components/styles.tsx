
import { View, Text, Button, StyleSheet, StatusBar, Platform } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { config2Spec, width } from './config2Spec'
const { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT, ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE, } = config2Spec
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    pageContainer: {
        // marginLeft: 15,
        //backgroundColor:'rgba(0, 0, 0, 0.1)',
        flex: 0

    },
    header:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        //backgroundColor: 'lightskyblue',
        
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    helloText: {

        fontSize: 18,
        color: 'grey'
    },
    helloTextView: {
 
        marginTop: 50,
        marginLeft:20,
        flexDirection: 'row',
        alignSelf:'flex-start'
    },
    helloName: {
        
        fontSize: 18,
        fontWeight: '800'
    },

    messagesOrAlerts: {
        marginTop: ifIphoneX(20,38),
        // position: "absolute",
        marginBottom:20
    },
    youGot: {
        fontSize: 17,
        
        fontWeight: "bold"
    },
    youGotMessagesOrAlert: {
  
        color: '#24BA1E',
        fontWeight: "bold",
        fontSize: 15,
    },
    helloView: {
      
        marginLeft: 15,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    notificationsText: {
        color: 'white',
        textAlign:'center'
    },
    profilPictureView: {
      
        marginTop: 13,
        marginRight: 15
    },
    profilPicture: {

        width: 110,
       //height: 110,
        borderRadius: 16,

    },
    notifications: {
        position: "absolute",
        zIndex: 1000,
        alignSelf: 'flex-end',
        justifyContent:'center',
       // padding: 5,
       // paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: 'red',
        marginLeft: 10,
        borderWidth: 3,
        borderColor: 'white',
        marginRight: -10
    },


    domainView: {
        marginTop: 30,

    },
    topPartDomainView: {

    },
    topPartDomain: {
        flexDirection: 'row',

        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    tittleText: {
        fontSize: 20,
        fontWeight: "bold",
      
    },
    defaultText: {
        color: 'grey',
        fontSize: 15,
     
    },
    domainText: {
      
        fontSize: 15,
        marginTop: 7,
        marginLeft: 15,
        color: 'grey'
    },

    domainCard: {
        // paddingBottom: 20,
        // paddingLeft: 12
    },
    domanCardContent: {
        marginTop: 30,
        justifyContent: "space-between",
        marginHorizontal: 12,
        width: wp('42%'),
        
        paddingBottom: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",

        alignContent: 'center'
    },
    domainCardText: {
        alignSelf: "center",
        fontSize: 16
    },

    //recommended
    containerCardProfil: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        margin: SPACING,
        marginTop: 20
    },
    recommended: {

        // paddingRight:20,

        borderRadius: 10,
        justifyContent: 'flex-end'

    },
    recomendedOverlay: {
        position: 'absolute',
        height: "100%",
        width: "100%",
        borderRadius: 10,
        backgroundColor: "rgba(8,8,2, 0.1)"
    },
    addButtonView: {
        position: "absolute",
        flexDirection: 'column',
        alignSelf: 'flex-end',
        padding: 20,
        paddingTop: 14,

    },
    bottomRecomended: {
        position: "absolute",
        color: 'white',
        left: SPACING / 0.4,
        bottom: SPACING / 0.3,


    },
    nameRecommanded: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        width: ITEM_WIDTH * 0.7,
        textTransform: 'uppercase',
        position: 'absolute',
        top: SPACING / 0.5,
        left: SPACING / 0.6,
    },
    seeMoreRecommanded: {
        textAlign: 'center',
        top: ITEM_HEIGHT / 2.4,
        fontSize: 25,
        fontWeight: '700',
        color: 'white',
        textTransform: 'uppercase'
    },
    typeRecommended: {
        color: 'white',
        fontSize: 16,
    },
    capacityRecommended: {
        color: '#CCCCCC',
        fontSize: 14
    },

    //projets
    bottomPart: {
        //marginTop:10
        paddingVertical: 20,
        marginBottom: 20,
    },
    projectsView: {


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        borderWidth:Platform.OS === 'android'? 0.4: 0,
        // elevation: 11,
        marginTop: 30,
        marginLeft: 10,
        width: 310,
        borderRadius: 10
    },
    imageProjectView: {
        backgroundColor: "white",

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: hp('32%')
    },
    imageProject: {

    },
    bottomPartProject: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        width:"100%"

    },
    tittleProject: {
        width: ITEM_WIDTH * 0.7,
        fontWeight: '700',
        fontSize: 16,
        
    },
    descriptionProjectView: {
        marginTop: 15,
        flexDirection: 'row'
    },
    messageLabelProject: {
        color: "grey",
    },
    descriptionProject: {
        width: wp("71%"),
        fontSize: hp('2%'),
    }


});
