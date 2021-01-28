import { Dimensions, Platform, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const height = hp('12%')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    topPartProfile: {
        flexDirection: 'row',
        //  height:hp('42%')
    },
    imageProfil: {
        marginHorizontal: 15,


        marginVertical: 12,
        borderRadius: 12,
        //  height: Dimensions.get('window').height,
    },
    imageStyle: {
        // height: hp('28%'),
        width: wp('40%'),
        borderRadius: 12,
        position: 'relative',
        resizeMode: "cover"
    },
    informationsProfile: {
        marginTop: 13,
    },
    description: {
        width: hp('23.6%')
    },
    descriptionText: {
        fontSize: hp('1.9%')
    },
    categoryText: {
        marginVertical: 20,
        fontSize: hp('2%'),
        fontWeight: '700'
    },
    locationView: {
        flexDirection: 'row',

    },
    locationText: {
        marginLeft: wp('1.8%'),
        flexDirection: 'row',
        color: 'grey',
        // marginTop:wp('1%'),
        fontSize: hp('1.5%')
    },

    emailView: {
        marginTop: wp('1%'),
        width: wp('45%'),
        flexDirection: 'row',
    },
    emailText: {
        marginLeft: wp('1.8%'),
        color: 'grey',
        //marginTop:wp('1%'),
        marginBottom: hp('2%'),
        fontSize: hp('1.5%')
    },
    socialIcons: {
        flexDirection: 'row',
        right: 7
    },



    //
    buttonLeft: {
        paddingHorizontal: 32,
    },
    buttonRight: {
        paddingHorizontal: 12,

    },
    secondPart: {
        marginTop: 30,
        alignSelf: 'flex-end',
        paddingVertical: 10,
    },
    subscribeButton: {
        flexDirection: 'row',

        marginRight: 30,
        backgroundColor: 'white',
        borderRadius: 25,
        borderWidth: 0.3,
        borderColor: 'grey',
        padding: 6
    },


    //
    followersInfosView: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 13,
        paddingHorizontal: 30
    },
    postView: {
        alignItems: 'center'
    },
    postNumber: {
        fontWeight: '700',
        fontSize: hp('2%')
    },
    postText: {
        color: 'grey',
        fontSize: hp('1.6%')
    },
    followersView: {

        alignItems: 'center'
    },
    friendView: {
        alignItems: 'center'
    },


    //all posts
    ProjectsAndPhotos: {
        marginTop: 26
    },
    projectsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    allPostsText: {
        fontSize: 25,
        fontWeight: '700'
    },
    seeMoreText: {
        color: 'grey',
        marginTop: 7
    },

    //
    horizontalStyle: {

    },
    viewImage: {
        marginHorizontal: 20
    },
    imagePostStyle: {
        // height: 0,
        marginTop: 23,
        position: 'relative',
        marginBottom: 17,
        borderRadius: 12
    },
    projectImage: {
        height: hp('24%'),
        position: 'relative',
        width: wp('55%'),
        resizeMode: 'stretch',
        borderRadius: Platform.OS == 'android' ? 25 : 10
    },
    infoPhoto: {
        marginBottom: 20
    },


    //project
    scrollCardStyle:{
        paddingTop:20
    },
    cardProject:{
        marginHorizontal:20,
        borderWidth:0.4,
        borderRadius: Platform.OS == 'android' ? 9 : 10,
        marginBottom:40
    },
    viewImageProject:{
        borderBottomWidth:0.4
    },
    projectImageReal:{
        height: hp('24%'),
        position: 'relative',
        width: wp('55%'),
        resizeMode: 'stretch',
        borderTopLeftRadius: Platform.OS == 'android' ? 23 : 10,
        borderTopRightRadius: Platform.OS == 'android' ? 23  : 10,
        
    },
    titleProject:{
       // marginTop:12,
 
        paddingHorizontal:8,
        paddingVertical:15,
        width:wp('55%')
    },
    titleText:{
        fontWeight:'bold',
        fontSize:hp('2%')
    }

});

export default styles