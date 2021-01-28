import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
     // flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },

    profilePicture:{
      
        alignSelf:'center',
        marginVertical:20,
        position:'relative'
    },
    profilImage:{
        width: Dimensions.get('window').height * 0.2,
        height: Dimensions.get('window').height * 0.2,
        position:'relative',
        borderRadius:Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    },
    iconModify:{
        position:'absolute', 
        alignSelf:'flex-end',
        bottom:3,
        padding:hp('1.2%'),
        paddingHorizontal:hp('1.4%'),
        right:hp('1.2%'),
        backgroundColor:'lightskyblue',
        borderColor:'white',
        borderWidth:2,
        borderRadius:10000,
    },
    informationsProfil:{
        //alignSelf:'center',
        marginHorizontal:20,
        marginTop:hp(2),
        borderRadius:20,
    },
    userName:{

    },
    fullName:{
        marginVertical:hp(2)
    },
    surName:{
        marginBottom:hp(2)
    },
    email:{
        marginBottom:hp(2)
    },
    password:{

    }
  });

export default styles