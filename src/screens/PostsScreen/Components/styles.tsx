import { View, Text, Button, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },

    headerView:{
        paddingTop: 20, paddingBottom: 20, 
    },
    headerContainerView:{
        flexDirection: 'row',
  
        justifyContent:'space-between'
        // alignItems: 'center'
    },


    imagePostStyle:{
        padding:3,
        height: hp(20),
        
    },
    projectImage:{
        height:hp(20),
        width:wp(45),
        position:'relative'
      
    }
  });

export default styles