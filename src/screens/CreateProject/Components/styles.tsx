
import { Platform, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    center: {
       
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: ifIphoneX(90, 60),
        // paddingTop:ifIphoneX(60,20),

        //flexDirection:'row',
        backgroundColor: 'lightskyblue',
        paddingHorizontal: 7,
    },
    titleView: {
        fontSize: 19,
        lineHeight: 22,
        textAlign: 'center',
        //   right:18,
        //   marginTop:20,
        fontWeight: '700',
        letterSpacing: 0.019,
    },


    // Firstcard
    firstCardView: {
        padding:20,
        marginBottom:10,
        minHeight:200,
        width:'88%',
        marginTop:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor:"white",
        borderRadius:10,
    },
    tittleView: {
   
    },
    tittleTextInput: {
        fontWeight:"700",
        backgroundColor:'#fff',
        borderColor:'grey',
   
    },
    descriptionTextInput: {
        marginTop:20,
        borderRadius:7,
        
    },
    separator:{
        borderWidth:0.5,
        marginVertical:11,
        borderColor:'grey'
    },
    //second card
    // Firstcard
    secondCardView: {
        padding:20,
        marginBottom:10,
        minHeight:80,
        width:'88%',
        marginTop:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
        backgroundColor:"white",
        borderRadius:10,
        justifyContent:'space-between'
    },
    categoryText:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    labelCategory:{
        fontWeight:'700',
        fontSize:17
    },

    //third card
    thirdCardView:{
        marginTop:30,
        width:'88%',
        padding:12,
        paddingLeft:16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor:'white',
        elevation: 3,
        marginBottom:10,
        borderRadius:10,
    },
    titleThirdCardView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleThirdCard:{

    },
    iconTitle:{

    },
    addAndDeleteView:{
        flexDirection:'row'
    },
    photoView:{
        marginTop:2
    },
    instructionLabel:{
        justifyContent:'center',
        alignSelf:'center',
        alignContent:'center',
        marginTop:10
    },
    labelSelection:{
        fontWeight:'300',
        fontSize:15,
        color:'grey',
        textAlign:'center',
        alignSelf:'center'
    },
    photoThirdCard:{
        marginHorizontal:8,
        marginBottom:8,
        width:150,
        height:110,
       
        borderRadius:6,
        marginTop:8
    },


    //fourth card view
    fourthCardView:{

    },
    container: {
        
        marginTop:20,
        flex:1,
        minWidth:100
        // justifyContent: 'center',
      },
      input: {
        padding: 5,
        borderWidth: 1,
         borderColor: 'grey',
         borderRadius:8,
         minHeight:60
      },
      userSuggestionContainer: {
        padding: 10,
       
        // borderColor: 'blue',
       
        marginBottom: 2,
        
        zIndex:1000,
        flexDirection:'row',
        backgroundColor:"white"
      },
      userText: {
        fontWeight: 'bold',
        color: 'blue',
      },

      buttonSend:{
        padding:9,
        width:150,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginVertical:20,
        marginBottom:Platform.OS == 'ios'? 10: 50
      },
      textButton:{
        fontWeight:"700",
        fontSize:17,
        color:'white'
      }
});

export default styles