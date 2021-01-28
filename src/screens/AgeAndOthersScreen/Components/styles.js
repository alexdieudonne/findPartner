import {
    StyleSheet,
    Dimensions
} from 'react-native';

export default styles = StyleSheet.create({
    container: {

      backgroundColor: '#009387'
    },
    header: {
       //flex: 1,
        marginTop:"30%",
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        //flex: 2,
        justifyContent:"space-between",
        backgroundColor: '#fff',
        
        height:220,
        // marginBottom:"90%",
        marginHorizontal:10,
        borderRadius:13,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
       // alignSelf:"center",
        color: '#05375a',
        fontWeight:'700',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: -8,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    viewHomo:{
        flexDirection:'row'
    },
    homo: {
       // color: '#ff1b36',
        fontSize: 14,
    },
    button: {
        
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal:20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    datePicker:{
        // flexDirection:'row',
        height:40,
       // paddingHorizontal:100,
       justifyContent:'center',
       borderColor:"grey",
       borderRadius:6,
       // borderWidth:0.7,
        textAlign:"center"
    },
    datePickerTxt:{
        color:"#49464a",
        width:"100%",
        paddingHorizontal:70,
        textAlign:'center'
    },




    view: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      content: {
        backgroundColor: 'white',
        padding: 4,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 4,
        borderTopLeftRadius:4,
        borderTopRightRadius:4,
        
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      contentTitle: {
        fontSize: 20,
        marginBottom: 12,
      },
      buttonClose:{
          paddingRight:10,
          paddingTop:7,
          alignItems:"flex-end"
      },
      datePickerReal:{
        justifyContent: "center",  display: "flex", flex: 1, alignItems: "center" 
      },


      textInputDescription:{
          width:"100%",
          height:100,
          borderRadius:10,
          backgroundColor:'rgba(2,0.3,2,0.2)',
          padding:15,
          paddingVertical:10
          
      },

      typeAccountView: {
        //flex: 2,
        //justifyContent:"space-between",
        backgroundColor: '#fff',
        marginTop:14,
        // marginBottom:"90%",
        marginHorizontal:10,
        borderRadius:13,
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    whereILive: {
        //flex: 2,
        //justifyContent:"space-between",
        backgroundColor: '#fff',
        marginTop:14,
        flexDirection:'row',
        justifyContent:'space-between',
        // marginBottom:"90%",
        marginHorizontal:10,
        borderRadius:13,
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    selectPickerView:{
        borderColor:'red',
        marginTop:20,
        alignContent:'center',
        justifyContent:'center',
        width:"100%",
          height:50,
          borderRadius:10,
          backgroundColor:'rgba(2,0.3,2,0.2)',
          padding:15,
          paddingVertical:10
    },
    otherView:{
        borderColor:'red',
        width:"100%",
        height:80,
        backgroundColor:'rgba(2,0.3,2,0.1)',
        borderRadius:5,
        marginTop:20
    },
    otherTextInput:{
        padding:10
    }
    
  });
