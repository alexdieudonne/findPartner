
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        height:ifIphoneX(114, 60),
        paddingTop:ifIphoneX(30,20),
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor: 'lightskyblue',
        paddingHorizontal: 7,
    },
    contain:{
        flex:1,
   
    },
    // card
    cardView: {
        //paddingVertical: 20,
      },
      domainCard: {
        
        // paddingLeft: 12
    },


    domainView:{
        flexDirection:'row',
        
        //marginHorizontal:10,
        paddingTop:5,
       // marginTop:10,
        // alignContent:'center',
        
    },


    domanCardContent: {
        marginTop: 2,
        justifyContent: "space-between",
        marginHorizontal: 12,
        width:wp('34%') ,
    //    paddingHorizontal:hp('6%'),
        padding: hp('1%'),
        paddingVertical:hp('1.2%'),
        marginBottom: 10,
        shadowColor: "#000",
        elevation:3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
  
        borderRadius: 10,
        backgroundColor: "white",
    
        alignContent: 'center'
    },
    domainCardText: {
        alignSelf: "center",
        fontSize: 16
    },
    bodyView:{
    //  marginTop: 10,
    // marginBottom:10,
     
   
    },

    //swipeable card
    swipeableCard:{
        alignSelf:'center',
        zIndex:-1000,
        elevation:5
    },
    projectsView: {
        
        //borderWidth:Platform.OS == 'android'? 0.4:0,
        borderColor:'grey',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        elevation:5,
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        //elevation: 11,
       // marginTop: 30,
        marginLeft: 10,
        width: wp('80%'),
        marginHorizontal:10,
        borderRadius: 10,
        
       

    },
    imageProjectView: {
        backgroundColor: "white",
 
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        //height: 180
        height: hp('22%'),
    },
    imageProject: {
             height:hp('22%'),
            width:"100%",
        
            borderTopLeftRadius:12,
            borderTopRightRadius:12,
    },
    bottomPartProject: {
        elevation:5,
        minHeight:hp('16%'),
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      
        paddingHorizontal: 16,
        paddingVertical: hp('2%'),
        backgroundColor: 'white',

    },
    tittleProject: {
        width: 250,
        fontWeight: '700',
        fontSize: hp('2.3%'),
    },
    descriptionProjectView: {
        marginTop: 15,
        flexDirection: 'row',
       
    },
    messageLabelProject: {
        color: "grey",
    },
    descriptionProject: {
        //fontSize: hp('2%'),
        minHeight:hp('2%')
    },


    //swipe card
    container:{
      // flex: 1,
     //  marginTop:hp("-8%"),
       width: '100%', 
       height: hp('50%'),
       elevation:5
    //backgroundColor: "#F5FCFF",
   // elevation:5
    },
    content:{
        //flex: 5,
        elevation:5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    overlayLabel:{
        fontSize: 45,
  fontWeight: 'bold',
  borderRadius: 10,
  padding: 10,
  overflow: 'hidden' ,
 
    }
});

export default styles